import React from 'react';
import Card from './eachBook'
import './css/isssuedSlider.css'

export const UserBooks=(props)=>
{
   return(
      
       <div className="row">
       {props.list.map(each=>
           {
               return (
                   <div className="col-md-6 col-sm-12 col-lg-4 mt-3">                   
                   <div className="particular">
   <Card key={each.isbn} data={each}/>
</div>
</div>
                   );
                   
           })}
        </div>
       
   );
}