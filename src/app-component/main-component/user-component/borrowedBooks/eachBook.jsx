import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
export const Card=(props)=>
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
    <div class="card col s3 eachCard">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" height="200" width="215"/>
    </div>
    <div class="card-content">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">Book Details<i class="material-icons right">close</i></span>
        <b>ISBN: </b><span>{props.data.isbn}</span><br/>
        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Issued Date: </b><span></span>{props.data.details.borrowedDate}<br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
  </div>
    );
}