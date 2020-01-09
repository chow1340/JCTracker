
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import axios from 'axios'
import PlayerCardGames from "./PlayerCardGames";

export class PlayerCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
        pastFiveGames: this.props.pastFiveGames
      }
      this.displayGames = this.displayGames.bind(this)
      this.addPlayer = this.addPlayer.bind(this)
  }

  displayGames() {
      console.log(this.props.pastFiveGames)
      return(
        this.props.pastFiveGames.map(games => 
            <PlayerCardGames 
                vTeamName = {games.vTeamName}
                hTeamName = {games.hTeamName}
                points = {games.points}
                fgm = {games.fgm}
                fga = {games.fga}
                fgp = {games.fgp}
                ftp = {games.ftp}
                ftm = {games.ftm}
                fta = {games.fta}
                tpa = {games.tpa}
                tpm = {games.tpm}
                tpp = {games.tpp}
            />
        )
      )
  }
  addPlayer(){
    const user = {
        username: sessionStorage.getItem('user'),
        playerId: this.props.playerId,
    }
    axios.post('/api/users/update/players', user)
    .then(() => window.location.reload())
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="card" >
          <div className = 'content'>
            <button onClick ={() => this.addPlayer()} className = 'btn btn-success'>Add player</button>
            <div className = 'playerName'>
                <h3>{this.props.firstName} {this.props.lastName}</h3>
            </div>
            <br/>
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Team: </h5>
                <p className = 'stat'>{this.props.playerTeam}</p>
            </div>  
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Number: </h5>
                <p className = 'stat'>{this.props.playerJersey}</p>
            </div> 
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Position: </h5>
                <p className = 'stat'>{this.props.playerPosition}</p>
            </div>  
            <br/>
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Born: </h5>
                <p className = 'stat'>{this.props.playerBirthdate}</p>
            </div>  
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Years Pro: </h5>
                <p className = 'stat'>{this.props.playerYearsPro} years</p>
            </div>  
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Height (Meters): </h5>
                <p className = 'stat'>{this.props.playerHeight}</p>
            </div>  
            <div className = 'statDiv'>
                <h5 className = 'statHeader'>Weight (kg): </h5>
                <p className = 'stat'>{this.props.playerWeight}</p>
            </div>     

            <div className = 'games'>
                <h4> Last 5 games:</h4>
                {/* {this.displayGames()} */}
            </div>
          </div>   
      </div>
    );
  }
}

export default PlayerCard;
