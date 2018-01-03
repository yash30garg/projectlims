import React, { Component } from 'react';
import './footer.css'
import $ from 'jquery';
class Footer extends Component {


  render() {
    return (

      <div>


        <footer class="footer1">
          <div class="container">

            <div class="row">

              <div class="col-lg-3 col-md-3">
                <ul class="list-unstyled clear-margins">

                  <li class="widget-container widget_nav_menu">

                    <h1 class="title-widget">Useful links</h1>

                    <ul>
                      <li style={{ textAlign: "left" }}><a href="#"><i class="fa fa-angle-double-right"></i> About Us</a></li>
                      <li style={{ textAlign: "left" }}><a href="#"><i class="fa fa-angle-double-right"></i> Contact Us</a></li>

                    </ul>

                  </li>

                </ul>


              </div>



              <div class="col-lg-3 col-md-3">

                <ul class="list-unstyled clear-margins">

                  <li class="widget-container widget_nav_menu">

                    <h1 class="title-widget">Useful links</h1>

                    <ul>

                      <li style={{ textAlign: "left" }}><a href="#"><i class="fa fa-angle-double-right"></i>  UG Courses</a></li>
                      <li style={{ textAlign: "left" }}><a href="#"><i class="fa fa-angle-double-right"></i>  Satellite Education</a></li>
                      <li style={{ textAlign: "left" }}><a href="#"><i class="fa fa-angle-double-right"></i>  Study Centres</a></li>


                    </ul>

                  </li>

                </ul>


              </div>




              <div class="col-lg-3 col-md-3">



                <ul class="list-unstyled clear-margins">

                  <li class="widget-container widget_recent_news">

                    <h1 class="title-widget" >Contact Detail </h1>

                    <div class="footerp">

                      <h2 class="title-median" style={{ textAlign: "left" }}>Mindtree. Ltd.</h2>
                      <p style={{ textAlign: "left" }}><b>Email id:</b> <a href="mailto:info@webenlance.com">info@mindtree.com</a></p>

                    </div>
                  </li>

                </ul>


              </div>





              <div class="col-lg-3 col-md-3">

                <ul class="list-unstyled clear-margins">

                  <li class="widget-container widget_nav_menu">

                    <h1 class="title-widget">Social Sites</h1>

                    <div class="social-icons">

                      <ul class="nomargin">

                        <a href="https://www.facebook.com/bootsnipp" style={{ textAlign: "left" }}><i class="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                        <a href="https://twitter.com/bootsnipp" style={{ textAlign: "left" }}><i class="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
                        <a href="https://plus.google.com/+Bootsnipp-page" style={{ textAlign: "left" }}><i class="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
                        <a href="mailto:bootsnipp@gmail.com" style={{ textAlign: "left" }}><i class="fa fa-envelope-square fa-3x social-em" id="social"></i></a>

                      </ul>

                    </div>

                  </li>

                </ul>
              </div>

            
              
      </div>
      </div >
         
        </footer >


      <div class="footer-bottom">

        <div class="container">

          <div class="row">

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div class="copyright" style={{textAlign :"left"}}>

                © 2017, Mindtree, All rights reserved

				</div>

            </div>

            <div class="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div class="design">

                <a href="#">LiMS </a> |  <a target="_blank" href="http://www.webenlance.com">Web Design & Development by Mindtree</a>

              </div>

            </div>

          </div>

        </div>

      </div>

      </div >

    )
  }
}

export default Footer;