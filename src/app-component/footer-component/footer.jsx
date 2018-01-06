import React, { Component } from 'react';
import './footer.css'
import $ from 'jquery';
class Footer extends Component {


  render() {
    return (

      <div>


        <footer className="footer1">
          <div className="container">

            <div className="row">

              <div className="col-lg-3 col-md-3">
                <ul className="list-unstyled clear-margins">

                  <li className="widget-container widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left"}}>Useful links</h1>

                    <ul>
                      <li style={{ textAlign: "left" }}><a href="#"><i className="fa fa-angle-double-right"></i> About Us</a></li>
                      <li style={{ textAlign: "left" }}><a href="#"><i className="fa fa-angle-double-right"></i> Contact Us</a></li>

                    </ul>

                  </li>

                </ul>


              </div>



              <div className="col-lg-3 col-md-3">

                <ul className="list-unstyled clear-margins">

                  <li className="widget-container widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left"}}>Useful links</h1>

                    <ul>

                      <li style={{ textAlign: "left" }}><a href="#"><i className="fa fa-angle-double-right"></i>  UG Courses</a></li>
                      <li style={{ textAlign: "left" }}><a href="#"><i className="fa fa-angle-double-right"></i>  Satellite Education</a></li>
                      <li style={{ textAlign: "left" }}><a href="#"><i className="fa fa-angle-double-right"></i>  Study Centres</a></li>


                    </ul>

                  </li>

                </ul>


              </div>




              <div className="col-lg-3 col-md-3">



                <ul className="list-unstyled clear-margins">

                  <li className="widget-container widget_recent_news">

                    <h1 className="title-widget" style={{textAlign :"left"}}>Contact Detail </h1>

                    <div className="footerp">

                      <h2 className="title-median" style={{ textAlign: "left" }}>Mindtree. Ltd.</h2>
                      <p style={{ textAlign: "left" }}><b>Email id:</b> <a href="mailto:info@webenlance.com">info@mindtree.com</a></p>

                    </div>
                  </li>

                </ul>


              </div>





              <div className="col-lg-3 col-md-3">

                <ul className="list-unstyled clear-margins">

                  <li className="widget-container widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left"}}>Social Sites</h1>

                    <div className="social-icons">

                      <ul className="nomargin">

                        <a href="https://www.facebook.com/bootsnipp" style={{ textAlign: "left" }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                        <a href="https://twitter.com/bootsnipp" style={{ textAlign: "left" }}><i className="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
                        <a href="https://plus.google.com/+Bootsnipp-page" style={{ textAlign: "left" }}><i className="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
                        <a href="mailto:bootsnipp@gmail.com" style={{ textAlign: "left" }}><i className="fa fa-envelope-square fa-3x social-em" id="social"></i></a>

                      </ul>

                    </div>

                  </li>

                </ul>
              </div>

            
              
      </div>
      </div >
         
        </footer >


      <div className="footer-bottom" style={{backgroundColor : "#116466"}}>

        <div className="container">

          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div className="copyright" style={{textAlign :"left"}}>

                © 2017, Mindtree, All rights reserved

				</div>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div className="design">

                <a href="#">LiMS </a> |  <a target="_blank" href="http://www.mindtree.com">Web Design & Development by Mindtree</a>

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