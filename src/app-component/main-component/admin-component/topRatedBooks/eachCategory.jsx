import React,{Component}from 'react';
import EachTopCard from './eachTopCard';
import './topRated.css';
export const EachCategory=(props)=>
{
    let c="#"+props.category;
    let s=props.category;
    return(
                <div className="put mx-4 mt-1">
                <a data-toggle="collapse" href={c} aria-expanded="true" aria-controls={c}><h5 className="card-header yoyo" style={{ backgroundColor: "#26a69a", color: "white" }}>{props.category.toUpperCase()}</h5></a>
                <div className="mb-2 mt-2" id={s}>
                <div className="row">
     {props.rated.filter(results=>results.details.category.toLowerCase()==props.category).slice(0,6).map(rslt=>{
         return(
             <EachTopCard key={rslt.isbn} item={rslt}/>
         )
     })}
     </div>
     </div>
              
     </div>
    );
}