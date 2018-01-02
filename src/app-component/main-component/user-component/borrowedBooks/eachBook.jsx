import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
    return(
<<<<<<< HEAD
    <div className="col-md-4" >    
    <div className="card" style={{ width: '20rem', paddingBottom : "0px" }}>
=======
       
    <div className="card particular" style={{ width: '20rem' }}>
  
    <div className="card" style={{ width: '20rem', paddingBottom : "5px" }}>

>>>>>>> 46f957e74791bae9ac4b6a7afcced696c7708d4c
   
      <img  className="card-img-top" src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" height="250px"/>
    
    <div className="card-block text-block">

        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
    </div>
<<<<<<< HEAD
 
=======
      <div className="overlay">
    <div className="text">Hello World</div>
  </div>
>>>>>>> 46f957e74791bae9ac4b6a7afcced696c7708d4c
  </div>
     <br />
  </div>


    );


}
export default Card;