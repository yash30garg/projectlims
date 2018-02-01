import React, {Component} from 'react';
import './details.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {storeBbooks} from '../../state/action/bbooksAction'
import {storeWbooks} from '../../state/action/wbooksAction'
import '../search-component/Search.css';
import $ from 'jquery';
import requestBook from '.././mongo/requestBook'
import returnBook from '.././mongo/returnBook'
import {addWishlist} from '.././mongo/addWishlist'
import {removeWishlist} from '.././mongo/removeWishlist'
import {getDates} from '../dates'
import {borrowDate, returnDate} from '../dates'
var req = require('request');
let response;
let book,
    w = null,
    b = null,
    a = null;

class Details extends Component {
    constructor(props) {
        super(props);
        getDates();

        //         var date1 = new Date(borrowDate); var date2 = new Date(returnDate);
        // var timeDiff = Math.abs(date2.getTime() - date1.getTime()); var diffDays =
        // Math.ceil(timeDiff / (1000 * 3600 * 24)); alert(diffDays);
        let reqVal = true,
            renewVal= false,
            wishVal = true;
        let today = borrowDate;
        let days = today.split("/");
        today = days[1] + "/" + days[0] + "/" + days[2];

        if (this.props.bbooks !== null && this.props.bbooks.length !== 0) {
            this
                .props
                .bbooks
                .map(res => {
                    if (res.isbn === this.props.data.isbn) {
                        reqVal = false;
                        if (res.isRenewed === "false") {
                            let retDate = res.returnDate;
                            days = retDate.split("/");
                            retDate = days[1] + "/" + days[0] + "/" + days[2];
                            let date1= new Date(today);
                            let date2= new Date(retDate)
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime()); 
                            var diffDays =Math.ceil(timeDiff / (1000 * 3600 * 24)); 
                            if(diffDays<=2){
                                renewVal=true;
                            }
                        }
                    }
                })
        }
        if (this.props.wbooks !== null && this.props.wbooks.length !== 0) {
            this
                .props
                .wbooks
                .map(res => {
                    if (res.isbn === this.props.data.isbn) {
                        wishVal = false;
                    }
                })
        }
        this.state = {
            req: reqVal,
            wish: wishVal,
            renew: renewVal
        };
    }
    request = () => {
        if (this.props.bbooks.length < 4) {
            let bookAdded = new Object();
            bookAdded.isbn = this.props.data.isbn;
            bookAdded.title = this.props.data.title;
            bookAdded.author = this.props.data.author;
            bookAdded.publisher = this.props.data.publisher;
            bookAdded.url = this.props.data.url;
            bookAdded.rating = this.props.data.rating;
            bookAdded.borrowedDate = borrowDate;
            bookAdded.returnDate = returnDate;
            bookAdded.isRenewed = "false";
            (async function () {
                var data = await requestBook(bookAdded);
                console.log(data.data);
                this
                    .props
                    .storeBbooks(data.data)
            }).bind(this)()
            this.setState({req: false})
        }
    }
    changeDate = () => {}
    return = () => {
        (async function () {
            var data = await returnBook(this.props.data.isbn);
            console.log(data.data);
            this
                .props
                .storeBbooks(data.data)
        }).bind(this)()
        this.setState({req: true})
    }
    addWish = () => {
        var items = new Object();
        items.isbn = this.props.data.isbn;
        items.title = this.props.data.title;
        items.author = this.props.data.author;
        items.category = this.props.data.category;
        items.publisher = this.props.data.publisher;
        items.rating = this.props.data.rating;
        items.url = this.props.data.url;
        items.description = "";
        (async function () {
            var data = await addWishlist(items);
            console.log("data")
            console.log(data);
            this
                .props
                .storeWbooks(data)
        }).bind(this)()
        this.setState({wish: false});
    }
    removeWish = () => {
        (async function () {
            var data = await removeWishlist(this.props.data.isbn);
            console.log("data")
            console.log(data);
            this
                .props
                .storeWbooks(data)
        }).bind(this)()
        this.setState({wish: true});
    }
    /*renew = () => {
            // storeBbooks.getState().bbooks
            this.props.bbooks
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
    }*/
    render() {
        book = this.props.data;
        return (
            <div style={{
                backgroundColor: "#FFF8DC"
            }}>
                <div className="contained">
                    <div class="carders">
                        <ol
                            className="breadcrumb"
                            style={{
                            backgroundColor: "#614126",
                            color: "white",
                            height: "50px",
                            fontSize: "15px"
                        }}>
                            <h5 >{book.title}
                                <span
                                    id="openHome"
                                    style={{
                                    float: 'right',
                                    cursor: 'pointer',
                                    paddingLeft: '85px'
                                }}
                                    onClick={() => {
                                    document
                                        .getElementById(window.setClickProps)
                                        .click();
                                }}>x</span>
                            </h5>
                        </ol>
                        <div
                            class="container-fluid"
                            style={{
                            padding: "3em"
                        }}>
                            <div class="wrapper row">
                                <div class="preview col-md-6">
                                    <div
                                        style={{
                                        width: "100%"
                                    }}>
                                        <img
                                            src={book.url}
                                            className="card-img-top mx-auto"
                                            style={{
                                            width: "70%",
                                            height: "25rem"
                                        }}/>
                                        <center>
                                            <div
                                                className="mt-1"
                                                style={{
                                                width: "70%"
                                            }}>
                                                {this.state.req
                                                    ? <button
                                                            className="btn details-btn"
                                                            style={{
                                                            borderColor: "rgb(205,133,63)"
                                                        }}
                                                            onClick={this.request}>
                                                            <div className="fa fa-plus-circle"></div>
                                                            <b>Request</b>
                                                        </button>
                                                    : <button
                                                        className="btn details-btn"
                                                        style={{
                                                        borderColor: "rgb(205,133,63)"
                                                    }}
                                                        onClick={this.return}>
                                                        <div className="fa fa-undo"></div>
                                                        <b>Return</b>
                                                    </button>}
                                                {this.state.wish
                                                    ? <button
                                                            className="btn details-btn"
                                                            style={{
                                                            borderColor: "rgb(205,133,63)"
                                                        }}
                                                            onClick={this.addWish}>
                                                            <div className="fa fa-heart-o fa-lg"></div>
                                                            <b>Add</b>
                                                        </button>
                                                    : <button
                                                        className="btn details-btn"
                                                        style={{
                                                        borderColor: "rgb(205,133,63)"
                                                    }}
                                                        onClick={this.removeWish}>
                                                        <div className="fa fa-heart fa-lg"></div>
                                                        <b>Remove</b>
                                                    </button>}
                                            </div>
                                            <div
                                                style={{
                                                width: "70%"
                                            }}>
                                                {this.state.renew
                                                    ? <button
                                                            className="btn details-btn mt-1"
                                                            style={{
                                                            borderColor: "rgb(205,133,63)",
                                                            width: "100%"
                                                        }}>
                                                            <div className="fa fa-refresh"></div>
                                                            <b>Renew</b>
                                                        </button>
                                                    : ""}
                                            </div>
                                        </center>
                                    </div>
                                </div>
                                <div class="details col-md-6">
                                    <h3 class="product-title">{book.title}</h3>
                                    <div class="rating">
                                        <div className="stars mt-3 ml-3">
                                            {//eslint-disable-next-line
                                            [1, 2, 3, 4, 5].map(d => {

                                                if (book.rating >= d) 
                                                    return <span
                                                        key={`category${book.isbn}`}
                                                        className="fa fa-star"
                                                        style={{
                                                        color: '#ffd700',
                                                        fontSize: '22px'
                                                    }}></span>
                                            })}
                                        </div>
                                    </div><br/>
                                    <ul class="list-group">
                                        <li class="list-group-item">
                                            <b>ISBN :</b>
                                            {book.isbn}</li>
                                        <li class="list-group-item">
                                            <b>Author :</b>
                                            {book.author}</li>
                                        <li class="list-group-item">
                                            <b>Publisher :</b>
                                            {book.publisher}</li>
                                        <li class="list-group-item">
                                            <b>Category :</b>
                                            {book.category}</li>
                                        <li class="list-group-item">
                                            <b>Ratings :</b>
                                            {book.rating}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {bbooks: state.bbooks, books: state.books, wbooks: state.wbooks};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        storeBbooks: storeBbooks,
        storeWbooks: storeWbooks
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Details);