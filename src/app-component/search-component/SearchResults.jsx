import React, {Component} from 'react';
import {processedData} from './Search';
import $ from 'jquery';
import axios from 'axios';
import './Search.css';
let users,books;
class SearchResults extends Component
 {
     constructor(props)
     {
     super(props);
    }

    openModal=(arg)=>
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
    }
     request() {
        if (books <5) {
            books++;
            alert("The Requested Book has been allotted to you..Please Collect It from the Library");
        }
        else{
            alert("Oops..Looks like You cannot borrow more books. Please return a book to borrow more")
        }
    }
     render()
     {
                 const a=processedData.map(res=>{
             return(
                 <div className="col-md-6 col-sm-12 col-lg-3 each">
        <div id={res.isbn} className="card particular" style={{ width: '20rem' }}onClick={this.openModal.bind(this,res)} >
      <img className="card-img-top" src={res.details.url} alt="not available" height="200vh"/>
    <div className="card-block text-block">
        <b>Title: </b><span>{res.details.title}</span><br/>
        <b>Category: </b><span>{res.details.category}</span>
    </div>
      <div class="overlay">
    <div class="text">Hello World</div>
  </div>
  </div>
  </div>
                 )});
         return(
             <div className="row eachRow">
             {a}
             <div id="myModal" class="modal">
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
</div>
             </div>
         );
     
    
 }
 }
 export default SearchResults;