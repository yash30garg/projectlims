import React, { Component } from 'react';
// import axios from 'axios';
// import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
// import SearchAdmin from './searchadmin';
// import './searchdis.css';
import AdminFooter from '../admin-footer-component/adminFooter';
import { requireAuth } from '../../../isLoggedIn.js'

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

                <AdminHeader />

                <header id="header" style={{ backgroundColor: '#333333' }}>

                    <div className="conatainer">
                        <div className="row">
                            <div className="col-md-10" style={{}}>
                                <h3
                                    className="dd"
                                    style={{
                                        textAlign: "left", marginTop: "7px"
                                    }}>
                                    <span className="fa fa-cog" aria-hidden="true"></span>DashBoard
                                    <small> Manage Users</small>
                                </h3>
                            </div>


                            <div className="dropdown create">
                                <button
                                    className="btn default dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{ color: 'white', backgroundColor: "#db9917", marginTop: "0px", height: "33px" }}>
                                    Create Content
                                        <span className="caret" /></button>

                                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                    <a class="dropdown-item" href="!#">Add Book(s)</a>
                                    <a class="dropdown-item" href="!#">Edit Book(s)</a>
                                    <a class="dropdown-item" href="!#">Edit User(s)
                                        </a>
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

                                                    <input type="text" id="search" className="form-control" placeholder="Search for..." onKeyUp={debounce(this.search, 700)} />
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





                </div>



                <AdminFooter />


            </div>









        )

    }


}

export default HandleUsers;


