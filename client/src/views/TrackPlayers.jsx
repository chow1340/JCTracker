
import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";

import axios from 'axios'
import "react-datepicker/dist/react-datepicker.css";
import SearchBar from './SearchBar.jsx'
import TrackerCard from '../components/GameCard/TrackerCard'

var moment = require('moment-timezone');

class Dashboard extends Component {
  constructor(props){
    super(props)
    this.state = {
      playerId: '',
      trackedPlayers: [],
      latestGame: [],
      playerNames: [],
    }
    this.displayTracker = this.displayTracker.bind(this)
    this.logInWarning = this.logInWarning.bind(this)

  }
  componentDidMount(){
    // --- Get the user's tracked players 
    if(sessionStorage.getItem('user')) {
      axios.get(
        '/api/users/trackedPlayers', {
          params: {
            username: sessionStorage.getItem('user')
          }
        }
      )
      //Get stats of each player's games
      .then(res =>
        res.data.trackedPlayers.map(trackedPlayer => {
          axios({
            "method":"GET",
            "url":"https://api-nba-v1.p.rapidapi.com/statistics/players/playerId/"+trackedPlayer,
            "headers":{
            "content-type":"application/octet-stream",
            "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
            "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
            }
          })
          .then((res) => {
            axios({
              "method":"GET",
              "url":"https://api-nba-v1.p.rapidapi.com/players/playerId/"+trackedPlayer,
              "headers":{
              "content-type":"application/octet-stream",
              "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
              "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
              }
            })
            // --- Add names to the playerArrays
            .then((playerId) => {
              const latestGame = res.data.api.statistics[res.data.api.statistics.length-1];
              //--- Get the latestGame's gameId
              axios({
                "method":"GET",
                "url":"https://api-nba-v1.p.rapidapi.com/games/gameId/"+latestGame.gameId,
                "headers":{
                "content-type":"application/octet-stream",
                "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
                "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
                }
              })
              .then((gameId) =>  {
                console.log(gameId.data.api.games[0])
                const gameIdData = gameId.data.api.games[0];
                //--- Add gameIdDatas to the latestGameObjects
                const vTeam = gameIdData.vTeam.nickName;
                const hTeam = gameIdData.hTeam.nickName;
                const vTeamLogo = gameIdData.vTeam.logo;
                const hTeamLogo = gameIdData.hTeam.logo;
                //--- Get the player full names from the response
                const playerIdData = playerId.data.api.players[0];
                const playerName = playerIdData.firstName + ' ' + playerIdData.lastName;
                //---add values to the latestGame objects
                latestGame.playerName = playerName;
                latestGame.vTeam = vTeam;
                latestGame.hTeam = hTeam;
                latestGame.vTeamLogo = vTeamLogo;
                latestGame.hTeamLogo = hTeamLogo;
                console.log(latestGame)
                //---add latest game from each player to the latestGame array
                this.setState({
                  latestGame: this.state.latestGame.concat(latestGame)
                })
                
              })
            })
          })
        })
       )
    }
  }

  // Display the player stats
  displayTracker(){
    const latestGame = this.state.latestGame
    if(latestGame){
      return latestGame.map(latestGame => {
        return(
          console.log(latestGame),
          <TrackerCard 
            playerId = {latestGame.playerId}
            playerName = {latestGame.playerName}
            vTeam = {latestGame.vTeam}
            vTeamLogo = {latestGame.vTeamLogo}
            hTeam = {latestGame.hTeam}
            hTeamLogo = {latestGame.hTeamLogo}
            points = {latestGame.points}
            fgm = {latestGame.fgm}
            fga = {latestGame.fga}
            fgp = {latestGame.fgp}
            ftm = {latestGame.ftm}
            fta = {latestGame.fta}
            ftp = {latestGame.ftp}
            tpm = {latestGame.tpm}
            tpp = {latestGame.ttp}
            tpa = {latestGame.tpa}
          />
        )
      })
    }
  }

  // Toggle display on logged in
  logInWarning(){
    const user = sessionStorage.getItem('user')
    if(user){
      return(
        '       Your tracked players'
      )
    } else {
      return(
        '  Log in to begin tracking your players!'
      )
    }
  }
  
  
  render() {
    return (
      <div className = 'content'>
        <SearchBar callbackFromParent = {this.callbackFromChild}/>
          <div className = 'page-header'>
            <h4>{this.logInWarning()}</h4>
          </div>
        <div className = 'container'>
          {this.displayTracker()}
        </div>
      </div>
    );
  }
}

export default Dashboard;
