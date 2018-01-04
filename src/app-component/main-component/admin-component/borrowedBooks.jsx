import React from 'react';
import {Cards} from './eachbook.jsx';
export const UserBooks =(props) =>
{
return(
    <div className="row">
        {props.list.map(each =>{
            return (
                <div className="col-md-6 col-sm-12 col-lg-4">
                <Cards key={each.isbn} data={each} />
                </div>
                )
        })}
        </div>

)
} 