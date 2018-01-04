import React, {Component} from 'react';
import axios from 'axios';
import book from '../search-component/SearchResults'
let users;
class Details extends Component{

render(){
    let book=this.props.data;
    return(
        <div className="container-fluid">
        <h1><u>
        {book.details.title}
        </u>
        </h1>
        <br/>
        <div className="row">
        <div className="col-md-4 m-3">
        <img src={book.details.url} height="350vh"/>
        </div>
        <div className="col-md-4 ">
    <br/>
    <table cellspacing="10">
    <h3>
    <tr>
    <td>
    <b><i>Author:</i></b>
    </td><td></td><td>
    {book.details.author}
    </td></tr>
    <tr>
    <td>
    <b><i>Category:</i></b>
    </td><td></td><td>
    {book.details.category}
    </td></tr>
    </h3>
    </table>
        </div>
        </div>
        </div>
    )
}

}
export default Details;