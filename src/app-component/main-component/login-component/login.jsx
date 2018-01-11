
import React, { Component } from 'react';
import './login.css';
import Rx from 'rxjs/Rx';
// import Header from '../../header-component/header';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { getUser, getBook } from '../../../Service/dataService.js'
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
export var email, mid;
let users;


class Login extends Component {
    constructor() {
        super();

    }
    state =
    {
        display: [],
    }

    getUserDetails = () => {
        fetch("http://localhost:3005/api/", {
            method: 'POST',
            body: JSON.stringify({ email: "Chaitanya.Boyapati@mindtree.com", password: "chaitanya" }), // stringify JSON
            headers: new Headers({ "Content-Type": "application/json" }) // add headers
        }).then((response)=> {
            console.log(response.json())
        })
    }
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/ds48n')
            .then(res => {
                this.setState({ display: res.data });
            })
    }
    validate = (e) => {
        // email = this.refs.email.value
        var users = getUser();
        console.log(users)
        e.preventDefault();
        //console.log(email)
        //console.log(this.state.display)
        //const a=this.state.display.filter((user)=>user.user.mid===email)
        //console.log(user.user.mid)
        //console.log(a[0].user.name);
    }


    // state={show:true}
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
                        <img src="https://i.ytimg.com/vi/PiYvQyG4ucc/maxresdefault.jpg" alt="" onClick={handleClick}></img>
                        <div className="header" onClick={handleClick} style={{ fontWeight: "2000px" }}><b>Click Here to Enter</b></div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>
                        {/*<form action="http://limsreactapi.azurewebsites.net/api/" method="post">*/}
                        <form onSubmit={this.getUserDetails}>
                            <div className="form-group">
                                <input type="text" id="Email" name="logemail" placeholder="E-mail" />

                            </div>
                            <div className="form-group">
                                <input type="password" id="Password" name="logpassword" placeholder="Password" />

                            </div>
                            <div className="checkbox-container">
                                <input type="checkbox" />
                                <div className="text-checkbox">     I agree with the terms of service.</div>
                            </div>
                            <div className="button-area">
                                {/*<Link to="/home">*/}
                                <button type="submit" className="btn-secondary" style={{color:"white", backgroundColor : "#DEB887", borderColor:"#A0522D"}}>Login</button>
                                {/*</Link>*/}
                                {/*<div class="login-form">
                        <img src="https://krysiacanvindotorg.files.wordpress.com/2013/02/janko-ferlic-174927.jpg" alt="" onClick={handleClick}></img>
                        <div className="header" onClick={handleClick} style={{fontWeight : "3000px"}}><b>Click Here to Enter</b></div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>
                        <form action="http://limsreactapi.azurewebsites.net/api/" method="post">
                        <div className="form-group">
                            <input type="text" id="Email" name="logemail" placeholder="E-mail" />

                        </div>
                        <div className="form-group">
                            <input type="password" id="Password" name="logpassword" placeholder="Password" />

                        </div>
                        <div className="checkbox-container">
                            <input type="checkbox" />
                            <div className="text-checkbox">     I agree with the terms of service.</div>
                        </div>
                        <div className="button-area">
                            {/*<Link to="/home">*/}
                                
                            {/*</Link>*/}
                            {/*<div class="login-form">
					<form action="/" method="post">
                    <form onSubmit={this.validate}>
						<input type="text" name="logemail" placeholder="E-mail" required=""/>>
						<input type="password" name="logpassword" placeholder="Password" required=""/>>
						<div class="tp">
							<button type="submit" onClick={this.validate} value="LOGIN NOW">Login Now</button>
						</div>
					</form>
				</div>*/}

                            <Link to="/adminDash">
                                <button className="btn-secondary" style={{color:"white", backgroundColor : "#DEB887", borderColor:"#A0522D"}}>Admin</button>
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