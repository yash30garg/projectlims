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
    <div className="card col m3" style={{ width: '20rem' }}>
    
      <img className="card-img-top" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" />

    <div className="card-block">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
  </div>
    );

//     <div class="card" style="width: 20rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-block">
//     <h4 class="card-title">Card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
}
export default Card;