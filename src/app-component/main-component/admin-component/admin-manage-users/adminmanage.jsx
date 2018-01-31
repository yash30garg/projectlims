import React, { Component } from 'react';
// import axios from 'axios';
// import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
import DashBoardStats from '../admin-stats/adminstats';
// import Footer from '../../../footer-component/footer.jsx';
import {requireAuth} from '../../../../app-component/isLoggedIn'
import AdminFooter from '../admin-footer-component/adminFooter';

import AdminHeader from '../adminheader'

var count =0;
class BookManage extends Component {
    componentWillMount() {
        requireAuth(window.location.href)
    }

    render() {
  
        return (

            <div>


                <AdminHeader />


               <header id="header" style={{	backgroundColor:'#333333'}}>

                    <div className="conatainer">
                        <div className="row">
                            <div className="col-md-10" style={{}}>
                                <h3
                                    className="dd"
                                    style={{
                                        textAlign: "left",marginTop:"7px"
                                    }}>
                                    <span className="fa fa-cog" aria-hidden="true"></span>DashBoard 
                                    <small> Manage User(s)/Admin(s)</small>
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
                                        style={{color:'white',backgroundColor:"#db9917",marginTop:"0px", height : "33px" }}>
                                        Manage Content
                                        <span className="caret" /></button>

                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to="/bookadd">
                                        <a class="dropdown-item" href="!#">Add Book(s)</a>
                                        </Link>
                                        <Link to="/bookedit">
                                        <a class="dropdown-item" >Edit Book(s)</a>
                                        </Link>
                                        <Link to="/manageuser">

                                        <a class="dropdown-item" >Manage User(s)
                                        </a>
                                        </Link>
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

                               <DashBoardStats />

                            </div>


                            <div className="col-md-9">


                                <div className="card">
                                    <h5 className="card-header">Manage User(s) </h5>
                                    <div className="card-body">


                                            <div className="col-md-12">
                                               
                                                   <form>
                                                   <div class="form-group " style={{ textAlign: "left" }}>
                                                    Email-Id:
                                                <input type="text" class="form-control" id="addBookIsbn" />
                                                </div>

                                                            <div style={{textAlign:'left'}}><button type="button" onClick={this.findBook} class="btn btn-warning" style={{alignContent : "left"}}>Make Admin</button>

                                            <button onClick={this.deleteBook} class="btn btn-danger" style={{marginLeft :'30px'}}>Remove Admin</button>
                                            
                                            </div>
                                                    </form>
                                                  
                                                
                                            

                                          

                                           

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
                <br /><br />
            <AdminFooter />
            

<div>


       

      </div>






            </div>



                
        


        )
        
    }
    

}

export default BookManage;