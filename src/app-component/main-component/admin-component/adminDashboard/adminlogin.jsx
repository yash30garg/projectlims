import React, { Component } from 'react';
import axios from 'axios';
import './adminlogin.css';
import Footer from '../../../footer-component/footer.jsx';
import $ from 'jquery';
import '../../../../logo.svg';
import '../../../App.css';
import { Link } from 'react-router-dom';
class AdminLogin extends Component {


    render() {

        return (

            <div>

                <div class="slideDown">

  <div class="wrapper">
    <h1>Welcome Back</h1>
    <div class="line"></div>
    <div class="line2"></div>
    <div class="circle">
      <a href="#">
        <div id="profile-image" alt="My logo">
            
        </div>
      </a>
    </div>

    <div class="formz">

      <form method="link">
        <input type="text" placeholder="username" />

        <input type="password" placeholder="password" />

<Link to="/admindash">
        <input type="submit" value="LOG IN" />
</Link>
      </form>
      <a class="forgotPw" href="#">Forgot Password?</a>

    </div>
    <div class="line3"></div>
    <div class="wrapper2">
      <span id="social-login">Sign in using your social media account</span>
      <div class="social-icons">
        <a href="#" class="facebook-holder"><i class="fa fa-facebook" aria-hidden="true"></i></a>
        <a href="#" class="google-holder">
          <i class="fa fa-google-plus" aria-hidden="true"></i></a>
        <a href="#" class="twitter-holder"><i class="fa fa-twitter" aria-hidden="true"></i></a></div>
    </div>

  </div>
</div>
            </div>


        )
        
    }

}

export default AdminLogin;