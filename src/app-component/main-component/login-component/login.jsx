import React, { Component } from 'react';
import './login.css';
import '../../App.css';
import '../../header-component/header.css'
import { authContext } from '../../../adalConfig.js';
// import Rx from 'rxjs/Rx';
// import Header from '../../header-component/header';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
import { requireAuth } from '../../isLoggedIn.js'
var req = require('request');
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
export var email, mid;


class Login extends Component {
    constructor() {
        super();
        var Backlen = window.history.length;
        window.history.go(-Backlen);

        // window.location.href = 'http://localhost:3000/#/login'
        window.location.href='https://limsreact.azurewebsites.net/#/login'

    }
    state =
    {
        display: [],
        message: '',
    }
    componentWillMount() {
        requireAuth(window.location.href)
    }

    handleLogin = (e) => {
        e.preventDefault();
        authContext.login();
    }
    getUserDetails = (e) => {
        e.preventDefault();
        let email = document.getElementById('Email').value;
        let password = document.getElementById('Password').value;
        if (email === "" || password === "") {
            this.setState({ message: 'Enter All Details' })
        }
        else {
            req.post({
                url: 'https://limsreactapi.azurewebsites.net/api/',
                form: { email: email, password: password },
                headers: new Headers({ "Content-Type": "application/json" }),
                method: 'POST'
            },

                function (er, r, body) {
                    //console.log((body)
                    if (JSON.parse(body).status === 200) {
                        let response = JSON.parse(body)
                        let userDetails = response.data[0]
                        //console.log(("Login Successful")
                        localStorage.setItem('limsuser', JSON.stringify(userDetails));
                        // window.location = "http://localhost:3000/#/"
                        window.location = "https://limsreactapi.azurewebsites.net/#/"
                    }
                    else if (JSON.parse(body).status === 400) {
                        this.setState({ message: JSON.parse(body).message })
                        //console.log((r.statusCode)
                    }



                    // //console.log((JSON.parse(body));
                }.bind(this));
        }
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
                        <div className="h2">Welcome to LiMS</div>
                        {/*<form action="https://limsreactapi.azurewebsites.net/api/" method="post">*/}
                        <form onSubmit={this.getUserDetails}>
                            <div><img
                                className="App-logo inset"
                                src={require("../../../Assets/Images/final_header.jpg")}
                                alt="My logo"
                                align="center"/></div>
                            <div className="form-group">
                                Login with Mindtree Credentials
                            </div>
                            <div className="form-group">
                                <img
                                onClick = {this.handleLogin}
                                className="login-button"
                                src={require("../../../Assets/Images/loginButton.png")}
                                alt="My logo"
                                align="center"/>
                                {/*<button type="submit" className="btn-secondary" style={{ color: "white", backgroundColor: "#DEB887", borderColor: "#A0522D" }}>Login</button>*/}
                            </div>
                        </form>
                    </div>
                </div>

            </div>

        );
    }
}



export default Login;