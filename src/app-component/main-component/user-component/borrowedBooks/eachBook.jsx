import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
     
    return(
    <div class="card col s4 m3 offset-m1 heigh">
    <div class=" card-image waves-effect waves-block waves-light">
      <img class="activator" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" width="100" height="250" />
    </div>
    <div class="card-content">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Book Details<i class="material-icons right">close</i></span>
        <b>ISBN: </b>{props.data.isbn}<br/>
        <b>Title: </b>{props.data.details.title}<br/>
        <b>Issued Date: </b>{props.data.details.borrowedDate}<br/>
        <b>Return Date: </b>{props.data.details.returnDate}
    </div>
  </div>
    );
}
export default Card;