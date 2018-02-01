import React, {Component} from 'react';
import './details.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {storeBbooks} from '../../state/action/bbooksAction'
import {storeWbooks} from '../../state/action/wbooksAction'
import {storeReviews} from '../../state/action/reviewAction';
import '../search-component/Search.css';
import $ from 'jquery';
import {getReview} from '.././mongo/getReview'
import {css} from 'glamor'
import {ToastContainer, toast} from 'react-toastify';
import Reviews from './reviews';
import requestBook from '.././mongo/requestBook'
import returnBook from '.././mongo/returnBook'
import renewBook from '.././mongo/renew'
import {addWishlist} from '.././mongo/addWishlist'
import {removeWishlist} from '.././mongo/removeWishlist'
import {getDates} from '../dates'
import {borrowDate, returnDate} from '../dates'
var req = require('request');
let response;
let book,
reviewData="",
    thisBook=null,
    w = null,
    b = null,
    a = null;

class Details extends Component {
    constructor(props) {
        super(props);
        getDates();
        let check=0;
        (async function () {
            var values = await getReview(this.props.data.isbn);
            if(values[0].reviews.length===0){
                check=1;
                this
                .props
                .storeBbooks(null)
            }
            else{
                 this
                .props
                .storeBbooks(values[0].reviews)
                check=1;
            }
            if(check===1){
            this.state={
                flag:1
            }
        }
        }).bind(this)()
        
        //         var date1 = new Date(borrowDate); var date2 = new Date(returnDate);
        // var timeDiff = Math.abs(date2.getTime() - date1.getTime()); var diffDays =
        // Math.ceil(timeDiff / (1000 * 3600 * 24)); alert(diffDays);
        let reqVal = true,
            renewVal = false,
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
                        thisBook=res;
                        reqVal = false;
                        if (res.isRenewed === "false") {
                            let retDate = res.returnDate;
                            days = retDate.split("/");
                            retDate = days[1] + "/" + days[0] + "/" + days[2];
                            let date1 = new Date(today);
                            let date2 = new Date(retDate)
                            var timeDiff = Math.abs(date2.getTime() - date1.getTime());
                            var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                            if (diffDays <= 2) {
                                renewVal = true;
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
            flag:0,
            renew: renewVal,
            review:true
        };
    }
    // getReviews=()=>{

    // }
    // componentWillMount(){
    //     this.getReviews
    // }
    request = () => {
        if (navigator.onLine) {
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
            thisBook=bookAdded;
            (async function () {
                var data = await requestBook(bookAdded);
                console.log(data.data);
                this
                    .props
                    .storeBbooks(data.data)
            }).bind(this)()
            this.setState({req: false})
        toast.success("Successfully Requested !!!", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: css({background: "brown"})
                });
            } else {
                toast.warn("Oops! You Cannot borrow more books !!!", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: css({background: "red"})
                });
            }
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }
    return = () => {
        if (navigator.onLine) {
        (async function () {
            var data = await returnBook(this.props.data.isbn);
            console.log(data.data);
            this
                .props
                .storeBbooks(data.data)
        }).bind(this)()
        this.setState({req: true})
         toast.warn("Successfully Returned !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }

    addWish = () => {
         if (navigator.onLine) {
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
        toast.success("Added to WishList !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }

    removeWish = () => {
         if (navigator.onLine) {
        (async function () {
            var data = await removeWishlist(this.props.data.isbn);
            console.log("data")
            console.log(data);
            this
                .props
                .storeWbooks(data)
        }).bind(this)()
        this.setState({wish: true});
        toast.success("Removed from WishList !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }
    renew=()=>{
        if (navigator.onLine) {

        var tested = new Date();
        // var res=this.props.data;
        // console.log(res)
        if(thisBook.isRenewed=="false"){
        var dates = thisBook
                            .returnDate
                            .split("/");
                        tested.setDate(dates[0]);
                        tested.setMonth(dates[1] - 1);
                        tested.setFullYear(dates[2]);
                        var newDate = new Date(tested.getTime() + (10 * 24 * 60 * 60 * 1000));
                        var dd1 = newDate.getDate();
                        var mm1 = newDate.getMonth() + 1; //January is 0!
                        var yyyy1 = newDate.getFullYear();
                        thisBook.returnDate = dd1 + '/' + mm1 + '/' + yyyy1;
                        thisBook.isRenewed=true;
                        (async function () {
            var data = await renewBook(thisBook);
            console.log(data);
            this
                .props
                .storeBbooks(data)
        }).bind(this)()
        toast.success("Renewed !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        }
        else{
            toast.error("You Cannot Renew Once More !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }
    render() {
        book = this.props.data;    
        if(book!==null && book!==undefined)
        return (
            <div className="mt-4" style={{
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
                                    onClick={(e) => {
                                   e.preventDefault();
                                   window.location="/#/"
                                }}>x</span>
                            </h5>
                        </ol>
                        <div
                            class="container-fluid"
                            style={{
                            padding: "3em"
                        }}>
                            <div class="wrapper row">
                                <div className="col-md-6 col-sm-6 col-xs-6 col-lg-6">
                                <img
                                        src={book.url}
                                        className="mx-auto col-md-10 col-sm-10 col-xs-10 col-lg-10"
                                        style={{
                                        height: "400px"
                                    }}/>
                                    <div className="mt-1 col-md-12 col-sm-12 col-xs-12 col-lg-12">
                                    {this.state.req
                                            ? <button
                                                    className="btn details-btn col-md-5 col-sm-5 col-xs-5 col-lg-5"
                                                    style={{
                                                        overflow:"hidden",
                                                    borderColor: "rgb(205,133,63)"
                                                }}
                                                    onClick={this.request}>
                                                    <div className="fa fa-plus-circle"></div>
                                                    <b>Request</b>
                                                </button>
                                            : <button
                                                className="btn details-btn col-md-5 col-sm-5 col-xs-5 col-lg-5"
                                                style={{
                                                    overflow:"hidden",
                                                borderColor: "rgb(205,133,63)"
                                            }}
                                                onClick={this.return}>
                                                <div className="fa fa-undo"></div>
                                                <b>Return</b>
                                            </button>}
                                            {this.state.wish
                                            ? <button
                                                    className="btn details-btn col-md-5 col-sm-5 col-xs-5 col-lg-5"
                                                    style={{
                                                        overflow:"hidden",
                                                    borderColor: "rgb(205,133,63)"
                                                }}
                                                    onClick={this.addWish}>
                                                    <div className="fa fa-heart-o fa-lg"></div>
                                                    <b>Add</b>
                                                </button>
                                            : <button
                                                className="btn details-btn col-md-5 col-sm-5 col-xs-5 col-lg-5"
                                                style={{
                                                    overflow:"hidden",
                                                borderColor: "rgb(205,133,63)"
                                            }}                                                onClick={this.removeWish}>
                                                <div className="fa fa-heart fa-lg"></div>
                                                <b>Remove</b>
                                            </button>}
                                    </div>
                                    <div className="col-md-12 mt-1 col-sm-12 col-xs-12 col-lg-12">
                                    {this.state.renew
                                            ? <button
                                                    className="btn details-btn col-md-10 col-sm-10 col-xs-10 col-lg-10"
                                                    onClick={this.renew}
                                                    style={{
                                                        overflow:"hidden",
                                                    borderColor: "rgb(205,133,63)",
                                                    width: "100%"
                                                }}>
                                                    <div className="fa fa-refresh"></div>
                                                    <b>Renew</b>
                                                </button>
                                            : ""}

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
                    <Reviews data={this.props.data} revData={this.props.reviews}/>    
                    </div>
                </div>
            </div>
        )
        else if(book===null || book === undefined){
            return(
                window.location="/#/"
            )
        }
    }
}
function mapStateToProps(state) {
    return {bbooks: state.bbooks, books: state.books, wbooks: state.wbooks, reviews:state.reviews};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        storeBbooks: storeBbooks,
        storeWbooks: storeWbooks,
        storeReviews:storeReviews
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Details);