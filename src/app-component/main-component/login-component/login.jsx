
import React, { Component } from 'react';
import './login.css';
// import Rx from 'rxjs/Rx';
// import Header from '../../header-component/header';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { requireAuth } from '../../isLoggedIn.js'
var req = require('request');
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
export var email, mid;


class Login extends Component {
    constructor() {
        super();
        var Backlen=window.history.length;   
     window.history.go(-Backlen);   
     //window.location.href='http://localhost:3000/#/login'
    window.location.href='http://limsreact.azurewebsites.net/#/login'
    }
    state =
    {
        display: [],
        message: '',
    }
    componentWillMount() {
        requireAuth(window.location.href)
    }

    getUserDetails = (e) => {
        e.preventDefault();
        let email = document.getElementById('Email').value;
        let password = document.getElementById('Password').value;
        if(email===""||password==="")
        {
            this.setState({message: 'Enter All Details'})
        }
        else {
        req.post({
            url: 'http://localhost:3005/api/',
            form: { email: email, password: password},
            headers: new Headers({ "Content-Type": "application/json" }),
            method: 'POST'
        },

            function (er, r, body) {
                console.log(body)
                if (JSON.parse(body).status===200) {
                    let response = JSON.parse(body)
                    let userDetails = response.data[0]
                    console.log("Login Successful")
                    localStorage.setItem('limsuser', JSON.stringify(userDetails));
                    window.location = "http://localhost:3000/#/"
                }
                else if(JSON.parse(body).status === 400)
                {
                    this.setState({message: JSON.parse(body).message})
                    console.log(r.statusCode)
                }
                

                
                // console.log(JSON.parse(body));
            }.bind(this));  
        }    
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/ds48n')
            .then(res => {
                this.setState({ display: res.data });
            })
            // this.checkAuth();
    }
    
    render() {


        function handleClick(e) {
            e.preventDefault();
            var loginWrapper = document.getElementById('lw');
            return loginWrapper.classList.toggle('open');
        }
        return (

            <div className="setColor" >




                <div className="login-wrapper" id="lw">
                    <div className="login-left">
                        <img src="https://krysiacanvindotorg.files.wordpress.com/2013/02/janko-ferlic-174927.jpg" alt="" onClick={handleClick}></img>
                        <div className="header" onClick={handleClick} style={{ fontWeight: "2000px" }}><b>Click Here to Enter</b></div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>
                        {/*<form action="http://limsreactapi.azurewebsites.net/api/" method="post">*/}
                        <form onSubmit={this.getUserDetails}>
                            <div className="form-group">
                                <label htmlFor="Email" style={{ color: "#CD853F" }}><b>Email</b></label>
                                <input type="text" id="Email" name="logemail" style={{ backgroundColor: "#FFF8DC" }} />

                            </div>
                            <div className="form-group">
                                <label htmlFor="Password" style={{ color: "#CD853F" }}><b>Password</b></label>
                                <input type="password" id="Password" name="logpassword" style={{ backgroundColor: "#FFF8DC" }} />
                            </div>
                            <div className=" checkbox-container form-group has-warning" style={{ color: "#FFF8DC", textAlign: "left" }}>
                                <label style={{color:"red",fontSize:"14px",fontWeight:"bold"}}>
                                    {this.state.message}
                                </label>
                             </div>

                            <div className=" checkbox-container form-group has-warning" style={{ color: "#FFF8DC", textAlign: "left" }}>
                                <label className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" style={{ backgroundColor: "brown" }} />
                                    <span className="custom-control-indicator"></span>
                                    <div className="custom-control-description" style={{ fontSize: "18px", fontFamily: "times new roman", marginLeft: "0px" }}>I agree with the terms of service.</div>
                                </label>
                            </div>
                            

                            <div className="button-area">
                                {/*<Link to="/home">*/}
                                <button type="submit" className="btn-secondary" style={{ color: "white", backgroundColor: "#DEB887", borderColor: "#A0522D" }}>Login</button>
                                {/*</Link>*/}
                                {/*<div className="login-form">
                        <img src="https://krysiacanvindotorg.files.wordpress.com/2013/02/janko-ferlic-174927.jpg" alt="" onClick={handleClick}></img>
                        <div className="header" onClick={handleClick} style={{fontWeight : "3000px"}}><b>Click Here to Enter</b></div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>
                        <form action="http://limsreactapi.azurewebsites.net/api/" method="post">
                        <div className="form-group">
                            <label htmlFor="Email" style={{color:"#CD853F"}}><b>Email</b></label>
                            <input type="text" id="Email" name="logemail" style={{backgroundColor:"#FFF8DC"}}/>
                            
                        </div>
                        <div className="form-group">
                            <label htmlFor="Password" style={{color:"#CD853F"}}><b>Password</b></label>
                            <input type="password" id="Password" name="logpassword" style={{backgroundColor:"#FFF8DC "}}/>
                            
                        </div>
                        {/*<div className="checkbox-container">
                            <input type="checkbox" />
                            <div className="text-checkbox">     I agree with the terms of service.</div>
                        </div>*/}
                            


                                {/*<Link to="/home">*/}

                                {/*</Link>*/}
                                {/*<div className="login-form">
					<form action="/" method="post">
                    <form onSubmit={this.validate}>
						<input type="text" name="logemail" placeholder="E-mail" required=""/>>
						<input type="password" name="logpassword" placeholder="Password" required=""/>>
						<div className="tp">
							<button type="submit" onClick={this.validate} value="LOGIN NOW">Login Now</button>
						</div>
					</form>
				</div>*/}

                                <Link to="/admindash">
                              <button className="btn-secondary" style={{ color: "white", backgroundColor: "#DEB887", borderColor: "#A0522D" }}>Admin</button>
                                </Link>
                                </div>
                            
                        </form>
                    </div>
                </div>

            </div>

        );
    }
}



export default Login;