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
                        <div class="row">
                            <div class="col">  < img src={require('../AboutUs/OurImages/Yash.jpg')} height="300" width="250" />
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
                        
                        {/*


                            <img src="Yash.jpg" style={{height : "200px", width : "200px"}} />
=======
                        <div class="service">
                            <img src={require("./OurImages/Yash.jpg")} style={{height : "200px", width : "200px"}} />
>>>>>>> 78c8e0665b8aa8866c55c604ed532901f59799ec
                            <p>Yash</p>
                        
                        <div class="service">
                            <img src={require("./OurImages/anirudh.jpg")} />
                            <p>Anirudh</p>
                        
                        <div class="service">
                            <img src={require("./OurImages/aish.jpg")} />
                            <p>Aishwarya</p>
                        
                        <div class="service">
                            <img src={require("../AboutUs/OurImages/ankit.jpg")} />
                            <p>Ankit</p>
                        
                         <div class="service">
                            <img src={require("../AboutUs/OurImages/chaitanya.jpg")}/>
                            <p>Chaitanya</p>
                        </div>
                        </div>
                        </div>
                        </div>
                        </div>*/}
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
                                <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1235953_10201253816283787_154663545_n.jpg?oh=98609080415903d718cb4a7ebeaab065&oe=5AD46240" alt="" />
                                <p>Nitish Bali</p>
                                <p>Forbes Recognized Entrepreneur</p>
                                <div class="person-s">
                                    <h2>Read More</h2>
                                </div>
                            </div>
                            <div class="person">
                                <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1235953_10201253816283787_154663545_n.jpg?oh=98609080415903d718cb4a7ebeaab065&oe=5AD46240" alt="" />
                                <p>Monika Saran</p>
                                <p>Forbes Recognized Entrepreneur</p>
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
                    {/*<div class="projects">
                        <h1>our projects</h1>
                        <div class="cards">
                            <div class="card">
                                <img src="https://picsum.photos/550/380?image=983" alt="" />
                                <div class="decription">
                                    <p class="heading">construct your dreams</p>
                                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deleniti earum ullam, assumenda molestias, doloribus vitae magni at non sunt distinctio nostrum, repellat quo id ducimus dolorem. Fugit, sunt. Nesciunt, accusantium?</p>
                                </div>
                            </div>
                            <div class="card">
                                <img src="https://picsum.photos/550/380?image=983" alt="" />
                                <div class="decription">
                                    <p class="heading">build the future</p>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae culpa obcaecati debitis quis nulla numquam, aspernatur mollitia, eaque cum cumque optio corporis iusto eos impedit a, animi perferendis ratione accusantium?</p>
                                </div>
                            </div>
                        </div>
                    </div>*/}
                </div>

                <Footer />
            </div >
            

        )
    }
}