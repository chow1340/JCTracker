/*!

=========================================================
* Light Bootstrap Dashboard React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/light-bootstrap-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/light-bootstrap-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import Card from "components/Card/Card.jsx";
import axios from 'axios';

class TableList extends Component {
  constructor(props){
    super(props)
    this.state = {
      easternTeams: ['1', '2'],
      westernTeams: ['4', '5']
    }
  }

  // Gets all teams
  // "https://api-nba-v1.p.rapidapi.com/teams/league/standard"


  componentDidMount(){
   //Gets all the standings for east
    // axios({
    //   "method":"GET",
    //   "url":"https://api-nba-v1.p.rapidapi.com/standings/standard/2019/conference/east",
    //   "headers":{
    //   "content-type":"application/octet-stream",
    //   "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
    //   "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
    //   }
    //   })
    //   .then((response)=>{
    //     console.log(response)
    //   })
    //   .catch((error)=>{
    //     console.log(error)
    //   })

    // axios({
    //   //Gets all the standings for west
    //   "method":"GET",
    //   "url":"https://api-nba-v1.p.rapidapi.com/standings/standard/2019/conference/west",
    //   "headers":{
    //   "content-type":"application/octet-stream",
    //   "x-rapidapi-host":"api-nba-v1.p.rapidapi.com",
    //   "x-rapidapi-key":process.env.REACT_APP_RAPID_API_KEY
    //   }
    //   })
    //   .then((response)=>{
    //     console.log(response)
    //   })
    //   .catch((error)=>{
    //     console.log(error)
    //   })
  }
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
          

            <Col md={12}>
              <Card
                plain
                title="Striped Table with Hover"
                category="Here is a subtitle for this table"
                ctTableFullWidth
                ctTableResponsive
                content={
                  <Table hover>
                    <thead>
                      <tr>
                        <th>Standing</th>
                        <th>Team name</th>
                        <th>City</th>
                      </tr>
                    </thead>
                    <tbody>
                      
                    </tbody>
                  </Table>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default TableList;
