import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
          
$(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});


    return(
    <div className="card col s6 m2 offset-m1">
    <div className=" card-image waves-effect waves-block waves-light">
      <img className="activator" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" width="100" height="150" />
    </div>
    <div className="card-content">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Book Details<i className="material-icons right">close</i></span>
        <b>ISBN: </b><span>{props.data.isbn}</span><br/>
        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Issued Date: </b><span></span>{props.data.details.borrowedDate}<br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
  </div>
    );
}
export default Card;