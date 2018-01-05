import React, { Component } from 'react';
import axios from 'axios';
// import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
// import SearchAdmin from './searchadmin';
// import './searchdis.css';
import Footer from '../../../footer-component/footer.jsx';
var debounce = require('debounce');


var count =0;
class HandleUsers extends Component {

    render() {
  
        return (

            <div>

                <nav class="navbar navbar-toggleable-md navbar-default">
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"   >
                        <span class="navbar-toggler-icon"  style={{backgroundColor : "black"}}></span>
                    </button>
                    <a class="navbar-brand" href="#">Admin Strap</a>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/adminDash">
                            <li class="nav-item ">
                                <a class="nav-link" href="#">DashBoard </a>
                            </li>
                            </Link>
                            <Link to="/adminbooks">
                            <li class="nav-item ">
                                <a class="nav-link" href="#">Books</a>
                            </li>
                            </Link>
                            

                            <li class="nav-item active">
                                <a class="nav-link " href="#">Users<span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                        </ul>

                        <ul class="navbar-nav navbar-right">
                            <li class="nav-item active">
                                <a class="nav-link" href="#"> Welcome Anirudh,  <span class="sr-only">(current)</span></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">LogOut</a>
                            </li>
                        </ul>

                    </div>
                </nav>


                <header id="header">

                    <div className="conatainer">
                        <div className="row">
                            <div className="col-md-10">
                                <h1 className="dd" style={{textAlign : "left"}}><span className="fa fa-cog" aria-hidden="true"></span>DashBoard <small> Manage Users</small></h1>
                            </div>
                            <div className="col-md-2">

                                <div className="dropdown create">
                                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Create Content <span className="caret" /></button>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a class="dropdown-item" href="#">Add Books</a>
                                        <a class="dropdown-item" href="#">Add ?</a>
                                        <a class="dropdown-item" href="#">Add User </a>
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
                                    <a href="#" class="list-group-item active">
                                        <span class="fa fa-cog" aria-hidden="true" ></span>  DashBoard</a>
                                    <a href="#" class="list-group-item  list-group-item-action"> <span class="fa fa-list-alt" aria-hidden="true"></span>Total Books<div className='mov' style={{paddingRight : "170px"}} /><span class="badge  badge-pill badge-warning">100</span></a>
                                    <a href="#" class="list-group-item  list-group-item-action"> <span class="fa fa-pencil" aria-hidden="true"></span>Books available<div className='mov' style={{paddingRight : "150px"}} /><span className="badge badge-pill badge-warning">75</span></a>
                                    <a href="#" class="list-group-item  list-group-item-action"> <span class="fa fa-user" aria-hidden="true"></span>Users<div className='mov' style={{paddingRight : "227px"}} /><span className="badge badge-pill badge-warning mov">{count}</span></a>
                                    {/*<a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>*/}
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
                                    <div className="card-body">

                                        <div className="row">

                                          
                                                <div className="input-group">

                                    <input type="text" id="search" className="form-control"  style={{ alignSelf: "center" }} placeholder="Search for..." onKeyUp={debounce(this.search, 700)} />
                                    <span className="input-group-btn">

                                        <button type="submit" className="btn btn-outline-secondary" >Go!</button>

                                    </span>
                                </div>
                                            </div>

<table class="table table-sm">
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>

                                          

                                           

                                        
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
                <Footer />
                
            </div>


        )
        
    }
    

}

export default HandleUsers;