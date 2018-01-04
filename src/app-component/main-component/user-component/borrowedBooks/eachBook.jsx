import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
    return(    
            <div
                className="card-img my-2 mx-auto particular"
                id={props.data.isbn}
                style={{
                width: '240px'
            }}>
                <img
                    className="mx-auto"
                    src={props.data.details.url}
                    height="290px"
                    width="100%"/>
                <div className="overlay">
                    <div className="text container-fluid">
                        <b>{props.data.details.title}</b><br/><br/>
                        <p>Return by {props.data.details.returnDate}</p>

                        <button
                            class="btn btn-block mt-5"
                            style={{
                            backgroundColor: 'white',
                            color: 'rgb(96, 0, 58)'}}>
                            <b>Renew</b>
                        </button>
                    </div>
                </div>
            </div>
    );


}
export default Card;