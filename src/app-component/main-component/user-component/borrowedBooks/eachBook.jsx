import React from 'react'
import './css/isssuedSlider.css'
import {Link} from 'react-router-dom';
// import $ from 'jquery';
let handle = (data) => {
    window.selected = data;
    window.showDetails=true;
    document.getElementById('detail').click();
}
const Card = (props) => {
    let res = props.data;
    return (
            <div
                className="card-img mx-auto particular"               
                id={props.data.isbn}
                style={{
                height: "13rem",
                width: "180px"
            }}>
                <img
                    className="mx-auto"
                    src={props.data.url}
                    height="160px"
                    width="100%"
                    alt=""
                    />
                    <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {props.data.title}
                    </div>
                <div
                    className="overlay"
                    style={{
                    backgroundColor: "rgba(97,65,38,0.9)"
                }}
                onClick={() => handle(res)}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{props.data.title}</b><br/><br/>
                        <p>Return by {props.data.returnDate}</p>
                    </div>
                </div>
            </div>

    );

}
export default Card;