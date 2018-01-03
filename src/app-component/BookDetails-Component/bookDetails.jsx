import React, {Component} from 'react';
import Details from './details.jsx';
import Header from '../header-component/header'
import book from '../search-component/SearchResults';

export class BookDetails extends Component{
    render(){
        return(
            <div>
            <Header/>
            {/*<Details/>*/}
            </div>
        )
    }
}