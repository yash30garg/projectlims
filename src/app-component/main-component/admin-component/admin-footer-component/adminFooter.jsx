import React, { Component } from 'react';
import './adminFooter.css'
// import $ from 'jquery';
import { Link } from 'react-router-dom';

class AdminFooter extends Component {


  render() {
    return (

      <div>


        <footer className="footer1">
          <div className="container-fluid" style={{minHeight : "50px"}}>

            <div className="row" style={{marginTop : "0px", marginBottom: "0px"}}>

              <div className="col-lg-3 col-md-3">
                <ul className="list-unstyled clear-margins">

                  <li className="widget-container widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left" ,color:'#614126' }}>Information</h1>

                    <ul>
                      <Link to="/aboutus">

                      <li style={{ textAlign: "left",color:'#CD853F'}}><i className="fa fa-angle-double-right"></i> About Us</li>

                      </Link>
                      <Link to="/contactus">
                      <li style={{ textAlign: "left" ,color:'#CD853F'}}><i className="fa fa-angle-double-right"></i> Contact Us</li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <ul className="list-unstyled clear-margins">
                  <li className="widget-container-fluid widget_nav_menu">
                    <h1 className="title-widget" style={{textAlign :"left" ,color:'#614126'}}>Useful links</h1>
                    <ul>
                    <li style={{ textAlign: "left"  }}><a href="http://www.leadthecompetition.in/GK/booksandauthors/latest-books-in-news.html" style={{color:'#CD853F'}}><i className="fa fa-angle-double-right" ></i>  Latest Books and Authors</a></li>
                      <li style={{ textAlign: "left" }}><a href="http://www.mygpscexam.com/2015/06/best-general-knowledge-books-for-all.html" style={{color:'#CD853F'}}><i className="fa fa-angle-double-right"></i>  Best General Knowledge books</a></li>
                      <li style={{ textAlign: "left" }}><a href="https://www.infibeam.com/Books-entrance-exams/" style={{color:'#CD853F'}}><i className="fa fa-angle-double-right"></i>  Books for Competitive Exams</a></li>

   </ul>
  
</li>
</ul>

</div>





              



              <div className="col-lg-3 col-md-3">



                <ul className="list-unstyled clear-margins">

                  <li className="widget-container-fluid widget_recent_news">

                    <h1 className="title-widget" style={{textAlign :"left",color:'#614126' }}>Contact Detail </h1>

                    <div className="footerp">

                      <h2 className="title-median" style={{ textAlign: "left", color:'#614126'}}>Mindtree. Ltd.</h2>
                      <p style={{ textAlign: "left" }}><b style={{color:'#614126'}}>Email id:</b> <a style={{color:'#CD853F'}} href="mailto:lims@mindtree.com">lims@mindtree.com</a></p>

                    </div>
                  </li>

                </ul>


              </div>





              <div className="col-lg-3 col-md-3">

                <ul className="list-unstyled clear-margins">

                  <li className="widget-container-fluid widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left", color:'#614126'}}>Social Sites</h1>

                    <div className="social-icons" style={{textAlign :"left"}}>

                      <ul className="nomargin">
                      <div>
                        <a href="https://www.facebook.com" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#CD853F' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                        <a href="https://twitter.com" style={{ textAlign: "left" ,color:'#CD853F' }}><i className="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
                        <a href="https://plus.google.com" style={{ textAlign: "left",color:'#CD853F' }}><i className="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
                        <a href="www.mindtree.com" style={{ textAlign: "left" ,color:'#CD853F'}}><i className="fa fa-envelope-square fa-3x social-em" id="social"></i></a>
                        </div>
                      </ul>

                    </div>

                  </li>

                </ul>
              </div>

            
              
      </div>
      </div >
         
        </footer >


      <div className="footer-bottom" style={{backgroundColor : "black"}}>

        <div className="container-fluid">

          <div className="row">

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div className="copyright" style={{textAlign :"left"}}>

                © 2017, Mindtree, All rights reserved

				</div>

            </div>

            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">

              <div className="design">

                <a href="!#">LiMS </a> |  <a href="http://www.mindtree.com">Web Design & Development by Mindtree</a>

              </div>

            </div>

          </div>

        </div>

      </div>

      </div>







    )


  }
}

export default AdminFooter;