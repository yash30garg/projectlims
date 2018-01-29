import React, { Component } from 'react';
import axios from 'axios';
import './dashboard.css';
import '../../../App.css'
import AdminFooter from '../admin-footer-component/adminFooter';

import { Link } from 'react-router-dom';
// import { UserBooks } from './../borrowedBooks';
import {requireAuth} from '../../../isLoggedIn.js'

import AdminHeader from '../adminheader'

var count = 0;
class DashBoard extends Component {
    	componentWillMount() {
		requireAuth(window.location.href)

        fetch('http://localhost:3005/user/getUsers',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
        .then((res)=>res.json())
        .then((res) =>{
         console.log(res);
        		}
        )}

    state = {
        output: [],
        display: []
    }
    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/14x90j')
            .then(res => {
                this.setState({ output: res.data });
            })

        axios
            .get('https://api.myjson.com/bins/1a9rkj')
            .then(result => {
                this.setState({ display: result.data.booksArray });
            })
    }

    render() {
        count = 0;
        const outputs = this
            .state
            .output
            .map((result) => {
                count = count + 1;

                return (
                    <tr>
                        <td style={{textAlign:'left'}}>{result.user.name}<span class="badge  badge-pill badge-warning ml-2">{result.borrowedbooks.length}</span></td>
                        <td style={{textAlign:'left'}}>{result.user.email}</td>
                        <td style={{textAlign:'left'}}>{result.user.mid}</td>
                        <td style={{textAlign:'left'}}>{result.user.preferenece[0]}</td>
                    </tr>

                );
            })

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
                                    <small> Manage LiMS</small>
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
                            <li
                                className="active"
                                style={{
                                    color: "black",
                                    fontSize: "20px"
                                }}>
                                <b>DashBoard</b>
                            </li>
                        </ol>
                    </div>
                </section>

               
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">

                                <div className="list-group">
                                    <a href="!#" class="list-group-item active">
                                        <span class="fa fa-cog" aria-hidden="true"></span>
                                        DashBoard</a>
                                    <a href="!#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-list-alt" aria-hidden="true"></span>Total Books<div
                                            className='mov'
                                            style={{
                                                paddingRight: "170px"
                                            }} />
                                        <span class="badge  badge-pill badge-warning">{this.state.display.length}</span>
                                    </a>
                                    <a href="!#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-pencil" aria-hidden="true"></span>Books available<div
                                            className='mov'
                                            style={{
                                                paddingRight: "150px"
                                            }} />
                                        <span className="badge badge-pill badge-warning">75</span>
                                    </a>
                                    <a href="!#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-user" aria-hidden="true"></span>Users<div
                                            className='mov'
                                            style={{
                                                paddingRight: "227px"
                                            }} />
                                        <span className="badge badge-pill badge-warning mov">{count}</span>
                                    </a>
                                    {/*<a href="!#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>*/}
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-header card-primary">
                                        <div className="t">
                                            <span className="fa fa-list" aria-hidden="true"></span>
                                            Books Stats
                                        </div>
                                    </div>
                                    <h6 className="he5">Books Available :</h6>
                                    <div className="p1">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "60%" }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">60%</div>
                                        </div>
                                    </div>

                                    <h6 className="he6">
                                        Books to be returned :</h6>
                                    <div className="p2">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: "40%" }} aria-valuenow="40" aria-valuemin="0" aria-valuemax="100">40%</div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                            <div className="col-md-9">

                                <div className="card">
                                    <h5 className="card-header">Library Overview</h5>
                                    <div className="card-body">

                                        <div className="row">

                                            <div className="col-md-3">
                                                <div className="fu1">
                                                    <div className="card">

                                                        <div className="card-block">
                                                            <h2>
                                                                <span className="fa fa-user" aria-hidden="true"></span>
                                                                {count}
                                                            </h2>
                                                            <h4>
                                                                Users
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="fu">
                                                    <div className="card">
                                                        <div className="card-block">
                                                            <h2>
                                                                <span className="fa fa-list" aria-hidden="true"></span>
                                                                23
                                                            </h2>
                                                            <h4>
                                                                Edits
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="fu">
                                                    <div className="card">
                                                        <div className="card-block">
                                                            <h2>
                                                                <span className="fa fa-pencil" aria-hidden="true"></span>{this.state.display.length}
                                                            </h2>
                                                            <h4>
                                                                Books
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-3">
                                                <div className="fu2">
                                                    <div className="card">
                                                        <div className="card-block">
                                                            <h2>
                                                                <span className="fa fa-globe" aria-hidden="true"></span>
                                                                203
                                                            </h2>
                                                            <h4>
                                                                Visitors
                                                            </h4>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div className="mana">
                                    <div class="card">
                                        <div class="card-header">
                                            Recent Users</div>
                                        <div class="card-block">

                                            {/*<table class="table table-hover table-responsive ">
                                                <thead>
                                                    <tr>
                                                        <th style={{textAlign:'center'}}>User Name</th>
                                                        <th style={{textAlign:'center'}}>Email</th>
                                                        <th style={{textAlign:'center'}}>MID</th>
                                                        <th style={{textAlign:'center'}}>Preferenece(s)</th>
                                                    </tr>
                                                </thead>
                                                <tbody>

                                                    {outputs}

                                                </tbody>
                                            </table>*/}

                                             <div className="row">
                                        <div className="col-md-1" />
                                        <div className="col-md-10">

                                            <div class="table-responsive">
                                                <table class="table">
                                                    <thead>
                                                         <tr>
                                                        <th style={{textAlign:'left'}}>User Name</th>
                                                        <th style={{textAlign:'left'}}>Email</th>
                                                        <th style={{textAlign:'left'}}>MID</th>
                                                        <th style={{textAlign:'left'}}>Preferenece(s)</th>
                                                    </tr>
                                                    </thead>
                                                    <tbody >
                                                         {outputs}
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
                    </div>
              
                <br /><br />
                

  <div>


       
</div>

</div>
<AdminFooter />

            </div>

        )

    }

}

export default DashBoard;