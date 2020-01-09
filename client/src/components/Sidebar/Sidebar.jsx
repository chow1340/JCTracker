
import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import AdminNavbarLinks from "../Navbars/AdminNavbarLinks.jsx";

import logo from "assets/img/images.jpg";


class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      loggedOutDisplay: 'block',
      loggedInDisplay: 'block',
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
    const user = sessionStorage.getItem('user')

    // --- If logged in, hide create user and log in
    if(user){
      this.setState({
        loggedOutDisplay: 'none'
      })
    }
    // --- If logged out, hide log out
    if(!user){
     this.setState({
       loggedInDisplay: 'none'
     })
    }
  }
  

  render() {
    const loggedOut = {
      display: this.state.loggedOutDisplay
    }
    
    const loggedIn = {
      display: this.state.loggedInDisplay
    }
    // this.logIn()
    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color={this.props.color}
        data-image={this.props.image}
      >
        <div className="logo">
          <a
            href="https://www.creative-tim.com?ref=lbd-sidebar"
            className="simple-text logo-mini"
          >
            <div className="logo-img" id = 'basketballLogo'>
              <img src={logo} alt="logo_image" />
            </div>
          </a>
          <a
            className="simple-text logo-normal"
          >
            JC Tracker
          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {/* {this.state.width <= 991 ? <AdminNavbarLinks /> : null}
            {this.props.routes.map((prop, key) => {
              if (!prop.redirect)
                return (
                  <li
              
                    key={key}
                  >
                    <NavLink
                      to={prop.layout + prop.path}
                      className="nav-link"
                      activeClassName="active"
                    >
                      <i className={prop.icon} />
                      <p>{prop.name}</p>
                    </NavLink>
                  </li>
                );  
              return null;
            })} */}
            <li>
              <NavLink
                to = {'/admin/Home'}
                className = "nav-link"
                activeClassName = "active">
                <i className = 'pe-7s-home'></i>
                <p>Home</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                to = {'/admin/user'}
                className = "nav-link"
                activeClassName = "active">
                <i className = 'pe-7s-users'></i>
                <p>Track Players</p>
              </NavLink>
            </li>
            <li style = {loggedOut}>
              <NavLink
                to = {'/admin/createUser'}
                className = "nav-link"
                activeClassName = "active">
                <i className = 'pe-7s-add-user'></i>
                <p>Create User</p>
              </NavLink>
            </li>
            <li style = {loggedOut}>
              <NavLink
                to = {'/admin/login'}
                className = "nav-link"
                activeClassName = "active">
                <i className = 'pe-7s-user'></i>
                <p>Log In</p>
              </NavLink>
            </li>
            <li style = {loggedIn}>
              <NavLink
                to = {'/admin/logout'}
                className = 'nav-link'
                activeClassName = 'active'
              >
                <i className = 'pe-7s-close-circle'></i>
                <p>Log Out</p>
              </NavLink>
            </li>
            
          </ul>
        </div>
      </div>
    );
  }
}

export default Sidebar;
