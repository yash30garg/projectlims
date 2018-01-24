import React, { Component } from 'react';
// import axios from 'axios';
// import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
// import SearchAdmin from './searchadmin';
// import './searchdis.css';
import Footer from '../../../footer-component/footer.jsx';
import {requireAuth} from '../../../isLoggedIn.js'

import AdminHeader from '../adminheader'
var debounce = require('debounce');


var count = 0;
class HandleUsers extends Component {
    componentWillMount() {
        requireAuth(window.location.href)
    }

    render() {

        return (

            <div>

<AdminHeader/>
                
                <header id="header">

                    <div className="conatainer">
                        <div className="row">
                            <div className="col-md-10">
                                <h1 className="dd" style={{ textAlign: "left" }}><span className="fa fa-cog" aria-hidden="true"></span>DashBoard <small> Manage Users</small></h1>
                            </div>
                            <div className="col-md-2">

                                <div className="dropdown create">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Create Content <span className="caret" /></button>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="!#">Add Books</a>
                                        <a class="dropdown-item" href="!#">Add ?</a>
                                        <a class="dropdown-item" href="!#">Add User </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>

                <section id="breadcrumb">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="active" style={{ color: "black", fontSize: "20px" }}><b>DashBoard</b></li>
                        </ol>
                    </div>
                </section>

                <section id="main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">

                                <div className="list-group">
                                    <a href="!#" class="list-group-item active">
                                        <span class="fa fa-cog" aria-hidden="true" ></span>  DashBoard</a>
                                    <a href="!#" class="list-group-item  list-group-item-action"> <span class="fa fa-list-alt" aria-hidden="true"></span>Total Books<div className='mov' style={{ paddingRight: "170px" }} /><span class="badge  badge-pill badge-warning">100</span></a>
                                    <a href="!#" class="list-group-item  list-group-item-action"> <span class="fa fa-pencil" aria-hidden="true"></span>Books available<div className='mov' style={{ paddingRight: "150px" }} /><span className="badge badge-pill badge-warning">75</span></a>
                                    <a href="!#" class="list-group-item  list-group-item-action"> <span class="fa fa-user" aria-hidden="true"></span>Users<div className='mov' style={{ paddingRight: "227px" }} /><span className="badge badge-pill badge-warning mov">{count}</span></a>
                                    {/*<a href="!#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>*/}
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-header card-primary"><div className="t">
                                        <span className="fa fa-list" aria-hidden="true"></span> Books Stats
                                      </div></div>
                                    <h6 className="he5">Books Available :</h6>
                                    <div className="p1">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">75%</div>
                                        </div>
                                    </div>

                                    <h6 className="he6"> Books to be returned :</h6>
                                    <div className="p2">
                                        <div className="progress">
                                            <div className="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                </div>


                            </div>


                            <div className="col-md-9">


                                <div className="card">
                                    <h5 className="card-header">Users Overview</h5>
                                    <br />
                                    <div className="card-body">

                                        <div className="row">

                                        <div className="col-md-3" />
                                            <div className="col-md-6" >
                                                <div className="input-group"  >

                                                    <input type="text"  id="search" className="form-control" placeholder="Search for..." onKeyUp={debounce(this.search, 700)} />
                                                    <span className="input-group-btn">

                                                        <button type="submit" className="btn btn-outline-secondary" >Go!</button>

                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                        <br /><br />
                                        <div className="row">
                                        <div className="col-md-1" />
                                        <div className="col-md-10">

                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                        <tr>
                                                            <th>Name</th>
                                                            <th>MID</th>
                                                            <th>Book(s)</th>
                                                            <th>Due Date</th>
                                                            
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td>Anirudh.A.S</td>
                                                            <td>1042946</td>
                                                            <td>Javascript</td>
                                                            <td>08-feb-2017</td>
                                                            
                                                            <td><button type="button" class="btn btn-warning">Warning</button> </td>
                                                            <td><button type="button" class="btn btn-danger">Block</button> </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>



                                        </div>

                                        <div className="col-md-1" />
                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
                

<div>


        <footer className="footer1" style={{backgroundColor:'		#B0E0E6	'}}>
          <div className="container-fluid" style={{minHeight : "50px"}}>

            <div className="row" style={{marginTop : "0px", marginBottom: "0px"}}>

              <div className="col-lg-3 col-md-3">
                <ul className="list-unstyled clear-margins">

                  <li className="widget-container widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left" ,color:'#000000' }}>Information</h1>

                    <ul>
                      <Link to="/aboutus">

                      <li style={{ textAlign: "left",color:'#696969'}}><i className="fa fa-angle-double-right"></i> About Us</li>

                      </Link>
                      <Link to="/contactus">
                      <li style={{ textAlign: "left" ,color:'#696969'}}><i className="fa fa-angle-double-right"></i> Contact Us</li>
                      </Link>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-3">
                <ul className="list-unstyled clear-margins">
                  <li className="widget-container-fluid widget_nav_menu">
                    <h1 className="title-widget" style={{textAlign :"left" ,color:'#000000'}}>Useful links</h1>
                    <ul>
                      <li style={{ textAlign: "left"  }}><a href="!#" style={{color:'#696969'}}><i className="fa fa-angle-double-right" ></i>  UG Courses</a></li>
                      <li style={{ textAlign: "left" }}><a href="!#" style={{color:'#696969'}}><i className="fa fa-angle-double-right"></i>  Satellite Education</a></li>
                      <li style={{ textAlign: "left" }}><a href="!#" style={{color:'#696969'}}><i className="fa fa-angle-double-right"></i>  Study Centres</a></li>

   </ul>
  
</li>
</ul>

</div>





              



              <div className="col-lg-3 col-md-3">



                <ul className="list-unstyled clear-margins">

                  <li className="widget-container-fluid widget_recent_news">

                    <h1 className="title-widget" style={{textAlign :"left",color:'#000000' }}>Contact Detail </h1>

                    <div className="footerp">

                      <h2 className="title-median" style={{ textAlign: "left", color:'#000000'}}>Mindtree. Ltd.</h2>
                      <p style={{ textAlign: "left" }}><b style={{color:'#000000'}}>Email id:</b> <a style={{color:'#000000'}} href="mailto:info@webenlance.com">info@mindtree.com</a></p>

                    </div>
                  </li>

                </ul>


              </div>





              <div className="col-lg-3 col-md-3">

                <ul className="list-unstyled clear-margins">

                  <li className="widget-container-fluid widget_nav_menu">

                    <h1 className="title-widget" style={{textAlign :"left", color:'#000000'}}>Social Sites</h1>

                    <div className="social-icons" style={{textAlign :"left"}}>

                      <ul className="nomargin">
                      <div>
                        <a href="https://www.facebook.com" style={{ textAlign: "left" ,marginLeft : "0px" ,color:'#696969' }}><i className="fa fa-facebook-square fa-3x social-fb" id="social"></i></a>
                        <a href="https://twitter.com" style={{ textAlign: "left" ,color:'#696969' }}><i className="fa fa-twitter-square fa-3x social-tw" id="social"></i></a>
                        <a href="https://plus.google.com" style={{ textAlign: "left",color:'#696969' }}><i className="fa fa-google-plus-square fa-3x social-gp" id="social"></i></a>
                        <a href="www.mindtree.com" style={{ textAlign: "left" ,color:'#696969'}}><i className="fa fa-envelope-square fa-3x social-em" id="social"></i></a>
                        </div>
                      </ul>

                    </div>

                  </li>

                </ul>
              </div>

            
              
      </div>
      </div >
         
        </footer >


      <div className="footer-bottom" style={{backgroundColor : "	#000000"}}>

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






            </div>






            


        )

    }


}

export default HandleUsers;


