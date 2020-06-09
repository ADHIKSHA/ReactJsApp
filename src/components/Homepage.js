import React, { Component } from "react";
import '../App.css';
import '../Home.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default class Homepage extends Component {
    render() {
        return (
            <div>
 <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Welcome To Edunomics</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>Logout </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
<div className="sidenav">
  <a href="#about" className="top">Home</a>
  <a href="#services">Sessions</a>
   <a href="#services">Downloads</a>
  <a href="#clients">Settings</a>
  <a href="#contact">About</a>
</div>

<div class="main">
  <ul>
  <li className="box">All Sessions</li>
  <li className="box">Practice Sessions</li>
  <li className="box">Downloads</li>
  <li className="box">Ask Questions</li>
  </ul>

</div>
 <div className="contains">
  <p className="innercontain">Topics Covered</p>
  <p className="innercontain"> Recent Activities </p>
  </div>
   </div>
        );
    }
}