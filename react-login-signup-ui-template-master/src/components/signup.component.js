import React, { Component } from "react";
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            name: '',
            hasAgreed: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        let target = e.target;
        let value = target.type === 'checkbox' ? target.checked : target.value;
        let name = target.name;

        this.setState({
          [name]: value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
localStorage.removeItem('user');
localStorage.removeItem('password');
localStorage.removeItem('name');
        console.log('The form was submitted with the following data:');
        console.log(this.state);

        localStorage.setItem('user', this.state.email);
        localStorage.setItem('password', this.state.password);
        localStorage.setItem('name', this.state.name);
     console.log('The form was submitted with the following data:');   
     this.props.history.push("/Home");
    }

    render() {
        return (
            <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>Welcome To Edunomics</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

            <div className="auth-wrapper">
            
            <div className=" auth-inner">
            <form onSubmit={this.handleSubmit}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>First name</label>
                    <input type="text" id="name" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} placeholder="First name" />
                </div>

                <div className="form-group">
                    <label>Last name</label>
                    <input type="text" className="form-control" placeholder="Last name" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" id="email" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" id="password" name="password" className="form-control"value={this.state.password} onChange={this.handleChange} placeholder="Enter password" />
                </div>
                <div className="form-group">
                    
                    <span className="inlining"><input type="checkbox" id="hasAgreed" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} className=" checkbox form-control" /><label>I have read the T&C's and Agree to them</label></span>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered <a href="#">sign in?</a>
                </p>
            </form>
            </div>
            </div>
            </div>
        );
    }
}