import React, {Component} from 'react'
import { Grid, Row, Col } from "react-bootstrap";


class PlayerCardGames extends Component {
    constructor(props) {
        super(props)
    }

    render(){
        return (
            <div className = "content">
                <h5> {this.props.hTeamName} VS {this.props.vTeamName}</h5>
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
                                3PA: {this.props.fta}
                                <br/>
                                3PM: {this.props.ftm}
                                <br/>
                                3PP: {this.props.ftp}
                            </Col>
                        </Row>
                    </Grid>
            </div>
        )
    }
}


export default PlayerCardGames