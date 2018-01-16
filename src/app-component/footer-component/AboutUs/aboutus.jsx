import React, { Component } from 'react';
import Footer from '../footer.jsx';
import Header from '../../header-component/header.jsx';
import './aboutus.css';
import $ from 'jquery';


// import { requireAuth } from '../../isLoggedIn'
export default class AboutUs extends Component {

    componentWillMount() {
        // requireAuth(window.location.href)
    }
    componentDidMount() {



    }
    render() {
        return (
            <div >
             <a class="navbar-brand" href="#">Start Bootstrap</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
         
   <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div class="container">
        
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home
                <span class="sr-only">(current)</span>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Services</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    
    <div class="container">

      
      <h1 class="my-4">About Us
        <small>It's Nice to Meet You!</small>
      </h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, explicabo dolores ipsam aliquam inventore corrupti eveniet quisquam quod totam laudantium repudiandae obcaecati ea consectetur debitis velit facere nisi expedita vel?</p>

      
      <div class="row">
        <div class="col-lg-12">
          <h2 class="my-4">Our Team</h2>
        </div>


        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/Yash.jpg')} alt=""/>
          <h3>Yash Garg
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>



        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/ankit.jpg') } alt="" />
          <h3>Ankit Gupta
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/aish.jpg')} alt=""/>
          <h3>Aishwarya Sinha
           
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/chaitanya.jpg')} alt=""/>
          <h3>Chaitanya Boyapati
           
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


        <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/anirudh.jpg')} alt=""/>
          <h3>Anirudh A.S.
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


       
      </div>

    </div>

    <div class="row">
        <div class="col-lg-12">
          <h2 class="my-4">Our Leads</h2>
        </div>

    <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require("../AboutUs/OurImages/Nitish.jpg")} alt=""/>
          <h3>Nitish Bali
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>

<div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require("../AboutUs/OurImages/Monika.jpg")} alt=""/>
          <h3>Monika Saran
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>

    </div>



    <footer class="py-5 bg-dark">
      <div class="container">
        <p class="m-0 text-center text-white">Copyright &copy; Your Website 2017</p>
      </div>
    
    </footer>
 
   
                
                </div >


                )
    }
}