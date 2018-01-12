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
            <div>
                <Header />
                <br />



                <div className="container-fluid">
                    <div className="maain">

                        <h1>LiMS</h1>
                        <h4>STARS OF ORCHARD KALINGA</h4>
                        <h2>React Web-Tech</h2>
                    </div>
<br/><br/>
                    <br />
                    <div class="container-fluid">
                        <h1>- Our Team -</h1>
                        <br/><br />
                        <div class="row rowing">
                            <div class="col coling">  < img src={require('../AboutUs/OurImages/Yash.jpg')} height="300" width="250" />
                                    <h3 style={{paddingTop : "4px", font :"Times New Roman"}}>Yash Garg</h3></div>
                                   <div class="col"> <img src={require('../AboutUs/OurImages/anirudh.jpg')} height="300" width="250" />
                                    <h3 style={{paddingTop : "4px", font :"Times New Roman"}}>Anirudh.A.S</h3></div>
                            <div class="col"> <img src={require('../AboutUs/OurImages/aish.jpg')} height="300" width="250" />
                                <h3 style={{paddingTop : "4px", font :"Times New Roman"}}>Aishwarya</h3></div>
                            <div class="col"> <img src={require('../AboutUs/OurImages/chaitanya.jpg')} height="300" width="250" />
                                <h3 style={{paddingTop : "4px", font :"Times New Roman"}}>Chaitanya Boyapati</h3></div>
                            <div class="col"> <img src={require('../AboutUs/OurImages/ankit.jpg')} height="300" width="250" />
                                <h3 style={{paddingTop : "4px", font :"Times New Roman"}}>Ankit Gupta</h3></div>
                        </div>
                        
                  
                    </div>

                    <div class="about">
                        <div class="about-container">
                            <h1>about us</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, necessitatibus</p>

                            <div class="about-left">
                                <div class="icons"> <i class="fas fa-trophy fa-3x"></i></div>
                                <div class="points">
                                    <h4>award-winning</h4>
                                    <p>Our team consists of the best people who strive to give you a perfect experience.</p>
                                </div>
                            </div>
                            <div class="about-left">
                                <div class="icons"><i class="fas fa-dollar-sign fa-3x"></i></div>
                                <div class="points more">
                                    <h4>Fair and affordable</h4>
                                    <p>We value everyone's business. No project to small or too big</p>
                                </div>
                            </div>
                            <div class="about-left">
                                <div class="icons"><i class="far fa-thumbs-up fa-3x"></i></div>
                                <div class="points">
                                    <h4>3 Years gaurantee</h4>
                                    <p>We are confident our staff can meet all your needs promptly, professionally, and with friendliess</p>
                                </div>
                            </div>
                        </div>
                        <img src="https://picsum.photos/560/560?image=1031" />
                    </div>

                    <div class="our-team">
                        <h1>our experts</h1>
                        <div class="experts">
                            <div class="person">
                                <img src={require("../AboutUs/OurImages/Nitish.jpg")} height="400" width="400" />
                                <p>Nitish Bali</p>
                                <p>Mindtree Lead</p>
                                <div class="person-s">
                                    <h2>Read More</h2>
                                </div>
                            </div>
                            <div class="person">
                                <img src={require("../AboutUs/OurImages/Monika.jpg")} />
                                <p>Monika Saran</p>
                                <p>Mindtree Lead</p>
                                <div class="person-s">
                                    <h2>Read More</h2>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    <div class="testify">
                        <h2>testimony</h2>
                        <div class="testimony">
                            <div class="test-text ">
                                <p>Revelation 12:11</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maxime iusto exercitationem laborum tenetur inventore beatae ducimus magnam doloremque iste aperiam perspiciatis adipisci officia eos hic cupiditate odio, omnis eius aliquid.
                    Atque assumenda expedita dicta illum quas dolore dignissimos minus! </blockquote>
                            </div>

                            <div><img src="https://picsum.photos/569/437?image=856" alt="" /></div>
                        </div>
                    </div>
                   
                </div>

                <Footer />
            </div >
            

        )
    }
}