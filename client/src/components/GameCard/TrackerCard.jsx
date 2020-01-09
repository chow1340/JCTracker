import React, {Component} from 'react'
import { Grid, Row, Col } from "react-bootstrap";
import axios from 'axios';


class TrackerCard extends Component {
    constructor(props) {
        super(props)
    
        this.removePlayer = this.removePlayer.bind(this)
    }

    removePlayer() {
        const username = sessionStorage.getItem('user');
        const playerId = this.props.playerId
        console.log(username, playerId)
        axios.delete('/api/users/remove/trackedPlayer', {
            params: {
                username: username,
                playerId: playerId
            }
        })
        .then(window.location.reload())
       .catch(err => console.log(err))
    }

    render(){
        return (
            <div className = "trackedContent">
                <button onClick = {() => this.removePlayer()} type="button" class="btn btn-danger" id = 'removePlayer'>Remove Player</button>
                <h4>{this.props.playerName}</h4>
                <p>Latest Game:</p>
                <h5> 
                    {this.props.hTeam + ' '} 
                    {/* <img src = {this.props.hTeamLogo} alt = 'home team logo' className = 'teamLogo'></img>  */}
                    VS 
                    {' ' + this.props.vTeam} 
                    {/* <img src = {this.props.vTeamLogo} alt = 'visit team logo' className = 'teamLogo'></img> */}
                </h5>
                    <Grid>
                        <Row>
                            <Col sm = {2}>
                                Points: {this.props.points}
                                <br/>
                                FGM: {this.props.fgm}
                                <br/>
                                FGA: {this.props.fga}
                                <br/>
                                FGP: {this.props.fgp}
                                <br/>
                            </Col>
                            <Col sm = {2}>
                                FTA: {this.props.fta}
                                <br/>
                                FTM: {this.props.ftm}
                                <br/>
                                FTP: {this.props.ftp}
                            </Col>
                            <Col sm = {2}>
                                FTA: {this.props.fta}
                                <br/>
                                FTM: {this.props.ftm}
                                <br/>
                                FTP: {this.props.ftp}
                            </Col>
                            <Col sm = {2}>
                                3PA: {this.props.tpa}
                                <br/>
                                3PM: {this.props.tpm}
                                <br/>
                                3PP: {this.props.tpp}
                            </Col>
                        </Row>
                    </Grid>
            </div>
        )
    }
}


export default TrackerCard