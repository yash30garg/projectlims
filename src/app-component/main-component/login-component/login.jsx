
import React, { Component } from 'react';
import './login.css';
// import Header from '../../header-component/header';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
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
    validate = () =>
    {
        email = this.refs.email.value
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
                        <img src="http://res.cloudinary.com/dzqowkhxu/image/upload/v1513679279/bg-login_bxxfkf.png" alt="" onClick={handleClick}></img>
                        <div className="h1" onClick={handleClick}>Click Here to Enter Mindtree Library</div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>

                        <div className="input-field col s12">
                            <input ref="email" id="email" type="email" className="validate" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="password" type="password" className="validate" />
                            <label htmlFor="password">Password</label>
                        </div>
                        <div className="checkbox-container">
                            {/*<input type="checkbox"></input>*/}
                            <input type="checkbox" id="test5" /><label htmlFor="test5" />
                            <div className="text-checkbox">I agree with the terms of service.</div>
                        </div>

                        <div className="button-area">
                            {/*<Link to="/home"> */}
                            <Link to="/home">
                                <button className="btn-primary" onClick={this.validate}>Login</button>
                            </Link>
                            {/*</Link>*/}
                            <Link to="/admin">
                                <button className="btn-primary" onClick={this.validate}>Admin</button>
                            </Link>


                        </div>
                    </div>
                </div>

            </div>

        );
    }
}



export default Login;
