import React, {Component} from 'react';
import Details from './details.jsx';
import Rx from 'rxjs';
import Header from '../header-component/header';
let val;
export class BookDetails extends Component{
    constructor(){
        super();
    }
    render(){
        val=window.selected;
        const a=<Details data={val}/>
        return(
            <div>
            {a}
            </div>
        )
    }
}