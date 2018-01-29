import React, { Component } from 'react';
import './details.css';
import '../search-component/Search.css';
import storeBbooks from '../../state/store/storeBbooks'
import $ from 'jquery';
import { withAlert } from 'react-alert'
import {requestBook} from '.././mongo/requestBook'
import {returnBook} from '.././mongo/returnBook'
import {addWishlist} from '.././mongo/addWishlist'
import {removeWishlist} from '.././mongo/removeWishlist'
import {getDates} from '../dates'
import {borrowDate, returnDate} from '../dates'
// import $ from 'jquery';
// import book from '../search-component/SearchResults'
// let users;
var req = require('request');
// let bbooks;
let response;
let book,
    w = null,
    b = null,
    a = null,
    val="";


class Details extends Component {
    constructor(props) {
        super(props);
        getDates();
        // bbooks=storeBbooks.getState().bbooks;
        b = (
            <button
                className="btn btn-primary mt-3"
                style={{
                    backgroundColor: 'white',
                    borderColor: "rgb(205,133,63)",
                    color: "rgb(205,133,63)"
                }}
                onClick={this.request}>
                <div className="fa fa-plus-circle"></div>
                <b>Request</b>
            </button>
        )
        w = (
            <button
                className="btn btn-primary mt-3"
                onClick={this.wishlist}

                style={{
                    backgroundColor: 'white',
                    borderColor: 'brown',
                    width: "4vw", color: "rgb(205,133,63)" 
                //eslint-disable-next-line                    
                }}>
                <div className="fa fa-heart-o fa-lg"></div>
                
                
            </button>
        )
        this.state = {
            req: b,
            wish: w,
            msg: ""
        };
        storeBbooks.getState().bbooks
            //eslint-disable-next-line            
            .map(res => {
                if (res.isbn === this.props.data.isbn) {
                    b = (
                        <div>
                            <button
                                className="btn btn-primary mt-3"
                                onClick={this.removeRequest}
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: "rgb(205,133,63)",
                                    color: "rgb(205,133,63)"
                                }}>
                                <div className="fa fa-check"></div>
                                <b>Return</b>
                            </button>
                            &nbsp;
                            <button
                                className="btn btn-primary mt-3"
                                // onClick={this.renew}
                                style={{
                                    backgroundColor: 'white',
                                    borderColor: "rgb(205,133,63)",
                                    color: "rgb(205,133,63)"
                                }}>
                                <div className="fa fa-refresh"></div>
                                <b>Renew</b>
                            </button>
                        </div>
                    )
                    this.state={
                        req: b,
                        wish: w
                    }
                }
            })
        this.renew = this
            .renew
            .bind(this);
        window
            .wishlist
            //eslint-disable-next-line            
            .map(res => {
                if (res.isbn === this.props.data.isbn) {
                    w = (
                        <button
                            onClick={this.removeWishlist}
                            className="btn btn-primary mt-3"
                            style={{
                                backgroundColor: 'white',
                                borderColor: 'brown',
                                //eslint-disable-next-line                            
                                width: "4vw",  color: "rgb(205,133,63)"
                            }}>
                            <div className="fa fa-heart fa-lg"></div>
                        </button>
                    )
                    this.state={
                        req: b,
                        wish: w
                    }
                }
            })
        this.request = this
            .request
            .bind(this);
        this.wishlist = this
            .wishlist
            .bind(this);
        this.removeWishlist = this
            .removeWishlist
            .bind(this);
        this.removeRequest = this
            .removeRequest
            .bind(this);
    }

    componentDidUpdate() {
        window
            .setTimeout(function () {
                this.setState({ msg: "" })
            }.bind(this), 25000)
    }

    goBack() {
        window
            .history
            .go(-1)
    }

    removeWishlist = () => {
        console.log(book);
        removeWishlist(book.isbn);
        w = (
            <button
                className="btn btn-primary mt-3"
                style={{
                    backgroundColor: 'white',
                    borderColor: 'brown',
                    //eslint-disable-next-line                
                    width: "4vw", color: "rgb(205,133,63)"
                }}
                onClick={this.wishlist}>
                <div className="fa fa-heart-o fa-lg"></div>
            </button>
        )
        let val = (
            <div class="alert notify alert-success ml-1 mt-1" role="alert">
                <strong>Success! &nbsp;
                </strong>
                &nbsp; The Book was successfully removed from the wishlist. &nbsp;
                <strong>
                    &nbsp;Why don't you add some more... &nbsp;Happy Reading!!</strong>
            </div>
        )
        this.setState({ wish: w, msg: val })
    }

    removeRequest = () => {
        returnBook(book.isbn)
            b = (
            <button
                className="btn btn-primary mt-3"
                style={{
                    backgroundColor: 'white',
                    borderColor: "rgb(205,133,63)",
                    color: "rgb(205,133,63)"
                }}
                onClick={this.request}>
                <div className="fa fa-plus-circle"></div>
                <b>Request</b>
            </button>
        )
        val = (
            <div class="alert notify alert-success ml-1 mt-1" role="alert">
                <strong>Success! &nbsp;
                </strong>
                &nbsp;The Book was successfully returned.&nbsp;
                <strong>
                    &nbsp;Come Back Soon for More Books. &nbsp;Happy Reading!!</strong>
            </div>
        )
        this.setState({ req: b, msg: val })
    }

    renew = () => {
            storeBbooks.getState().bbooks
            //eslint-disable-next-line            
            .map((res) => {
                if (res.isbn === book.isbn) {
                    let val;
                    if (res.isRenewed === false) {
                        res.isRenewed = true;
                        var dates = res
                            .returnDate
                            .split("/");
                        var tested = new Date();
                        tested.setDate(dates[0]);
                        tested.setMonth(dates[1] - 1);
                        tested.setFullYear(dates[2]);
                        var newDate = new Date(tested.getTime() + (10 * 24 * 60 * 60 * 1000));
                        var dd1 = newDate.getDate();
                        var mm1 = newDate.getMonth() + 1; //January is 0!
                        var yyyy1 = newDate.getFullYear();
                        res.returnDate = dd1 + '/' + mm1 + '/' + yyyy1;
                        val = (
                              <div class="alert notify alert-success ml-1 mt-1" role="alert">
                            
                                <strong>Success! &nbsp;
                                </strong>
                                &nbsp;The Book was successfully renewed for you. &nbsp;
                                <strong>
                                    &nbsp;Happy Reading!!</strong>
                            </div>
                        )
                    } else {
                        val = (
                            <div class="alert notify alert-warning ml-1 mt-1" role="alert">
                                <strong>Sorry!&nbsp;
                                </strong>
                                &nbsp;You cannot renew the book once more. &nbsp;
                                <strong>
                                    &nbsp; Happy Reading!!</strong>
                            </div>
                        )
                    }
                    this.setState({ msg: val })
                }
            })
    }


    wishlist = () => {
        var items=new Object();
        items.isbn=book.isbn;
        items.title=book.title;
        items.author=book.author;
        items.category=book.category;
        items.publisher=book.publisher;
        items.rating=book.rating;
        items.url=book.url;
        items.description="";
        console.log(items);
        addWishlist(items);
        w = (
            <button
                className="btn btn-primary mt-3"
                onClick={this.removeWishlist}
                style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                    //eslint-disable-next-line
                    width: "4vw", color: "rgb(205,133,63)"
                }}>
                <div className="fa fa-heart fa-lg"></div>
            </button>
        )
        let val = (
            <div class="alert notify alert-success ml-1 mt-1" role="alert">
                <strong>Success!&nbsp;
                </strong>
                &nbsp;The Book was successfully added to the wishlist.&nbsp;
                <strong>
                    &nbsp;Happy Reading!!</strong>
            </div>
        )
        this.setState({ wish: w, msg: val })
    }
    
    request = () => {
            if (storeBbooks.getState().bbooks.length < 4) {
                //eslint-disable-next-line   
                let bookAdded=new Object();
                bookAdded.isbn=book.isbn;
                bookAdded.title=book.title;
                bookAdded.author=book.author;
                bookAdded.publisher=book.publisher;
                bookAdded.url=book.url;
                bookAdded.rating=book.rating;
                bookAdded.borrowedDate=borrowDate;
                bookAdded.returnDate=returnDate;
                bookAdded.isRenewed="false";            
                requestBook(bookAdded);
                this.props.alert.show('Oh look, an alert!')
                a = b = (
                    <div>
                        <button
                            className="btn btn-primary mt-3"
                            onClick={this.removeRequest}
                            style={{
                                backgroundColor: 'white',
                                borderColor: "rgb(205,133,63)",
                                color: "rgb(205,133,63)"
                            }}>
                            <div className="fa fa-check"></div>
                            <b>Return</b>
                        </button>
                        &nbsp;
                        <button
                            className="btn btn-primary mt-3"
                            // onClick={this.renew}
                            style={{
                                backgroundColor: 'white',
                                borderColor: "rgb(205,133,63)",
                                color: "rgb(205,133,63)"
                            }}>
                            <div className="fa fa-refresh"></div>
                            <b>Renew</b>
                        </button>
                    </div>
                )
                val = (
                    <div class="alert notify alert-success  ml-1 mt-1">
                        <strong>Success!&nbsp;
                        </strong>
                        &nbsp;The Requested Book has been allotted to you. Please Collect if from the
                        Library.&nbsp;
                        <strong>
                            &nbsp;Happy Reading!!</strong>
                    </div>
                )
                 this.setState({ req: b, wish: w, msg: val })
            } else {
                val = (
                    <div class="alert notify alert-danger alert-dismissible ml-1 mt-1">
                        <strong>Oops!&nbsp;
                        </strong>
                        &nbsp;Looks like you cannot borrow more books. Please return a book to borrow
                        more.&nbsp;
                        <strong>
                            &nbsp;Happy Reading!!</strong>
                    </div>
                )
                this.setState({ msg: val })
            }
    }
    render() {

        // bbooks=storeBbooks.getState().bbooks;
        book = this.props.data;
        return (
            <div style={{
                backgroundColor: "#FFF8DC"
            }}>
                {this.state.msg}
                <button
        onClick={() => {
          this.props.alert.show('Oh look, an alert!')
        }}
      >
        Show Alert
      </button>
                {/*<div
                    className="container"
                    style={{
                        width: "100%"
                    }}>
                    <div className="row">
                        <div
                            className="col-md-7 card my-2"
                            style={{
                                maxHeight: "684px",
                                background: "#614126",
                                width: "75%"
                            }}>
                            <div
                                className="row"
                                style={{
                                    height: "100vh"
                                }}>
                                <div
                                    className="left-card col-md-4"
                                    style={{
                                        color: "white"
                                    }}>
                                    <br />
                                    <h5>
                                        <br />
                                        <i>ISBN</i><br /><br /> {book.isbn}
                                        <br /><br />
                                        <hr />

                                        <br />
                                        <i>Author</i><br /><br /> {book.details.author}
                                        <br /><br />
                                        <hr />

                                        <br />
                                        <i>Published By</i><br /><br /> {book.details.publisher}
                                        <br /><br />
                                        <hr />

                                        <br />
                                        <i>Category</i><br /><br /> {book.details.category}
                                        <br /><br />
                                        <hr />

                                    </h5>
                                </div>
                                <div
                                    className="right-card col-md-8"
                                    style={{
                                        color: "#614126"
                                    }}>
                                    <br />
                                    <i
                                        className="fa fa-times fa-2x"
                                        style={{
                                            float: "right"
                                        }}
                                        onClick={this.goBack}></i>
                                    <img
                                        alt=""
                                        src={book.details.url}
                                        className="my-1"
                                        style={{
                                            height: "50vh",
                                            width: "60%"
                                        }} />
                                    <div className="row offset-md-2">
                                        {this.state.wish}
                                        {this.state.req}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>*/}

                <div className="contained">

		<div class="carders" > 
                <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white", height:"50px" , fontSize : "15px"}}  >
        <h5 >{book.title} <span id="openHome" style={{float:'right',cursor:'pointer',paddingLeft:'85px'}} onClick={()=>{document.getElementById(window.setClickProps).click();}}>x</span></h5>
        </ol>
			<div class="container-fluid" style={{padding:"3em"}}>
				<div class="wrapper row">
					<div class="preview col-md-6">
						  <div class="tab-pane active" id="pic-1"><img src={book.url} height="500px" width="400px"/></div>
					</div>
					<div class="details col-md-6">
						<h3 class="product-title">{book.title}</h3>
						<div class="rating">

                            {/*{
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {

                            if (res.rating >= d) 
                                return <span
                                key={`category${res.isbn}`}
                                    className="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'
                                }}></span>
                        })}*/}

							<div class="stars">
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star checked"></span>
								<span class="fa fa-star"></span>
								<span class="fa fa-star"></span>
							</div>
							<span class="review-no">41 reviews</span>
						</div>
						<p class="product-description"><b>About the book :</b> High in demand and very informative</p>
						{/*<h4 class="price">Category: <span>{book.details.category}</span></h4>*/}
						<p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						

<ul class="list-group">
  <li class="list-group-item"><b>ISBN :</b> {book.isbn}</li>
  <li class="list-group-item"><b>Author :</b> {book.author}</li>
  <li class="list-group-item"><b>Publisher :</b> {book.publisher}</li>
  <li class="list-group-item"><b>Category :</b> {book.category}</li>
  <li class="list-group-item"><b>Ratings :</b> {book.rating}</li>
</ul>
						 <div className="row">
                             <div className="col-md-3" />
                             <div className="col-md-3" >
                             
                                        {this.state.wish}
                                        </div>
                             <div className="col-md-3" >
                                        
                                        {this.state.req}
                                        </div>
                             <div className="col-md-3" />
                                        
                                    </div>
					</div>
				</div>
			</div>
		</div>
	</div>
    
            </div>
        )
    }

}
export default withAlert(Details);
// <img src={book.details.url} style={{height:"100vh", width:"50vw"}}/>