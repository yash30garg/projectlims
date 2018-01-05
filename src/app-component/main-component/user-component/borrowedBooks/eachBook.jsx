import React from 'react'
import './css/isssuedSlider.css'
import $ from 'jquery';
 const Card=(props)=>
{
    return(    
            <div
                className="card-img mx-auto particular"
                id={props.data.isbn}
                style={{
                width: '150px'
            }}>
                <img
                    className="mx-auto"
                    src={props.data.details.url}
                    height="180px"
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
                            <b style={{fontSize:'12px'}}>Renew</b>
                        </button>
                    </div>
                </div>
            </div>

    );


}
export default Card;