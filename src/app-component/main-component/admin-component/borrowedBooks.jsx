import React from 'react';
import {Cards} from './eachbook.jsx';
export const UserBooks =(props) =>
{
return(
    <div>
        {props.list.map(each =>{
            return <Cards key={each.isbn} data={each} />
        })}
        </div>

)
} 