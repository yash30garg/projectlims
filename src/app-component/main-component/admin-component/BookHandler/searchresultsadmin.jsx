import React, {Component} from 'react';
import {processedData} from './searchadmin.jsx';
// import $ from 'jquery';
import axios from 'axios';
// import './searchdis.css';
//eslint-disable-next-line
let users, books;
class SearchResultsAdmin extends Component
{
    // constructor(props)
    // {
    //     super(props);
    // }
    componentDidMount()
    {
        axios
            .get('https://api.myjson.com/bins/ds48n')
            .then(res => {
                this.setState({output: res.data});
                users = this.state.output;
        const b = users.filter((res) => res.user.mid === "1042948")
        books=b[0].userBooks.length
            });
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
  
    render()
    {
        const a = processedData.map(res => {
            return (
                <div className="col-md-4 my-5">
                    <div
                        id={res.isbn}
                        className="card particular"
                        style={{
                        width: '20rem',
                        paddingBottom: '0px'
                    }}>
                        <img
                            className="card-img-top"
                            src={res.url}
                            alt="not available"
                            height="300vh"/>

                        <div className="overlay">
                            <div className="text container-fluid">                          
                            <b>{res.title}</b><br/><br/>
                            <b>Author : </b>
                            {res.author}<br/><br/>
                            <b>Category: </b>
                            {res.category}<br/><br/>
                            {[1,2,3,4,5].map(d=>{
                              if(res.rating>=d)
                                return<span class="fa fa-star" style={{color:'white'}}></span>
                              else 
                                return<span class="fa fa-star" style={{color:'black'}}></span>
                            })}
                            {/*<button class="btn mt-4" style={{backgroundColor:'white', color:'rgb(96, 0, 58)'}} onClick={this.request}><b>Request Book</b></button>*/}
                            </div>
                        </div>
                    </div>
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
export default SearchResultsAdmin;