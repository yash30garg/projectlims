import React, {Component} from 'react';
import axios from 'axios';
import book from '../search-component/SearchResults'
let users;
class Details extends Component{

render(){
    let book=this.props.data;
    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-4 m-5">
        <img src={book.details.url} height="600vh"/>
        </div>
        <div className="col-md-4 m-5">
        <h1><u>
        {book.details.title}
        </u>
        </h1><br/>
        <h3><b><i>Author:</i></b> {book.details.author}</h3>
        </div>
        </div>
        </div>
    )
}

}
export default Details;