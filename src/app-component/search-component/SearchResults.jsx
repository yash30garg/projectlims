import React, {Component} from 'react';
import {processedData} from './Search';
import $ from 'jquery';
import axios from 'axios';
import {Link} from 'react-router-dom';
import './Search.css';
export var book;
let users,
    books;
class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
        // axios
        //     .get('https://api.myjson.com/bins/14x90j')
        //     .then(res => {
        //         this.setState({output: res.data});
        //         users = this.state.output;
        //         console.log(users)
        //         const b = users.filter((res) => res.user.mid === "1042948")
        //     });
    }

    /*openModal=(arg)=>
    {
        var modal = document.getElementById('myModal');
        var img = document.getElementById(arg.isbn);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");
        modal.style.display = "block";
        modalImg.src = arg.details.url;
        captionText.innerHTML = `<b>Title: </b>${arg.details.title}<br>
        <b>Category: </b>${arg.details.category}</br>
        <b>Author: </b>${arg.details.author}</br>
        <b>Publisher: </b>${arg.details.publisher}</br>
        <b>Rating: </b>${arg.details.rating} star</br>
        <b>Copies Available: </b>${arg.details.copies}</br>`;
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() {
          modal.style.display = "none";
        }
    }*/
    handle(res){
        window.selected=res;
    }
    render()
    {
        let x = 0;;
        const a = processedData.map(res => {
            return (
                <div className="col-lg-2 col-md-4 col-sm-6 col-xs-12 mt-4">
                    <Link to="/search/details">
                        <div
                            id={res.isbn}
                            className="card particular"
                            style={{
                            width: '13rem',
                            paddingBottom: '0px'
                        }} onClick={()=>this.handle(res)}>
                            <img
                                className="card-img-top"
                                src={res.details.url}
                                alt="not available"
                                height="200vh"/>
                            <div className="overlay" style={{backgroundColor: "rgba(97,65,38,0.9)"}}>
                                <div className="text container-fluid">
                                    {res.details.title}<br/>
                                    Author: {res.details.author}<br/>
                                    Category: {res.details.category}<br/> {[1, 2, 3, 4, 5].map(d => {
                                        if (res.details.rating >= d) 
                                            return <span
                                                className="fa fa-star mt-1"
                                                style={{
                                                color: '#FFD700',
                                                fontSize:'13px'
                                            }}></span>
                                        else 
                                            return <span
                                                className="fa fa-star mt-1"
                                                style={{
                                                color: 'black',
                                                fontSize:'13px'
                                            }}></span>
                                    })}
                                    <br/>
                                    <button
                                        className="btn btn-primary mt-3"
                                        style={{
                                        backgroundColor: 'white',
                                        color: "rgb(205,133,63)"
                                    }}
                                        onClick={this.request}>
                                        <b>Know More</b>
                                    </button>
                                </div>
                        {/*<div className="overlay">
                            <div className="text container-fluid">                          
                            <b>{res.details.title}</b><br/><br/>
                            <b>Author : </b>
                            {res.details.author}<br/><br/>
                            <b>Category: </b>
                            {res.details.category}<br/><br/>
                            {[1,2,3,4,5].map(d=>{
                              if(res.details.rating>=d)
                                return<span class="fa fa-star" style={{color:'white'}}></span>
                              else 
                                return<span class="fa fa-star" style={{color:'black'}}></span>
                            })}
                            <button class="btn mt-4" style={{backgroundColor:'white', color:'rgb(96, 0, 58)'}} onClick={this.request}><b>Request Book</b></button>*/}
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });
        return (
            <div className="container-fluid">
                <div className="row">
                    {a}
                </div>
            </div>
        /*<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <div className="container">
  <div className="row">
  <div className="col-md-6">
  <img class="modal-content" id="img01" height="500px" width="400px"/>
  </div>
  <div className="col-md-6">
  <div id="caption">
  </div>
  </div>
  </div>
  </div>
</div>*/

        );

    }
}
export default SearchResults;