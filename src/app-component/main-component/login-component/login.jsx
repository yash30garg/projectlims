
import React, { Component } from 'react';
import './login.css';
// import Header from '../../header-component/header';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {getUser, getBook} from '../../../Service/dataService.js'
// import Form from 'react-validation/build/form';
// import Input from 'react-validation/build/input';
export var email, mid;

class Login extends Component {

    state =
    {
        display: [],
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
                        <div className="header" onClick={handleClick} style={{fontWeight : "1000px"}}><b>Click Here to Enter</b></div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>
                        <form action="http://localhost:3005/api/" method="post">
                        <div class="form-group">
                            <input type="text" id="Email" name="logemail" placeholder="E-mail" />

                        </div>
                        <div class="form-group">
                            <input type="password" id="Password" name="logpassword" placeholder="Password" />

                        </div>
                        <div class="checkbox-container">
                            <input type="checkbox" />
                            <div class="text-checkbox">     I agree with the terms of service.</div>
                        </div>
                        <div class="button-area">
                            {/*<Link to="/home">*/}
                                <button type="submit" class="btn-primary">Login</button>
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
                                <button class="btn-primary">Admin</button>
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