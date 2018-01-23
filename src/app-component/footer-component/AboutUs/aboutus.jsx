
       
   
       import React, { Component } from 'react';
import Footer from '../footer.jsx';
import AlternateHeader from '../../header-component/AlternateHeader/AlternateHeader.jsx';
import './aboutus.css';
// import $ from 'jquery';
import { requireAuth } from '../../isLoggedIn'

export default class AboutUs extends Component {

    componentWillMount() {
        requireAuth(window.location.href)
    }
    componentDidMount() {



    }
    render() {
        return (
            
      
      <div style={{ background:'#FFF8DC'}}>
    
      
<AlternateHeader />
  
  
  
  
    <div class="container">
      
      <h1 class="my-4"><big>About Us</big></h1>
      
    <p> 
    Mobile devices have become ubiquitous. Just like consumers, enterprises are finding benefits in using mobile devices to mobilize their business processes. Hundreds of millions of devices of different types and form factors are being deployed by companies for solving real-world business problems. Over the last few years, we have built multiple software products and we are proud of the fact that over 7000+ companies in 106 countries around the world use our services for secure and efficient deployment of mobile applications on wide variety of devices such as tablets, smartphones, rugged devices, laptops and smartwears.
</p>
<p>
42Gears is a customer focused company and evolution of our products over last few years are a result of this approach. We believe customer satisfaction can be achieved only with great customer service. Our team of highly trained support engineers strive hard to provide great customer support.
</p>
<p>
If you plan to give mobile devices to your field force or use tablets as kiosks in retail stores or in taxis, you would want to ensure that the devices are not misused intentionally or otherwise. Mobile device lockdown and remote management products from 42Gears can help you achieve this goal in an easy and cost effective manner.
    </p>
      
      <div class="row">
        <div class="col-lg-12">
          <h1 class="my-4">Our Team</h1>
           <p>
           <h3>
           LIMS React
           </h3>
           </p>

          
        </div>
       

<div class="col-md-4">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/ankit.jpg') } alt="" height="400" width="600" />
          <h3>Ankit Gupta
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
        
  <div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>


<div class="col-md-4">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/aish.jpg')} alt="" height="400" width="600" />
          <h3>Aishwarya Sinha
           
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


 <div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>

        


<div class="col-md-4">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/Yash.jpg')} alt="" height="400" width="600"/>
          <h3>Yash Garg
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>

 
  
<div class="col-md-2" />
   
        <div class="col-md-4">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/chaitanya.jpg')} alt="" height="400" width="600"/>
          <h3>Chaitanya Boyapati
           
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>


<div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>

 <div class="col-md-4">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/anirudh.jpg')} alt="" height="400" width="600" / >
          <h3>Anirudh A.S.
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
  
<div class="col-md-2" />


 <div>

    <div class="row">
        <div class="col-lg-12">
          <h1 class="my-4">Our Leads</h1>
        </div>

    <div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="img img-responsive full-width" src={require("../AboutUs/OurImages/Nitish.jpg")} alt="" height="400" width="600"/>
          <h3>Nitish Bali
            
          </h3>
          <p>What does this team member to? Keep it short! This is also a great spot for social links!</p>
        </div>
      
      
        <div class="col-lg-4 col-sm-6 text-center mb-4">
 <p></p>
 </div>

<div class="col-lg-4 col-sm-6 text-center mb-4">
          <img class="img img-responsive full-width" src={require("../AboutUs/OurImages/Monika.jpg")} alt="" height="400" width="600"/>
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