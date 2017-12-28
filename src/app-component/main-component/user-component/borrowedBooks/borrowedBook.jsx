import React from 'react';
import Card from './eachBook'
import './css/isssuedSlider.css'

export const UserBooks=(props)=>
{
   return(
      
       <div className="container">
       {props.list.map(each=>
           {
               return (
                   <Card key={each.isbn} data={each}/>);
           })}
        </div>
       
   );
}