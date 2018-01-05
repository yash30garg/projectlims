import React,{Component}from 'react';
import EachTopCard from './eachTopCard';
import './topRated.css';
export const EachCategory=(props)=>
{
    return(
                     <div className="put mx-4 mt-1" >
                <h5 className="card-header yoyo" style={{ backgroundColor: "#26a69a", color: "white", fontSize: "15px", fontStyle :"italic" }}>{props.category.toUpperCase()}</h5>
                <div className="row mb-2 mt-2">
     {props.rated.filter(results=>results.details.category.toLowerCase()==props.category).slice(0,6).map(rslt=>{
         return(
             <EachTopCard key={rslt.isbn} item={rslt}/>
         )
     })}
     </div>
              
     </div>
    );
}