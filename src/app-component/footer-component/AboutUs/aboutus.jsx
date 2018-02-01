
import React, { Component } from 'react';
import Footer from '../footer.jsx';
import AlternateHeader from '../../header-component/AlternateHeader/AlternateHeader.jsx';
//import './aboutus.css';
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
  
  


        <div class="container-fluid">
        {/*  <img src="https://www.cafecoffeeday.com/sites/default/files/About-Us.jpg" width="1300" height="250" />*/}
          <h1 class="my-4" style={{color:"#614126"}}><big><u>Meet Our Team </u></big></h1>



          <div class="row">
            <div class="col-lg-12">
              {/*<h1 class="my-4"> LiMS React</h1>*/}
              <br /><br />
              </div>
    

         <div class="col-md-1" />




<div class="col-md-2">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/Yash.jpg') } alt="" height="250" width="600" />
          <h3> Yash Garg
            
          </h3>
          <p><b> Developer</b></p>
        </div>
        



<div class="col-md-2">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/chaitanya.jpg')} alt="" height="250" width="600" />
          <h3>Chaitanya Boyapati 
           
          </h3>
          
          <p><b> Developer</b></p>
        </div>



        


<div class="col-md-2">
          <img class="img img-responsive full-width" src={require( '../AboutUs/OurImages/aish.jpg')} alt="" height="250" width="600"/>
          <h3>Aishwarya Sinha
            
          </h3>
          <p><b> Developer</b></p>
        
        </div>

 

   
        <div class="col-md-2">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/anirudh.jpg')} alt="" height="250" width="600"/>
          <h3>Anirudh A.S. 
           
          </h3>
          <p><b> Developer</b></p>
          </div>

 <div class="col-md-2">
          <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/ankit.jpg')} alt="" height="250" width="600" / >
          <h3>Ankit Gupta
            
          </h3>
          <p><b> Developer</b></p>
        </div>



 <div>

       <div class="col-md-1" />
   

    <div class="row">
        <div class="col-lg-12">
          <h1 class="my-4" style={{color:"#614126"}}><u>Our Leads</u></h1>
        </div>

        <div class="col-md-3" />

    <div class="col-md-3">
    
          <img class="img img-responsive full-width" src={require("../AboutUs/OurImages/Nitish.jpg")} alt="" height="300" width="600"/>
          <h3>Nitish Bali
            
          </h3>
          <p><b>React Lead</b></p>
        </div>
      
      


<div class="col-md-3">
          <img class="img img-responsive full-width" src={require("../AboutUs/OurImages/Monika.jpg")} alt="" height="300" width="600"/>
          <h3>Monika Saran
            
          </h3>
          <p><b>Angular Lead</b></p>
        </div>
<div class="col-md-3" />
    </div>

       

    




       
     </div>

</div>
 </div>
   
    
    <Footer />



 </div>
 
 

   
                
                

                )
    }
}

