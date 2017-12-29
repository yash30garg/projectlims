
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
                        <div className="header" onClick={handleClick}>Click Here to Enter</div>
                    </div>
                    <div className="login-right">
                        <div className="h2">Login</div>
   
    <div class="form-group">
      <input type="text" id="Email" placeholder="Email" />
         
    </div>
    <div class="form-group">
      <input type="password" id="Password" placeholder="Password" />
         
    </div>
    <div class="checkbox-container">
      <input type="checkbox" />
      <div class="text-checkbox">     I agree with the terms of service.</div>
    </div> 
    <div class="button-area">
         <Link to="/home">
      <button class="btn-primary">Login</button>
      </Link>
    </div>
  </div>
</div>

            </div>

        );
    }
}



export default Login;
