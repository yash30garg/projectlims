import React from 'react'
import './css/isssuedSlider.css'
import {Link} from 'react-router-dom';
// import $ from 'jquery';
let handle = (data) => {
    window.selected = data;
}
const Card = (props) => {
    let res = props.data;
    return (
        <Link to="/search/details">
            <div
                className="card-img mx-auto particular"
                onClick={() => handle(res)}
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
                }}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{props.data.title}</b><br/><br/>
                        <p>Return by {props.data.returnDate}</p>
                    </div>
                </div>
            </div>
        </Link>

    );

}
export default Card;