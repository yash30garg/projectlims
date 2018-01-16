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
            <div className="container-fluid" >
         
    
<Header />
                <br />



                <div className="container-fluid">
                    <div className="maain">
              
                        <h1>LiMS</h1>
                        <h4>STARS OF ORCHARD KALINGA</h4>
                        <h2>React Web-Tech</h2>
                    </div>
                </div>
                <br /><br />
                <br />
                <div class="container-fluid">
                    <h1>- Our Team -</h1>
                    <br /><br />
                        <div className ="row">
                        <div class="col-md-1" />
                        <div class="col-md-2">  
                             <div class="card" style={{ width: "15rem" }}>
                        <img class="card-img-top" src={require('../AboutUs/OurImages/Yash.jpg')} height="318" width="238" alt="Card image cap" /> 
                            <div class="card-block">
                                <h4 class="card-title">Yash Garg</h4>
                                <p class="card-text"> to be filled</p>
                            </div>
                    </div>
                        </div>

                            <div class="col-md-2">   
                             <div class="card" style={{ width: "15rem" }}>
                        <img class="card-img-top" src={require('../AboutUs/OurImages/anirudh.jpg')} height="318" width="238" alt="Card image cap" /> 
                            <div class="card-block">
                                <h4 class="card-title">Anirudh.A.S</h4>
                                <p class="card-text"> to be filled</p>
                            </div>
                    </div>
                        </div>

                            <div class="col-md-2">  
                             <div class="card" style={{ width: "15rem" }}>
                        <img class="card-img-top" src={require('../AboutUs/OurImages/aish.jpg')} height="318" width="238" alt="Card image cap" /> 
                            <div class="card-block">
                                <h4 class="card-title">Aishwarya</h4>
                                <p class="card-text"> to be filled</p>
                            </div>
                    </div>
                        </div>

                            <div class="col-md-2">  
                             <div class="card" style={{ width: "15rem" }}>
                        <img class="card-img-top" src={require('../AboutUs/OurImages/chaitanya.jpg')} height="318" width="238" alt="Card image cap" /> 
                            <div class="card-block">
                                <h5 class="card-title">Chaitanya Boyapati</h5>
                                <p class="card-text"> to be filled</p>
                            </div>
                    </div>
                        </div>

                           <div class="col-md-2">  
                             <div class="card" style={{ width: "15rem" }}>
                        <img class="card-img-top" src={require('../AboutUs/OurImages/ankit.jpg')} height="318" width="238" alt="Card image cap" /> 
                            <div class="card-block">
                                <h4 class="card-title">Ankit Gupta</h4>
                                <p class="card-text"> to be filled</p>
                            </div>
                    </div>
                    </div>
                    
                     <div class="col-md-1" />
                        


                        {/*<div class="col coling"> <img src={require('../AboutUs/OurImages/anirudh.jpg')} height="300" width="250" />
                            <h3 style={{ paddingTop: "4px", font: "Times New Roman" }}>Anirudh.A.S</h3></div>
                        <div class="col coling"> <img src={require('../AboutUs/OurImages/aish.jpg')} height="300" width="250" />
                            <h3 style={{ paddingTop: "4px", font: "Times New Roman" }}>Aishwarya</h3></div>
                        <div class="col coling"> <img src={require('../AboutUs/OurImages/chaitanya.jpg')} height="300" width="250" />
                            <h3 style={{ paddingTop: "4px", font: "Times New Roman" }}>Chaitanya Boyapati</h3></div>
                        <div class="col coling"> <img src={require('../AboutUs/OurImages/ankit.jpg')} height="300" width="250" />
                            <h3 style={{ paddingTop: "4px", font: "Times New Roman" }}>Ankit Gupta</h3></div>*/}
                 


                   

                    </div>
                    </div>
                    <br />
                    <div className="conatainer">

                        <h1>- Our Experts -</h1>
                        <br />
                        <div class="row">
                            <div class="col-md-2" />
                            <div class="col-md-4">
                                <img src={require("../AboutUs/OurImages/Nitish.jpg")} height="400" width="400" />
                                <h4>Nitish Bali</h4>
                                <h6>Mindtree Lead</h6>
                            </div>
                            <div class="col-md-4">
                                <img src={require("../AboutUs/OurImages/Monika.jpg")} height="400" width="400" />
                                <h4>Monika Saran</h4>
                                <h6>Mindtree Lead</h6>

                            </div>
                            <div class="col-md-2" />

                        </div>
                    </div>

                    <div class="testify">
                        <h2 style={{ textAlign: "center" }}>testimony</h2>
                        <div class="testimony">
                            <div class="test-text ">
                                <p></p>
                                <blockquote>It is the long history of humankind (and animal kind, too) that those who learned to collaborate and improvise most effectively have prevailed. </blockquote>
                        <blockquote>   The strength of the team is each individual member. The strength of each member is the team.</blockquote>
                           <blockquote>  Individual commitment to a group effort -- that is what makes a team work, a company work, a society work, a civilization work  </blockquote>
                            </div>

                            <div><img src="https://picsum.photos/569/437?image=856" alt="" /></div>
                        </div>
                    </div>



                    <Footer />
                
                </div >


                )
    }
}