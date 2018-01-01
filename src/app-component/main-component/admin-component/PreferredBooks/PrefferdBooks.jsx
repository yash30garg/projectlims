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

    // callModal=(arg)=>
    // {
    //     console.log(this.state.storeId);
    //     var modal = document.getElementById('myModal');
    //     var img = document.getElementById(arg);
    //     var modalImg = document.getElementById("img01");
    //     var captionText = document.getElementById("caption");                
    //     modal.style.display = "block";
    //     modalImg.src = this.src;
    //     captionText.innerHTML = this.alt;
    //     var span = document.getElementsByClassName("close")[0];
    //     span.onclick = function() { 
    //       modal.style.display = "none";
    //     }
    // }

              render()
               {


                   let s1,s2,s3;
            if(this.state.display.length!=0)
            {
            let b=this.state.display.filter((res)=>res.details.rating>=1) ;
           s1=<div className="carousel-item">
               {b.slice(0,4).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem' }}>
             <img className="d-block card-img" src={r.details.url} height="150px"/> 
                 <div className="card-block text-block">
                 <b>Title: </b><span>{r.details.title}</span><br/>
                 <b>Author: </b><span>{r.details.author}</span>
                </div>
             </div>);        
              
            })}
            </div>
                       s2=<div className="carousel-item">
               {b.slice(4,8).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem'}}>
             <img className="d-block card-img" src={r.details.url} height="150px" /> 
                 <div className="card-block text-block">
                 <b>Title: </b><span>{r.details.title}</span><br/>
                 <b>Author: </b><span>{r.details.author}</span>
                </div>
             </div>); 
            })}
            </div>
                       s3=<div className="carousel-item">
               {b.slice(8,12).map((r)=>{
             return(
             <div id={r.isbn} className="card" style={{ width: '20rem' }}>
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

<h1 className="heading">Top rated books:</h1>
<div className="seperate"></div>
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel"  >
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>    
  </ol>
  <div style={{ height:'300px' }} class="carousel-inner" role="listbox">
 <div class="carousel-inner" role="listbox">

      <div class="carousel-cell">
       <div class="carousel-item active">
    <img className="d-block activeImage" id="imga" style={{ margin:'auto' }}src="http://bookloverbookreviews.dhvdjqudnc8k2lygmnqz.maxcdn-edge.com/wp-content/uploads/2017/07/BEST-BOOKS-of-2017-so-far.png" alt="First slide" height ="300" width="700" />
    </div>
    {s1}
    {s2}
    {s3}
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

</div>

        )
    }
}

export default PBooks;

