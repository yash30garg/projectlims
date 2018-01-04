import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
    return(    
    <div className="card" style={{ width: '20rem', paddingBottom : "0px" }}>

      <img  className="card-img-top" src={props.data.details.url} alt="not available" height="200px"/>

    
    <div className="card-block text-block">
        <b>Title: </b><span>{props.data.details.title}</span>
    </div>
  <div className="overlay">
  <div className="text">
  <h4>Return Date: </h4><br/>
  <h6>{props.data.details.returnDate}</h6></div>
  </div>
  </div>
    );


}
export default Card;