import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
    return(
    <div className="col-md-4" >    
    <div className="card" style={{ width: '20rem', paddingBottom : "0px" }}>
   
      <img  className="card-img-top" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" height="250px"/>
    
    <div className="card-block text-block">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
 
  </div>
     <br />
  </div>


    );


}
export default Card;