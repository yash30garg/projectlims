import React from 'react'
import './css/isssuedSlider.css'
export const Card=(props)=>
{
    return(
        <div className="eachCard">
        <img src={require("../../../../Assets/Images/loginBackground.jpg")} alt="not available" height="200" width="215"/><br/>
        <b>ISBN: </b><span>{props.data.isbn}</span><br/>
        <b>Title: </b><span>{props.data.details.title}</span><br/>
        <b>Issued Date: </b><span></span>{props.data.details.borrowedDate}<br/>
        <b>Return Date: </b><span>{props.data.details.returnDate}</span>
        </div>
    );
}