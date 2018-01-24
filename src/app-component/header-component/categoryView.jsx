import React from 'react';
import './bootheader.css';
import {Link} from 'react-router-dom';
let handle=(data)=>{
window.selected=data;
}

export const Category=(props)=>
{
    let filteredArray=[];
    if(props.selected==="all")
    {
          filteredArray=props.data.sort((a, b) => {
                if (a.details.category.toUpperCase() > b.details.category.toUpperCase()) {
                    return 1;
                } else if (a.details.category.toUpperCase() < b.details.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
    }
    else
    {
    filteredArray=props.data.filter(r=>r.details.category.toLowerCase()===props.selected.toLowerCase()).sort((a,b)=>{return(b.details.rating-a.details.rating)})
    }

    let b=filteredArray.map(res=>{   
        return(
         
                <div
                key={`filter${res.isbn}`}
                onClick={()=>handle(res)}
                className="col-lg-2 col-md-4 col-sm-4 col-xs-4 mt-2 mb-3">
            
        <div
                className="card-img particular mx-auto"
                id={res.isbn}
                style={{
                    height:"13rem", width:"160px"
            }}>
            <Link to="/search/details">
                <img
                    alt=""
                    className="mx-auto"
                    src={res.details.url}
                    height="160px"
                    width="100%"/>
                   <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {res.details.title}
                    </div>
                     <div className="overlay" style={{backgroundColor: "rgba(97,65,38,0.9)"}}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{res.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {res.details.author}<br/>
                        {
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {

                            if (res.details.rating >= d) 
                                return <span
                                key={`category${res.isbn}`}
                                    className="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'
                                }}></span>
                        })}
                    </div>
                </div>
                </Link>
                </div>
</div>

        )

    })
return(
    <div>
        {props.isSearchClicked===false?
    <div className="contained">
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white", height:"45px" , fontSize : "15px"}}  >
        <h5 >{props.selected.toUpperCase()} <span style={{float:'right',cursor:'pointer',paddingLeft:'85px'}} onClick={props.categoryCrossClicked}>x</span></h5>
        </ol>
    <div className="row ml-1 mr-1">
     {b}
    </div>
    </div>:null}
    </div>
)
}