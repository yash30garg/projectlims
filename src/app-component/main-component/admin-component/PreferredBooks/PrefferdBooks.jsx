import React, { Component } from 'react';
import axios from 'axios';
import './PrefferedBooks.css';
// import $ from 'jquery';
// var preferredBooks = [];

class PBooks extends Component {

    constructor() {
        super();
        this.state = {
            display: [],
            storeId:"imga"
        }
    }
    
    componentDidMount() {
        axios.get('https://api.myjson.com/bins/19krvn')
            .then(res => {
                this.setState({ display: res.data.booksArray });
                console.log(this.state.display);
            })
    }

    callModal=(arg)=>
    {
        console.log(this.state.storeId);
        var modal = document.getElementById('myModal');
        var img = document.getElementById(arg.isbn);
        var modalImg = document.getElementById("img01");
        var captionText = document.getElementById("caption");                
        modal.style.display = "block";
        modalImg.src = arg.details.url;
        captionText.innerHTML = `<b>Title: </b>${arg.details.title}<br>
        <b>Category: </b>${arg.details.category}</b>
        <b>Author: </b>${arg.details.author}</b>
        <b>Publisher: </b>${arg.details.publisher}</b>
        <b>Rating: </b>${arg.details.rating}</b>
        <b>Category: </b>${arg.details.copies}</b>`;
        var span = document.getElementsByClassName("close")[0];
        span.onclick = function() { 
          modal.style.display = "none";
        }
    }

              render()
               {


                   let s1,s2,s3,s4;
            if(this.state.display.length!=0)
            {
            let b=this.state.display.filter((res)=>res.details.rating>=1) ;
           s1=<div className="carousel-item">
               {b.slice(0,3).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem' }} onClick={this.callModal.bind(this,r)}>
             <img className="d-block card-img" src={r.details.url} height="150px"/> 
                 <div className="card-block text-block">
                 <b>Title: </b><span>{r.details.title}</span><br/>
                 <b>Author: </b><span>{r.details.author}</span>
                </div>
             </div>);        
              
            })}
            </div>
                       s2=<div className="carousel-item">
               {b.slice(3,6).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem'}} onClick={this.callModal.bind(this,r)}>
             <img className="d-block card-img" src={r.details.url} height="150px" /> 
                 <div className="card-block text-block">
                 <b>Title: </b><span>{r.details.title}</span><br/>
                 <b>Author: </b><span>{r.details.author}</span>
                </div>
             </div>); 
            })}
            </div>
                       s3=<div className="carousel-item">
               {b.slice(6,9).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem' }} onClick={this.callModal.bind(this,r)}>
             <img className="d-block card-img" src={r.details.url} height="150px"/> 
                 <div className="card-block text-block">
                 <b>Title: </b><span>{r.details.title}</span><br/>
                 <b>Author: </b><span>{r.details.author}</span>
                </div>
             </div>); 
            })}
            </div>

                        s4=<div className="carousel-item">
               {b.slice(9,12).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem' }} onClick={this.callModal.bind(this,r)}>
             <img className="d-block card-img" src={r.details.url} height="150px"/> 
                 <div className="card-block text-block">
                 <b>Title: </b><span>{r.details.title}</span><br/>
                 <b>Author: </b><span>{r.details.author}</span>
                </div>
             </div>); 
            })}
            </div>
        }   
    


        return (
<div>

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>    
  </ol>
  <div style={{ height:'300px' }} class="carousel-inner" role="listbox">
 <div class="carousel-inner" role="listbox" >

      <div class="carousel-cell">
       <div class="carousel-item active">
    <img className="d-block activeImage" id="imga" style={{ margin:'auto' }}src="http://bookloverbookreviews.dhvdjqudnc8k2lygmnqz.maxcdn-edge.com/wp-content/uploads/2017/07/BEST-BOOKS-of-2017-so-far.png" alt="First slide" height ="300" width="700" />
    </div>
    {s1}
    {s2}
    {s3}
    {s4}
  </div>
  </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span aria-hidden="true"><img src={require("../../../../Assets/Images/arrow_left.png")} height="20" width="20"/></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next" >
    <span class="arrow" aria-hidden="true"><img src={require("../../../../Assets/Images/arrow_right.png")} height="20" width="20"/></span>
    <span class="sr-only arrow">Next</span>
  </a>
</div>
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

        )
    }
}

export default PBooks;

