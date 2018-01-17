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
            
      
      <div style={{ background:'#FFF8DC'}}>
    
      
<Header />
  
  
  
  
    <div class="container">
      
      <h1 class="my-4">About Us</h1>
      

      
      <div class="row">
        <div class="col-lg-12">
          <h2 class="my-4">Our Team</h2>
        </div>

<div class="col-md-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/ankit.jpg') } alt="" height="200" width="300" />
          <h3>Ankit Gupta
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        
  <div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>


<div class="col-md-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/aish.jpg')} alt=""/>
          <h3>Aishwarya Sinha
           
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


 <div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>

        


<div class="col-md-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/Yash.jpg')} alt="" />
          <h3>Yash Garg
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>

 
  
<div class="col-md-2" />
   
        <div class="col-md-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/chaitanya.jpg')} alt=""/>
          <h3>Chaitanya Boyapati
           
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


<div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>

 <div class="col-md-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require('../AboutUs/OurImages/anirudh.jpg')} alt="" height="200" width="300" / >
          <h3>Anirudh A.S.
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
  
<div class="col-md-2" />


 <div>

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
 <p></p>
 </div>

<div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="rounded-circle img-fluid d-block mx-auto" src={require("../AboutUs/OurImages/Monika.jpg")} alt=""/>
          <h3>Monika Saran
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>

    </div>

       

    




       
     </div>

</div>
 </div>
   
    
    <Footer />



 </div>
 
 

   
                
                

                )
    }
}