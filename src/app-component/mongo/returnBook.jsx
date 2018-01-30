import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {storeBbooks} from '../../state/action/bbooksAction'
let response,isbn;

class ReturnBook extends Component{
    constructor(){
        // alert("in")
        super();
        this.retBook=this.retBook.bind(this);
    }
retBook=(isbn)=>{
fetch('http://localhost:3005/borrowedBooks/deleteBook',{
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
                mid:window.user,
                isbn:isbn
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
            // storeBbooks.dispatch({type:"STORE_BBOOKS",payload: res.data})
            this.props.storeBbooks(res.data)
            // window.bbooks=res.data;
            // window.bbooks=storeBbooks.getState().bbooks;
    })
}
render(){
    // alert("in return")
    isbn=this.props.isbn;
    this.retBook(isbn);
    return(
        <div></div>
    )
}
}

function matchDispatchToProps(dispatch){
    return bindActionCreators({storeBbooks: storeBbooks}, dispatch);
}
// export default ReturnBook;
export default connect(null,matchDispatchToProps)(ReturnBook)