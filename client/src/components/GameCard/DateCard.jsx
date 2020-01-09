
import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";

export class DateCard extends Component {
  constructor(props) {
      super(props)
      this.state = {
        time: this.props.time
      }
    
  }
  
  render() {
    return (
      <Col sm = {6}>
        <div className="card card-stats">
          <div className="content">
            <div className = 'scoreboard'>
              <div className = 'teamDisplay'>
                <h3 className = 'teamName'>
                  <img className = 'teamLogo' 
                  src = {this.props.homeLogo}
                  alt = 'home team logo'></img>
                    {this.props.homeTeam}
                  <p className = 'gameScore'>{this.props.homeScore}</p>
                </h3>
              </div>
              <div className = 'teamDisplay'>
                <h3 className = 'teamName'>
                  <img className = 'teamLogo' 
                  src = {this.props.awayLogo}
                  alt = 'away team logo'></img>
                    {this.props.awayTeam}
                  <p className = 'gameScore'>{this.props.awayScore}</p>
                </h3>
              </div>
            </div>

            <div className="footer">
              <hr />
              <div className="stats">
                Start time: {this.props.time}
              </div>
            </div>
          </div>
        </div>
      </Col>
      
    );
  }
}

export default DateCard;
