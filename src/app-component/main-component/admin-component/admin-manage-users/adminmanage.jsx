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

// var count =0;
class ManageAdmin extends Component {
    constructor()
    {
        super();

        this.state={
            user:[],
            validateButton : "block",
            displayAdminButton:"none",
            displayUserButton:"none",
            noUserMessage:''
           
        }
    }
    componentWillMount() {
        requireAuth(window.location.href)

        fetch('https://limsreactapi.azurewebsites.net/user/getUsers', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then((res) => res.json())
            .then((res) => {
                //console.log((res);
                this.setState({ user: res });

            })
    }

    
    findUser = () => {
    fetch('https://limsreactapi.azurewebsites.net/user/findUser', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // form:{mid:"1042932"}
      body: JSON.stringify({
        email: document.getElementById('manageAdminEmail').value
      })
    })
      .then((res) => res.json())
      .then((res) => {
          //console.log((res.length,res)
        if(res.length===1&&res[0].role==="user")
        {
            //console.log(("user")
            this.setState({displayAdminButton:"block",
                            displayUserButton:"none"})
        }
        else if(res.length===1&&res[0].role==="admin")
        {
            //console.log(('admin')
            this.setState({displayUserButton:"block",
                            displayAdminButton:"none"})
        }
        else if(res.length===0)
        {
            this.setState({noUserMessage:"User Doesn't Exist"})
        }
      })
  }
       
       changeRoleToAdmin = () => {
           fetch('http://limsreactapi.azurewebsites.net/user/editRole', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // form:{mid:"1042932"}
      body: JSON.stringify({
        email: document.getElementById('manageAdminEmail').value,
        role:"admin"
      })
    })
      .then((res) => res.json())
      .then((res) => {
          //console.log((res)
          if(res==="Done")
          {
              return res
            //   alert("Role Changed")
          }
          else{
              return res
            //   alert("An error occurred")
          }
      })
       }

       changeRoleToUser = () => {
           fetch('http://limsreactapi.azurewebsites.net/user/editRole', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      // form:{mid:"1042932"}
      body: JSON.stringify({
        email: document.getElementById('manageAdminEmail').value,
        role:"user"
      })
    })
      .then((res) => res.json())
      .then((res) => {
          //console.log((res)
          if(res==="Done")
          {
              return res
            //   alert("Changed to User")
          }
          else{
              return res
            //   alert("An error occurred")
          }
      })
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
                                        textAlign: "left",marginTop:"7px",marginLeft:"2%"
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

                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to="/bookadd">
                                        <a className="dropdown-item" href="!#">Add Book(s)</a>
                                        </Link>
                                        <Link to="/bookedit">
                                        <a className="dropdown-item" >Edit Book(s)</a>
                                        </Link>
                                        <Link to="/manageuser">

                                        <a className="dropdown-item" >Manage User(s)
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
                                                   <div className="form-group " style={{ textAlign: "left" }}>
                                                    Email-Id:
                                                <input type="text" id="manageAdminEmail" className="form-control" />
                                                </div>

                                                            {/*<div style={{textAlign:'left'}}><button type="button" onClick={this.findBook} className="btn btn-warning" style={{alignContent : "left"}}>Make Admin</button>

                                            <button onClick={this.deleteBook} className="btn btn-danger" style={{marginLeft :'30px'}}>Remove Admin</button>*/}
                                            
                                            {/*</div>*/}

                                            <div style={{textAlign:'left'}}>
                                                <button type="button" onClick={this.findUser}
                                                className="btn btn-warning" style={{alignContent : "left",display:this.state.validateButton}}>Validate
                                                </button>
                                            </div>
                                            <br />
                                            <div>
                                                <button type="button" onClick={this.changeRoleToAdmin}
                                                className="btn btn-default" style={{alignContent : "left",display:this.state.displayAdminButton, backgroundColor:"#614126", color:"white"}}>Change Role to Admin
                                                </button>
                                            </div>
                                            <div>
                                                <button type="button" onClick={this.changeRoleToUser}
                                                className="btn btn-default" style={{alignContent : "left",display:this.state.displayUserButton, backgroundColor:"#614126", color:"white"}}>Change Role to User
                                                </button>
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

export default ManageAdmin;