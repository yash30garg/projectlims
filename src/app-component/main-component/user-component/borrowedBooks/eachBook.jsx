import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
    return(
    <div className="col-md-6 col-sm-12 col-lg-3">    
    <div className="card" style={{ width: '20rem' }}>
   
      <img  className="card-img-top" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" height="150px"/>
    
    <div className="card-block text-block">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
  </div>
  </div>
    );


}
export default Card;