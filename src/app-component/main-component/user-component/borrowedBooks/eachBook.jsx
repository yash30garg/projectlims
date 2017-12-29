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
    <div className="card col-md-6 col-sm-12 col-lg-3" style={{ width: '20rem' }}>
    
      <img className="card-img" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" height="200vh"/>

    <div className="card-block">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
  </div>
    );


}
export default Card;