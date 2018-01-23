import React, { Component } from 'react';
// import axios from 'axios';
import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
import SearchAdmin from './searchadmin';
// import './searchdis.css';
// import Footer from '../../../footer-component/footer.jsx';
import {requireAuth} from '../../../isLoggedIn.js'
import AdminHeader from '../adminheader'

var count =0;
class BookAdmin extends Component {
    componentWillMount() {
        requireAuth(window.location.href)
    }

    render() {
  
        return (

            <div>

                <AdminHeader />


                <header id="header">

                    <div className="conatainer">
                        <div className="row">
                            <div className="col-md-10">
                                <h1 className="dd" style={{textAlign : "left"}}><span className="fa fa-cog" aria-hidden="true"></span>DashBoard <small> Manage Books</small></h1>
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
                            <li className="active" style={{color : "black", fontSize:"20px"}}><b>DashBoard</b></li>
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
                                    <a href="!#" class="list-group-item  list-group-item-action"> <span class="fa fa-list-alt" aria-hidden="true"></span>Total Books<div className='mov' style={{paddingRight : "170px"}} /><span class="badge  badge-pill badge-warning">100</span></a>
                                    <a href="!#" class="list-group-item  list-group-item-action"> <span class="fa fa-pencil" aria-hidden="true"></span>Books available<div className='mov' style={{paddingRight : "150px"}} /><span className="badge badge-pill badge-warning">75</span></a>
                                    <a href="!#" class="list-group-item  list-group-item-action"> <span class="fa fa-user" aria-hidden="true"></span>Users<div className='mov' style={{paddingRight : "227px"}} /><span className="badge badge-pill badge-warning mov">{count}</span></a>
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
                                    <h5 className="card-header">Books Overview</h5>
                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-md-12">
                                                <div className="fu1">
                                                    <SearchAdmin />
                                                  
                                                </div>
                                            </div>

                                          

                                           

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
                {/*<Footer />*/}
                
            </div>


        )
        
    }
    

}

export default BookAdmin;