import React from 'react';
import './eachbook.css';
export const Cards =(props) =>
{
return(
    <div>

 <div className="card-columns">

        <div className="card" >
  <img className="card-img-top" src="http://www.taylor.lib.mi.us/ImageRepository/Document?documentID=1858" height="200" width="215" alt="Card image cap" />
  <div className="card-block">
    <h4 className="card-title">Title : {props.data.details.title}</h4>
    <p className="card-text"><b> ISBN :</b><span> {props.data.isbn}</span></p>
    <p className="card-text"><b> Issued Date :</b><span>{props.data.details.borrowedDate}</span></p>
    <p className="card-text"><b> Return Date : </b><span>{props.data.details.returnDate}</span></p>
    </div>
  </div>
</div>

{/*<div class="container">
  <h2>Carousel Example</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
   
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="item active">
        <img src="la.jpg" alt="Los Angeles" width="100%" />
      </div>

      <div class="item">
        <img src="chicago.jpg" alt="Chicago" width="100%" />
      </div>
    
      <div class="item">
        <img src="ny.jpg" alt="New york" width="100%" />
      </div>
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>*/}
           
        </div>

);
} 