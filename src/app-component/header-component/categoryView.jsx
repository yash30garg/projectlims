import React, {Component} from 'react';
import './bootheader.css';
import {Link} from 'react-router-dom';
let handle=(data)=>{
window.selected=data;
}

export const Category=(props)=>
{
    let b=props.data.filter(r=>r.details.category.toLowerCase()==props.selected.toLowerCase()).map(res=>{
        return(
            <Link to="/search/details">
                    <div
                    onClick={()=>handle(res)}
            className="col-lg-2 col-md-4 col-sm-4 col-xs-4 mt-2 mb-3">

        <div
                className="card-img particular mx-auto"
                id={res.isbn}
                style={{

                width: '150px'


            }}>
                <img
                    className="mx-auto"
                    src={res.details.url}
                    height="180px"
                    width="100%"/>
                     <div className="overlay" style={{backgroundColor: "rgba(205,133,63,0.9)"}}>
                    <div className="text container-fluid" >
                        <b>{res.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {res.details.author}<br/>
                        {[1, 2, 3, 4, 5].map(d => {

                            if (res.details.rating >= d) 
                                return <span
                                    className="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'
                                }}></span>
                            // else 
                            //     return <span
                            //         className="fa fa-star"
                            //         style={{
                            //         color: 'black',
                            //         fontSize:'5px'
                            //     }}></span>
                        })}
                        <button
                            className="btn btn-block mt-3"
                            style={{
                            backgroundColor: 'white',
                            color: 'rgb(205,133,63)'
                            
                        }}
                            onClick={this.request}>
                            <b style={{fontSize:'13px',marginLeft:'-5px'}}>REQUEST BOOK</b>
                        </button>
                    </div>
                </div>
                </div>
</div>
</Link>
        )

    })
return(
    <div className="contained">
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white"}}  >
        <h5 >{props.selected.toUpperCase()} <span style={{float:'right',cursor:'pointer',paddingLeft:'70px'}} onClick={props.categoryCrossClicked}>x</span></h5>
        </ol>
    <div className="row">
     {b}
    </div>
    </div>
)
}