import React, { Component } from 'react';
import './details.css';
import '../search-component/Search.css';
// import $ from 'jquery';
// import book from '../search-component/SearchResults'
// let users;
let book,
    w = null,
    b = null,
    borrowDate,
    returnDate;
class Details extends Component {
    constructor(props) {
        super(props);
        var today = new Date();
        var newDate = new Date(today.getTime() + (10 * 24 * 60 * 60 * 1000));
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var dd1 = newDate.getDate();
        var mm1 = newDate.getMonth() + 1; //January is 0!
        var yyyy1 = newDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (dd1 < 10) {
            dd = '0' + dd;
        }
        if (mm1 < 10) {
            mm = '0' + mm;
        }
        borrowDate = dd + '/' + mm + '/' + yyyy;
        returnDate = dd1 + '/' + mm1 + '/' + yyyy1;
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
                    borderColor: 'white',
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
        window
            .bbooks
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
                                onClick={this.renew}
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
        this.wishlist = this
            .wishlist
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
                                borderColor: 'white',
                                //eslint-disable-next-line                            
                                width: "4vw",  color: "rgb(205,133,63)"
                            }}>
                            <div className="fa fa-heart fa-lg"></div>
                        </button>
                    )
                    this.setState({
                        req: b,
                        wish: w
                    })
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

    // componentDidMount() {     setTimeout(function () { //Start the timer
    // this.setState({msg: ""}) //After 1 second, set render to true }.bind(this),
    // 3000)     alert("compo") }
    componentDidUpdate() {
        window
            .setTimeout(function () {
                this.setState({ msg: "" })
            }.bind(this), 25000)
        //         window.setTimeout(function() {     $(".alert").fadeTo(500,
        // 0).slideUp(500, function(){         $(this).close();     }); }, 4000);
    }

    goBack() {
        window
            .history
            .go(-1)
    }
    
    removeWishlist = () => {
        console.log(book);
        let index = -1,
            i = 0;
        window
            .wishlist
            //eslint-disable-next-line            
            .map((res) => {
                if (res.isbn === book.isbn) {
                    index = i;
                }
                i++;
            })
        if (index !== -1) {
            window
                .wishlist
                .splice(index, 1);
        }
        w = (
            <button
                className="btn btn-primary mt-3"
                style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
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
        console.log(book);
        let index = -1,
            i = 0;
        window
            .bbooks
            //eslint-disable-next-line            
            .map((res) => {
                if (res.isbn === book.isbn) {
                    index = i;
                }
                i++;
            })
        if (index !== -1) {
            window
                .bbooks
                .splice(index, 1);
        }
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
        let val = (
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
        window
            .bbooks
            //eslint-disable-next-line            
            .map((res) => {
                if (res.isbn === book.isbn) {
                    let val;
                    if (res.details.isRenewed === false) {
                        res.details.isRenewed = true;
                        var dates = res
                            .details
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
                        res.details.returnDate = dd1 + '/' + mm1 + '/' + yyyy1;
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

        window
            .wishlist
            .push(book);

        console.log(window.wishlist);
        this.setState({ wish: w, msg: val })
    }

    request = () => {
        if (!window.bbooks.includes(book)) {
            if (window.bbooks.length < 4) {
                //eslint-disable-next-line                
                let newBook = new Object();
                //eslint-disable-next-line                
                newBook.details = new Object();
                newBook.details.title = book.details.title;
                newBook.details.borrowedDate = borrowDate;
                newBook.details.returnDate = returnDate;
                newBook.details.url = book.details.url;
                newBook.details.isRenewed = false;
                newBook.isbn = book.isbn;
                //console.log(newBook);
                window
                    .bbooks
                    .push(newBook)
                console.log(window.bbooks);
                let a = b = (
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
                            onClick={this.renew}
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
                let val = (
                    <div class="alert notify alert-success  ml-1 mt-1">
                        <strong>Success!&nbsp;
                        </strong>
                        &nbsp;The Requested Book has been allotted to you. Please Collect if from the
                        Library.&nbsp;
                        <strong>
                            &nbsp;Happy Reading!!</strong>
                    </div>
                )
                this.setState({ req: a, wish: w, msg: val })
                // alert("The Requested Book has been allotted to you..Please Collect It from
                // the Library");
            } else {
                let val = (
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
    }
    render() {
        book = this.props.data;
        return (
            <div>
                {this.state.msg}
                <div
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
                </div>
            </div>
        )
    }

}
export default Details;
// <img src={book.details.url} style={{height:"100vh", width:"50vw"}}/>