import React, {Component} from 'react';
import './details.css';
import $ from 'jquery';
// import book from '../search-component/SearchResults'
let users,
    book,
    w = null,
    b = null;
class Details extends Component {
    constructor(props) {
        super(props);
        b = (
            <button
                className="btn btn-primary mt-3"
                style={{
                backgroundColor: 'rgb(205,133,63)',
                color: "white"
            }}
                onClick={this.request}>
                <div className="fa fa-plus-circle"></div>
                <b>Request Book</b>
            </button>
        )
        w = (
            <button
                className="btn btn-primary mt-3"
                style={{
                backgroundColor: 'rgb(205,133,63)',
                color: "white"
            }}
                onClick={this.wishlist}>
                <div className="fa fa-heart-o"></div>
                <b>WishList</b>
            </button>
        )
        this.state = {
            req: b,
            wish: w,
            msg: ""
        };
        const a = window
            .bbooks
            .map(res => {
                if (res.isbn === this.props.data.isbn) {
                    b = (
                        <button
                            className="btn btn-primary mt-3"
                            onClick={this.removeRequest}
                            style={{
                            backgroundColor: 'rgb(205,133,63)',
                            color: "white"
                        }}>
                            <div className="fa fa-check"></div>
                            <b>Requested</b>
                        </button>
                    )
                    this.state = {
                        req: b,
                        wish: w
                    }
                }
            })

        if (window.wishlist.includes(book)) {
            w = (
                <button
                    className="btn btn-primary mt-3"
                    style={{
                    backgroundColor: 'rgb(205,133,63)',
                    color: "white"
                }}>
                    <div className="fa fa-heart"></div>
                    <b>Added</b>
                </button>
            )
            this.state = {
                req: b,
                wish: w
            }
        }

        this.request = this
            .request
            .bind(this);

        this.wishlist = this
            .wishlist
            .bind(this);

        const test = window
            .wishlist
            .map(res => {
                if (res.isbn === this.props.data.isbn) {
                    w = (
                        <button
                            onClick={this.removeWishlist}
                            className="btn btn-primary mt-3"
                            style={{
                            backgroundColor: 'rgb(205,133,63)',
                            color: "white"
                        }}>
                            <div className="fa fa-heart"></div>
                            <b>Added</b>
                        </button>
                    )
                    this.state = {
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

    // componentDidMount() {     setTimeout(function () { //Start the timer
    // this.setState({msg: ""}) //After 1 second, set render to true
    // }.bind(this), 3000)     alert("compo") }
    componentDidUpdate() {
        window.setTimeout(function () {
            this.setState({msg: ""})
        }.bind(this), 25000)
//         window.setTimeout(function() {
//     $(".alert").fadeTo(500, 0).slideUp(500, function(){
//         $(this).close(); 
//     });
// }, 4000);
    }

    goBack() {
        window
            .history
            .go(-1)
    }

    removeWishlist = () => {
        //console.log((book);
        let index = -1,
            i = 0;
        const ind = window
            .wishlist
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
                backgroundColor: 'rgb(205,133,63)',
                color: "white"
            }}
                onClick={this.wishlist}>
                <div className="fa fa-heart-o"></div>
                <b>WishList</b>
            </button>
        )
        this.setState({wish: w, msg: ""})
    }

    removeRequest = () => {
        //console.log((book);
        let index = -1,
            i = 0;
        const ind = window
            .bbooks
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
                backgroundColor: 'rgb(205,133,63)',
                color: "white"
            }}
                onClick={this.request}>
                <div className="fa fa-plus-circle"></div>
                <b>Request Book</b>
            </button>
        )
        this.setState({req: b, msg: ""})
    }

    wishlist = () => {

        w = (
            <button
                className="btn btn-primary mt-3"
                onClick={this.removeWishlist}
                style={{
                backgroundColor: 'rgb(205,133,63)',
                color: "white"
            }}>
                <div className="fa fa-heart"></div>
                <b>Added</b>
            </button>
        )
        let val = (
            <div class="alert notify alert-success ml-1 mt-1" role="alert">
                <strong>Success!
                </strong>
                The Book was successfully added to the wishlist.
                <strong>
                    Happy Reading!!</strong>
            </div>
        )

        window
            .wishlist
            .push(book);

        //console.log((window.wishlist);
        this.setState({wish: w, msg: val})
    }

    request = () => {
        if (!window.bbooks.includes(book)) {
            if (window.bbooks.length < 4) {
                window
                    .bbooks
                    .push(book)
                //console.log((window.bbooks);
                let a = b = (
                    <button
                        className="btn btn-primary mt-3"
                        onClick={this.removeRequest}
                        style={{
                        backgroundColor: 'rgb(205,133,63)',
                        color: "white"
                    }}>
                        <div className="fa fa-check"></div>
                        <b>Requested</b>
                    </button>
                )
                let val = (
                    <div class="alert notify alert-success  ml-1 mt-1">
                        <strong>Success!
                        </strong>
                        The Requested Book has been allotted to you. Please Collect if from the Library.
                        <strong>
                            Happy Reading!!</strong>
                    </div>
                )
                this.setState({req: a, wish: w, msg: val})
                // alert("The Requested Book has been allotted to you..Please Collect It from
                // the Library");
            } else {
                let val = (
                    <div class="alert notify alert-danger alert-dismissible ml-1 mt-1">
                        <strong>Oops!
                        </strong>
                        Looks like you cannot borrow more books. Please return a book to borrow more.
                        <strong>
                            Happy Reading!!</strong>
                    </div>
                )
                this.setState({msg: val})
            }
        }
    }
    render() {
        book = this.props.data;
        return (
            <div>

                {this.state.msg}
                <div className="container-fluid">
                    <div
                        className="close-cap offset-11"
                        style={{
                        fontSize: '40px'
                    }}
                        onClick={this.goBack}>X</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mb-4 col-sm-4 col-md-4 col-xs-4 col-lg-4">
                                <div className="card bookContainer">
                                    <center>
                                        <img className="rounded mt-4" src={book.details.url} height="80%" width="75%"/>
                                    </center>
                                </div>
                                {this.state.req}
                                &nbsp; {this.state.wish}
                            </div>

                            <div
                                className="col-sm-6 col-md-6 col-xs-6 col-lg-6 ml-3"
                                style={{
                                textTransform: "capitalize",
                                textAlign: "left"
                            }}>
                                <h3>
                                    <u>
                                        {book.details.title}
                                    </u>
                                </h3>
                                <h5>
                                    By
                                    <i>
                                        {book.details.author}</i><br/>
                                    Published By
                                    <i>
                                        {book.details.publisher}</i><br/>
                                    <hr/>
                                    <table>
                                        <tr className="row">
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">ISBN</td>
                                            <td className="col-sm-2 col-xs-2 col-md-2 col-lg-2">
                                                :
                                            </td>
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">
                                                <i>{book.isbn}</i>
                                            </td>
                                        </tr>
                                        <tr className="row">
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">Category</td>
                                            <td className="col-sm-2 col-xs-2 col-md-2 col-lg-2">:
                                            </td>
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">
                                                <i>{book.details.category}</i>
                                            </td>
                                        </tr>
                                        <tr className="row">
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">Category</td>
                                            <td className="col-sm-2 col-xs-2 col-md-2 col-lg-2">:
                                            </td>
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">
                                                <i>{book.details.category}</i>
                                            </td>
                                        </tr>
                                        <tr className="row mt-2">
                                            <td colspan="4" className="col-sm-10 col-xs-10 col-md-10 col-lg-10">
                                                {[1, 2, 3, 4, 5].map(d => {
                                                    if (book.details.rating >= d) 
                                                        return <span
                                                            class="fa fa-star mt-1"
                                                            style={{
                                                            color: '#FF8C00',
                                                            fontSize: '20px'
                                                        }}></span>
                                                })}
                                            </td>
                                        </tr>
                                    </table>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="wrapper">
                    <div class="gradient">
                        <div class="left">
                            <h5>ISBN</h5>
                            <h4>{book.isbn}</h4>

                            <h5>Book</h5>
                            <h4>{book.details.title}</h4>

                            <h5>Published By</h5>
                            <h4>{book.details.publisher}</h4>

                            <h5>Author</h5>
                            <h4>{book.details.author}</h4>

                            <h5>Category
                            </h5>
                            <h4>{book.details.category}</h4>
                        </div>
                        <div class="right">
                            <div class="mast">
                                <img src="book.details.url" alt="Sellr" class="logo pull-left" height="80%" width="75%"/>
                                {/*<span class="date pull-right">Dec 23, 2015 &mdash; 13:45:05 GMT</span>*/}
                                <div class="clearfix"></div>
                            </div>
                            <div class="invoice">
                                <h2>{book.details.title}</h2>
                                <h3 class="price pull-right">Ratings</h3>
                                <div class="product-details">
                                    <a href="#" class="">View Product Page</a>
                                    &mdash;
                                    <a href="#" class="">Download</a>
                                </div>

                            </div>

                            <div class="footer">
                                <p class="tonote">Things to note</p>
                                <p>If you are unsatisfied with your purchase or the product is not as described,
                                    please contact the seller of your product, Sellr does not represent the seller.</p>
                                <p>Please make sure to download your products
                                    <i>immediately</i>, as items can get removed from time to time. Sellr can't
                                    recover removed products and files.</p>
                                <a href="https://www.sellr.co/help">www.sellr.co/help</a>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                </div>
            </div>
        )
    }

}
export default Details;