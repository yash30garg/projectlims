import React,{Component}from 'react';
import EachTopCard from './eachTopCard';
import './topRated.css';
export const EachCategory=(props)=>
{
    return(
                     <div className="put mx-4 mt-4">
                <h5 className="card-header yoyo" style={{ backgroundColor: "#8a0051", color: "white" }}>{props.category.toUpperCase()}</h5>
                <br />
                <div className="row mb-5 mt-2">
     {props.rated.filter(results=>results.details.category.toLowerCase()==props.category).map(rslt=>{
         return(
             <EachTopCard key={rslt.isbn} item={rslt}/>
         )
     })}
     </div>
              
     </div>
    );
}