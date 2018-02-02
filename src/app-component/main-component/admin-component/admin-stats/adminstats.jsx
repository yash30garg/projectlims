//   import React, {Component} from 'react';
import React, { Component } from 'react';

// import { Link } from 'react-router-dom';
// import { UserBooks } from './../borrowedBooks';
import {requireAuth} from '../../../../app-component/isLoggedIn'

//   var count = 0;

  export default class DashBoardStats extends Component {
 constructor()
    {
        super();

        this.state={
            user:[],
            output: [],
        display: []
        }
    }
    	componentWillMount() {
		requireAuth(window.location.href)

        fetch('https://limsreactapi.azurewebsites.net/user/getUsers',{
            method:'GET',
            headers:{'Content-Type':'application/json'}
        })
        .then((res)=>res.json())
        .then((res) =>{
         //console.log((res);
         this.setState({user:res});
        
        		})

                 fetch('https://limsreactapi.azurewebsites.net/books/getBooks',{
            method:'GET',
            headers:{'Content-Type':'application/json',
        'Authorization': localStorage.getItem('token')}
        })
        .then((res)=>res.json())
        .then((res) =>{
         //console.log((res);
         this.setState({display:res});
        
        		})
    }
   
    render(){
         window.users=this.state.user;
        window.bookies=this.state.display;
        let booksnum = window.bookies.length;
        let total=0;
        window.users
        // eslint-disable-next-line
            .map((result) => {
            //    count+=`${result.borrowedBooks.length}`
            total=total+parseInt(result.borrowedBooks.length,10);
              
        });
        let booksavail = window.bookies.length-total;
        let tper = ((booksavail/booksnum)*100).toFixed(1);
        
        let rper = ((total/booksnum)*100).toFixed(1);
        
        let values=window.users.length;
    //  count = 0;
        
                return (
                    <div>
     <div className="list-group">
                                    <a  class="list-group-item " style={{backgroundColor : "rgb(97, 65, 38)", color:"white"}}>
                                        <span class="fa fa-cog" aria-hidden="true"></span>
                                        DashBoard</a>
                                    <a class="list-group-item  list-group-item-action">
                                        <span class="fa fa-list-alt" aria-hidden="true"></span>Total Books<div
                                            className='mov'
                                            style={{
                                                paddingRight: "175px"
                                            }} />
                                        <span class="badge  badge-pill badge-warning">
                                            {/*{this.state.display.length}*/}
                                            {booksnum}
                                            </span>
                                    </a>
                                    <a  class="list-group-item  list-group-item-action">
                                        <span class="fa fa-pencil" aria-hidden="true"></span>Books available<div
                                            className='mov'
                                            style={{
                                                paddingRight: "150px"
                                            }} />
                                        <span className="badge badge-pill badge-warning">{booksavail}</span>
                                    </a>
                                    <a  class="list-group-item  list-group-item-action">
                                        <span class="fa fa-user" aria-hidden="true"></span>Users<div
                                            className='mov'
                                            style={{
                                                marginRight:"68%"
                                            }} />
                                        <span className="badge badge-pill badge-warning mov">{values}</span>
                                    </a>
                                    {/*<a href="!#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>*/}
                                </div>

                                <br />
                                <div className="card">
                                    <div className="card-header card-primary" style={{backgroundColor : "rgb(97, 65, 38)",textAlign:"left"}}>
                                        <div className="t">
                                            <span className="fa fa-list" aria-hidden="true"></span>
                                            Books Stats
                                        </div>
                                    </div>
                                    <h6 className="he5">Books Available :</h6>
                                    <div className="p1">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: `${tper}%` , backgroundColor:"#f0ad4e" }} aria-valuenow={tper} aria-valuemin="0" aria-valuemax="100">{tper}%</div>
                                        </div>
                                    </div>

                                    <h6 className="he6">
                                        Books to be returned :</h6>
                                    <div className="p2">
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style={{ width: `${rper}%` , backgroundColor:"#f0ad4e" }} aria-valuenow={rper} aria-valuemin="0" aria-valuemax="100">{rper}%</div>
                                        </div>

                                    </div>
                                </div>

                            </div>

                )
    }
   }