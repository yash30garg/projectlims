
import React, { Component } from 'react';
import Footer from '../footer.jsx';
import AlternateHeader from '../../header-component/AlternateHeader/AlternateHeader.jsx';

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

<br/>

          <div class="row">
            
              <br /><br />
             
    

         <div class="col-md-3" />




<div class="col-md-2">
<div class="card"  style={{borderRadius:'30px',width:'254px',height:'375px',	backgroundColor:'#FFF8DC'}}>
      <center>    <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/Yash.jpg') } alt="" height="250" width="250"  style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}} />
          <h4> Yash Garg </h4>
           <p>   <b> Developer</b></p>
     <p>  <a href="https://www.facebook.com/yash.garg.5015" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#CD853F' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
         </p>
         </center>
      </div>
        </div>
        

<div class="col-md-2"/>

<div class="col-md-2">
<div class="card"  style={{borderRadius:'30px',width:'254px',height:'375px',backgroundColor:'#FFF8DC'}}>
  <center>        <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/chaitanya.jpg')} alt="" height="250" width="250" style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}} />
          <h4>Chaitanya Boyapati 
           
          </h4>
          
          <p><b> Developer</b></p>
      <p>     <a href="https://www.facebook.com/chaitanyakumar215" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#CD853F' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
      </p> 
      </center>
       </div>
        </div>

<div class="col-md-3"/>

</div>


<div class="row mt-5" >
<div class="col-md-2"/>
        





<div class="col-md-2">
        <div class="card"  style={{borderRadius:'30px',width:'254px',height:'375px',backgroundColor:'#FFF8DC'}}>
        <center>  <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/anirudh.jpg')}  alt="" height="250" width="250" style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}}/>
          <h4>Anirudh A.S. 
           
          </h4>
          <p><b> Developer</b></p>
      <p>    <a href="https://www.facebook.com/AnirudhAS006" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#CD853F' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
     </p>   </center>  </div>
</div>



 <div class="col-md-1"/>
<div class="col-md-2">
   <div class="card"  style={{borderRadius:'30px',width:'254px',height:'375px',backgroundColor:'#FFF8DC'}}>
     <center>     <img class="img img-responsive full-width" src={require( '../AboutUs/OurImages/aish.jpg')} alt="" height="250" width="250" style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}}/>
          <h4>Aishwarya Sinha
            
          </h4>
          <p><b> Developer</b></p>
      <p>  <a href="https://www.facebook.com/aishwarya.sinha.566" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#CD853F' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
      </p> </center>  </div>
        </div>

        
 <div class="col-md-1"/>

 <div class="col-md-2">
 <div class="card"  style={{borderRadius:'30px',width:'254px',height:'375px',backgroundColor:'#FFF8DC'}}>
      <center>    <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/ankit.jpg')} alt="" height="250" width="250" style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}} />
          <h4>Ankit Gupta
            
          </h4>
          <p><b> Developer</b></p>
      <p>    <a href="https://www.facebook.com/profile.php?id=100006149372653" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#CD853F' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
      </p> </center> </div>

</div>
<div class="col-md-2"/>
</div>
 
 <h1 class="my-4" style={{color:"#614126"}}><big><u> Our Leads </u></big></h1>

   
            
              <br />
             
  


<div class="row">
<div class="col-md-3"/>
<div class="col-md-3">
<div class="card" style={{borderRadius:'30px',width:'354px',height:'420px',backgroundColor:'#FFF8DC'}}>
        <center>  <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/Nitish.jpg') } alt="" height="350" width="350" style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}}/>
          <h3> Nitish Bali
            
          </h3>
          <p><b> WebTech Lead</b></p>
          </center>
        </div>

</div>
       
    <div class="col-md-3" style={{borderRadius:'30px'}}>
    <div class="card" style={{borderRadius:'30px',width:'354px',height:'420px',backgroundColor:'#FFF8DC'}} >
    <center>      <img class="img img-responsive full-width" src={require('../AboutUs/OurImages/Monika.jpg') } alt="" height="350" width="350" style={{borderTopLeftRadius:'30px',borderTopRightRadius:'30px',borderBottomLeftRadius:'30px',borderBottomRightRadius:'30px'}}/>
          <h3> Monika Saran
            
          </h3>
          <p><b> WebTech Lead</b></p>
          </center>
        </div>
        </div>
        <div class="col-md-3"/>


</div>

       
     


 </div>
   
    
    <br/><br/><br/>
    <Footer />



 </div>
 
 

   
                
                

                )
    }

}