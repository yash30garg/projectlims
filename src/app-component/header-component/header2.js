import React, {
    Component
} from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search';
// import './header.css';
// import PBooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
//import Footer from '../footer-component/footer.jsx';

import {
    Link
} from 'react-router-dom';
class Header2 extends Component {

    render() {


        return (


            
            <div >



<div id="carousel-example-1z" class="carousel slide carousel-fade" data-ride="carousel">
                             
                                <ol class="carousel-indicators">
                                    <li data-target="#carousel-example-1z" data-slide-to="0" class="active"></li>
                                    <li data-target="#carousel-example-1z" data-slide-to="1"></li>
                                    <li data-target="#carousel-example-1z" data-slide-to="2"></li>
                                </ol>
                             
                                <div class="carousel-inner" role="listbox">
                                   
                                    <div class="carousel-item active">
                                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(107).jpg" alt="First slide" class="img-fluid" />
                                        <div class="carousel-caption">
                                            <h4>New collection</h4>
                                            <br/>
                                        </div>
                                    </div>
                                
                                    <div class="carousel-item">
                                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(109).jpg" alt="Second slide" class="img-fluid" />
                                        <div class="carousel-caption">
                                            <h4>Get discount!</h4>
                                            <br/>
                                        </div>
                                    </div>
                                 
                                    <div class="carousel-item">
                                        <img src="https://mdbootstrap.com/img/Photos/Slides/img%20(36).jpg" alt="Third slide" class="img-fluid" />
                                        <div class="carousel-caption">
                                            <h4>Only now for 10$</h4>
                                            <br/>
                                        </div>
                                    </div>
                                   
                                </div>
                               
                                <a class="carousel-control-prev" href="#carousel-example-1z" role="button" data-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel-example-1z" role="button" data-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="sr-only">Next</span>
                                </a>
                              
                            </div>
                          
                        </div>
        )



    }
}
export default Header2;