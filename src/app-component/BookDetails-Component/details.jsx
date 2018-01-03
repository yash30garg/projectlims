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
        <div className="col-md-8 offset-md-4 m-5">
        <h1>Hello</h1>
        </div>
        </div>
        </div>
        </div>
    )
}

}
export default Details;