import React, { Component } from 'react';
// import axios from 'axios';
// import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
// import SearchAdmin from './searchadmin';
// import './searchdis.css';
import AdminFooter from '../admin-footer-component/adminFooter';
import { requireAuth } from '../../../isLoggedIn.js'
// import '../../../../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'
import {addBook} from '../../../mongo/addBook'

import AdminHeader from '../adminheader'

var debounce = require('debounce');
var count = 0;

class BookAdd extends Component {
    componentWillMount() {
        requireAuth(window.location.href)
    }

    handleBook = (e) => {
        e.preventDefault();
        var bookDetails = {
            isbn: document.getElementById('addBookIsbn').value,
            title: document.getElementById('addBookTitle').value,
            author: document.getElementById('addBookAuthor').value,
            publisher: document.getElementById('addBookPublisher').value,
            category: document.getElementById('addBookCategory').value,
            year: document.getElementById('addBookYear').value,
            url: document.getElementById('addBookUrl').value,
            copies: document.getElementById('addBookCopies').value,
            ratings: document.getElementById('addBookRatings').value
        }
        addBook(bookDetails);
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
                                    <small> Add Books</small>
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
                                    <Link to="/bookadd">
                                        <a class="dropdown-item" href="!#">Add Book(s)</a>
                                    </Link>
                                    <Link to="/bookedit">
                                        <a class="dropdown-item" href="!#">Edit Book(s)</a>
                                    </Link>
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
                                    <h5 className="card-header">Add Book : </h5>
                                    <br />
                                    <div className="card-body">
                                        <div className="col-md-12">

                                            <form onSubmit={this.handleBook}>
                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    ISBN:
                                                <input type="text" class="form-control" id="addBookIsbn" />
                                                </div>

                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Title:
                                                <input type="text" class="form-control" id="addBookTitle" />
                                                </div>
                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Author:
                                                <input type="text" class="form-control" id="addBookAuthor" />
                                                </div>
                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Category:
                                                <input type="text" class="form-control" id="addBookCategory" />
                                                </div>
                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Publisher:
                                                <input type="text" class="form-control" id="addBookPublisher" />
                                                </div>
                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Ratings:
                                                <input type="text" class="form-control" id="addBookRatings" />
                                                </div>

                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Copies:
                                                <input type="text" class="form-control" id="addBookCopies" />
                                                </div>

                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    URL:
                                                <input type="text" class="form-control" id="addBookUrl" />
                                                </div>

                                                <div class="form-group " style={{ textAlign: "left" }}>
                                                    Year:
                                                <input type="text" class="form-control" id="addBookYear" />
                                                </div>


                                                <div style={{ textAlign: "left" }}><button type="submit" class="btn btn-warning" style={{ textAlign: "left" }}>
                                                    Add Book</button></div>
                                            </form>




                                        </div>
                                    </div>






                                </div></div>
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

export default BookAdd;


