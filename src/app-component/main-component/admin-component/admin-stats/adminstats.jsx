//   import React, {Component} from 'react';
import React, { Component } from 'react';



  var count = 0;

  export default class DashBoardStats extends Component {

   
    render(){
     count = 0;
        
                return (
                    <div>
     <div className="list-group">
                                    <a  class="list-group-item " style={{backgroundColor : "#0275d8", color:"white"}}>
                                        <span class="fa fa-cog" aria-hidden="true"></span>
                                        DashBoard</a>
                                    <a class="list-group-item  list-group-item-action">
                                        <span class="fa fa-list-alt" aria-hidden="true"></span>Total Books<div
                                            className='mov'
                                            style={{
                                                paddingRight: "170px"
                                            }} />
                                        <span class="badge  badge-pill badge-warning">
                                            {/*{this.state.display.length}*/}
                                            </span>
                                    </a>
                                    <a  class="list-group-item  list-group-item-action">
                                        <span class="fa fa-pencil" aria-hidden="true"></span>Books available<div
                                            className='mov'
                                            style={{
                                                paddingRight: "150px"
                                            }} />
                                        <span className="badge badge-pill badge-warning">75</span>
                                    </a>
                                    <a  class="list-group-item  list-group-item-action">
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

                )
    }
   }