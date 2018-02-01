import React from 'react';
import './bootheader.css';

export const EachListItem = (props) => {
    return (
        <a>
    {/*  id={`i${props.categoryName}`} href='#' style={{textDecoration:'none'}}*/}
        <button type="button"
            onClick={(e)=> {e.preventDefault(); window.location = `/#/category/${props.categoryName.toLowerCase()}`}}
            className="btnl default  list-group-item list-group-item-action default ml-0"
            style={{
            background: " #FFF8DC"
        }}>

            <div className="col-md-0 fa fa-arrow-right " style={{color : 'brown'}} area-hidden="true"></div>
            <div className="col" style={{
                textAlign: "left", textTransform:'capitalize'
            }}>{props.categoryName}</div>
            <div className="row">
                <div className="badge badge-pill badge-warning mr-3">{props.completeArray
                        .filter(r => r.category.toLowerCase() === props.categoryName.toLowerCase())
                        .length}</div>
           
            </div>
        </button>

        </a>
    );
}