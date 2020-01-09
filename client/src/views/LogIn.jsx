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
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import Button from "components/CustomButton/CustomButton.jsx";
import axios from "axios";

class CreateUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      password2: '',
      message: '',
      alert: 'none'
    }

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePassword2 = this.onChangePassword2.bind(this);
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }
  onChangePassword(e) {
    this.setState({
      password: e.target.value
    })
  }
  onChangePassword2(e) {
    this.setState({
      password2: e.target.value
    })
  }

  onSubmit(e){
    e.preventDefault();
    const user = {
        username: this.state.username,
        password: this.state.password,
    }

    axios.post('/api/users/login', user)
        .then(res => {
            // If not user, it will return a string and display error
            if(typeof res.data === 'string') {
                this.setState({
                    message: res.data,
                    alert: 'block'
                })
            }
            //If user, it will return an object
            if(typeof res.data === 'object') {
                console.log(res.data.username);
                sessionStorage.setItem('user', res.data.username)
                window.location.href = '/'
            }
        })
        .catch(err => console.log(err))

};
  render() {
    const alertStyle = {
      display: this.state.alert
    }
    return (
      <div className="content">
         <div className = 'alert alert-warning' style = {alertStyle}> {this.state.message} </div>
        <Grid fluid>
          <Row>
            <Col md={8}>
              <Card
                title="Log In"
                content={
                  <form onSubmit = {this.onSubmit}>
                    <label>Username</label>
                    <input 
                      type = 'text'
                      className = 'form-control'
                      placeholder = 'Username'
                      onChange = {this.onChangeUsername}
                      required
                      />

                    <label>Password</label>
                    <input
                      type = 'password'
                      className = 'form-control'
                      placeholder = 'Password'
                      onChange = {this.onChangePassword}
                      required
                      />

                    <br/>
                    <Button bsStyle="info" pullRight fill type="submit">
                      Log In
                    </Button>
                    <div className="clearfix" />
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    );
  }
}

export default CreateUser;
