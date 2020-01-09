
import React, { Component } from "react";
import ChartistGraph from "react-chartist";
import { Grid, Row, Col } from "react-bootstrap";

import { LiveCard } from "components/GameCard/LiveCard.jsx";
import { DateCard } from 'components/GameCard/DateCard.jsx'

import axios from 'axios'
import dotenv from 'dotenv'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import clevelandLogo from '../assets/img/Cleveland_Cavaliers_logo.svg'
import detroitLogo from '../assets/img/Pistons_logo17.svg'
var moment = require('moment-timezone');
require('dotenv').config()


class Dashboard extends Component {
  constructor(props){
    super(props)
    //--Get current date... rapidAPI is in UTC so have to get tomorrow's
      const today = new Date()
      const tomorrow = new Date(today)
      tomorrow.setDate(tomorrow.getDate() + 1)

      function formatDate(tomorrow) {
        var d = new Date(tomorrow),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
    
        if (month.length < 2) 
            month = '0' + month;
        if (day.length < 2) 
            day = '0' + day;
    
        return [year, month, day].join('-');
      }
      
    this.state = {
      liveGames: [],
      date: formatDate(tomorrow),
      newDate: new Date(),
      games:[]
    }
    this.gameList = this.gameList.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.dateGames = this.dateGames.bind(this)
    this.formateDate = this.formatDate.bind(this)
  }
  componentDidMount(){
    // GET LIVE GAMES STATS
    axios({
      "method":"GET",
      "url":"https://api-nba-v1.p.rapidapi.com/games/live/",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
      }
      })
      .then((response)=>{
        this.setState({
          liveGames: response.data.api.games
        })
      })
      .catch((error)=>{
        console.log(error)
    })

    //---GET GAMES ON CURRENT DATE
    axios({
      "method":"GET",
      "url":"https://api-nba-v1.p.rapidapi.com/games/date/" + this.state.date,
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
      }
      })
      .then((response)=>{
        console.log(response)
        this.setState({
          games: response.data.api.games
        })
      })
      .catch((error)=>{
        console.log(error)
      })
  }
  //List out the live games
  gameList(){
    if(this.state.liveGames.length === 0) {
      return (
        <div className = 'gamesAlert'>
            <h4>Theres currently no live games!</h4>
            <br/>
            <br/>
            <br/>
        </div>
      )
    } else {
      return this.state.liveGames.map( game => {
        const homeTeam = game.hTeam.nickName;
        const homeScore = game.hTeam.score.points;
        var homeLogo = game.hTeam.logo
        const awayTeam = game.vTeam.nickName;
        const awayScore = game.vTeam.score.points;
        var awayLogo = game.vTeam.logo;
        const quarter = game.currentPeriod.charAt(0);
        const gameTime = game.clock;
        
        //--Set cleveland logo
        if(game.vTeam.nickName === 'Cavaliers'){
          awayLogo = clevelandLogo
        } 
        if (game.hTeam.nickName === 'Cavaliers'){
          homeLogo = clevelandLogo
        }

        //--Set detroit logo
        if(game.vTeam.nickName === 'Pistons'){
          awayLogo = detroitLogo
        } 
        if (game.hTeam.nickName === 'Pistons'){
          homeLogo = detroitLogo
        }
        //Display halftime
        if(game.quarter === '2' && gameTime === '0') {
          var halftime = 'Halftime'
        } else {
          var halftime = null
        }

        //Display end of quarter
        if(game.EndOfPeriod === '1'){
          var endPeriod = 'Quarter Ended'
        } else {
          var endPeriod = ''
        } 
        return (
          <Col>
            <LiveCard 
            homeTeam = {homeTeam}
            homeScore = {homeScore}
            homeLogo = {homeLogo}
            awayTeam = {awayTeam}
            awayScore = {awayScore}
            awayLogo = {awayLogo}
            quarter = {quarter}
            gameTime = {gameTime}
            halftime = {halftime}
            endPeriod = {endPeriod}
            />
          </Col>
          )
        
      })
      
    }
    
  }
  formatDate(tomorrow) {
    var d = new Date(tomorrow),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  handleChange = date => {
    //Set the display date inside the text box
    this.setState({
      newDate: date
    })

    // Format the newDate selected by the user to get tomorrow's date for rapidAPI
    const tomorrow = new Date(date)
    tomorrow.setDate(tomorrow.getDate() + 1)

    this.formatDate(tomorrow)

    // // --Gets the games for EST date
    axios({
      "method":"GET",
      "url":"https://api-nba-v1.p.rapidapi.com/games/date/" + this.formatDate(tomorrow),
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
      "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
      }
      })
      .then((response)=>{
        this.setState({
          games: response.data.api.games
        })
      })
      .catch((error)=>{
        console.log(error)
      })

  }
  // --- FIND THE GAMES ON A CERTAIN DATE. DEFAULT IS TODAY
  dateGames(){
    if(this.state.games.length === 0) {
      return(
        <div className = 'gamesAlert'>
          <h4>There are no games on this date</h4>
        </div>
      )
    } else {
      return this.state.games.map( game => {
        const homeTeam = game.hTeam.nickName;
        var homeLogo = game.hTeam.logo
        const awayTeam = game.vTeam.nickName;
        var awayLogo = game.vTeam.logo;
        var utcTime = game.startTimeUTC
        var startTimeEST = moment(utcTime).tz('America/Toronto').format('h:mm z');
        
        //--Set cleveland logo
        if(game.vTeam.nickName === 'Cavaliers'){
          var awayLogo = clevelandLogo
        } 
        if (game.hTeam.nickName === 'Cavaliers'){
          var homeLogo = clevelandLogo
        }

        //--Set detroit logo
        if(game.vTeam.nickName === 'Pistons'){
          var awayLogo = detroitLogo
        } 
        if (game.hTeam.nickName === 'Pistons'){
          var homeLogo = detroitLogo
        }
        
        return (
          <Col>
            <DateCard
            homeTeam = {homeTeam}
            homeLogo = {homeLogo}
            awayTeam = {awayTeam}
            awayLogo = {awayLogo}
            time = {startTimeEST}
            />
          </Col>
          )
        
      })
    }
  }

  render() {
    return (
      <div className="content">
        <h2 id = 'liveGames'> Live Games</h2>
        <Grid fluid>
          <Row>
            {this.gameList()}  
          </Row>
      
        <h2>Games</h2>
          <label>Date: {'\u00A0'}</label> 
          <DatePicker 
          selected = {this.state.newDate}
          onChange = {this.handleChange}
          />
          <br/>
          <br/>
          <Row>
            {this.dateGames()}
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
