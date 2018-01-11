import React, { Component } from 'react';
import Footer from '../footer.jsx';
import Header from '../../header-component/header.jsx';
import './aboutus.css';
import $ from 'jquery';
export default class AboutUs extends Component {

    componentDidMount() {

   

    }
    render() {
        return (
            <div>




                <body>
                    <main>
                        <header>
                            <div class="logo">DTMiller</div>
                            <nav>
                                <div class="navbar">
                                    <a href="#home">Home</a>
                                    <a href="#news">About</a>
                                    <div class="dropdown">
                                        <button class="dropbtn">Services
                                <i class="fa fa-caret-down"></i>
                                        </button>
                                        <div class="dropdown-content">
                                            <div class="header">
                                            </div>
                                            <div class="row">
                                                <div class="column">
                                                    <h3>Category 1</h3>
                                                    <a href="#">Link 1</a>
                                                    <a href="#">Link 2</a>
                                                    <a href="#">Link 3</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Category 2</h3>
                                                    <a href="#">Link 1</a>
                                                    <a href="#">Link 2</a>
                                                    <a href="#">Link 3</a>
                                                </div>
                                                <div class="column">
                                                    <h3>Category 3</h3>
                                                    <a href="#">Link 1</a>
                                                    <a href="#">Link 2</a>
                                                    <a href="#">Link 3</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul>
                                    <li>home</li>
                                    <li>about</li>
                                    <li>projects</li>
                                    <li>pages</li>
                                    <li>features</li>
                                    <li>blog</li>
                                </ul>
                            </nav>
                        </header>
                        <h1>YOUR TAGLINE</h1>
                        <h4>goes in these lines</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut neque deserunt nihil dignissimos assumenda, nemo dolor incidunt perferendis? Ea voluptatibus vitae qui doloremque repudiandae cupiditate facere, unde quisquam iste fugiat incidunt laborum,
            saepe, sed reprehenderit quas quam eveniet? Qui facere, eius eaque dolorum quod ducimus asperiores iste quaerat eveniet doloribus.</p>
                    </main>
                    <section class="services">
                        <div class="service">
                            <img src="https://picsum.photos/150/200?image=1048" />
                            <p>whatever</p>
                        </div>
                        <div class="service">
                            <img src="https://picsum.photos/150/200?image=1048" />
                            <p>you</p>
                        </div>
                        <div class="service">
                            <img src="https://picsum.photos/150/200?image=1048" />
                            <p>want</p>
                        </div>
                        <div class="service">
                            <img src="https://picsum.photos/150/200?image=1048" />
                            <p>here</p>
                        </div>
                    </section>
                    <section class="about">
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
                    </section>
                    <section class="random">
                        <h1>depth + breadth</h1>
                        <h4>fortitude</h4>
                        <button>Read More</button>
                    </section>
                    <section class="our-team">
                        <h1>our experts</h1>
                        <div class="experts">
                            <div class="person">
                                <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1235953_10201253816283787_154663545_n.jpg?oh=98609080415903d718cb4a7ebeaab065&oe=5AD46240" alt="" />
                                <p>David Miller</p>
                                <p>Forbes Recognized Entrepreneur</p>
                                <div class="person-s">
                                    <h2>Read More</h2>
                                </div>
                            </div>
                            <div class="person">
                                <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1235953_10201253816283787_154663545_n.jpg?oh=98609080415903d718cb4a7ebeaab065&oe=5AD46240" alt="" />
                                <p>David Miller</p>
                                <p>Forbes Recognized Entrepreneur</p>
                                <div class="person-s">
                                    <h2>Read More</h2>
                                </div>
                            </div>
                            <div class="person">
                                <img src="https://scontent-dft4-2.xx.fbcdn.net/v/t1.0-9/1235953_10201253816283787_154663545_n.jpg?oh=98609080415903d718cb4a7ebeaab065&oe=5AD46240" alt="" />
                                <p>David Miller</p>
                                <p>Forbes Recognized Entrepreneur</p>
                                <div class="person-s">
                                    <h2> Read More</h2>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="testify">
                        <h2>testimony</h2>
                        <div class="testimony">
                            <div class="test-text ">
                                <p>Revelation 12:11</p>
                                <blockquote>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam maxime iusto exercitationem laborum tenetur inventore beatae ducimus magnam doloremque iste aperiam perspiciatis adipisci officia eos hic cupiditate odio, omnis eius aliquid.
                    Atque assumenda expedita dicta illum quas dolore dignissimos minus! </blockquote>
                            </div>

                            <div><img src="https://picsum.photos/569/437?image=856" alt="" /></div>
                        </div>
                    </section>
                    <section class="projects">
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
                    </section>
                    
    
</body>
            </div >
            
        )
    }
}