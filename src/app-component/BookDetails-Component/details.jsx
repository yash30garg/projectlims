import React, {Component} from 'react';
import './details.css';
import '../search-component/Search.css';
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
                backgroundColor: 'white',
                borderColor:"rgb(205,133,63)",
                color: "rgb(205,133,63)"
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
                backgroundColor: 'white',
                borderColor: 'white',
                width:"4vw",
                // backgroundColor: 'white',
                color: "rgb(205,133,63)"
            }}>
                <div className="fa fa-heart-o fa-lg" onClick={this.wishlist}></div>
                
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
                            backgroundColor: 'white',
                            borderColor:"rgb(205,133,63)",
                            color: "rgb(205,133,63)"
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
                    onClick={this.removeWishlist}
                    style={{
                    backgroundColor: 'white',
                    borderColor: 'white',
                    width:"4vw",
                    // backgroundColor: 'white',
                    color: "rgb(205,133,63)"
                }}>
                    <div className="fa fa-heart fa-lg"></div>
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
                            backgroundColor: 'white',
                            borderColor: 'white',
                            width:"4vw",
                            // backgroundColor: 'white',
                            color: "rgb(205,133,63)"
                        }}>
                            <div className="fa fa-heart fa-lg"></div>
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
        console.log(book);
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
                    backgroundColor: 'white',
                    borderColor: 'white',
                    width:"4vw",
                    // backgroundColor: 'white',
                    color: "rgb(205,133,63)"
                }}
                onClick={this.wishlist}>
                <div className="fa fa-heart-o fa-lg"></div>
            </button>
        )
        this.setState({wish: w, msg: ""})
    }

    removeRequest = () => {
        console.log(book);
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
                backgroundColor: 'white',
                borderColor:"rgb(205,133,63)",
                color: "rgb(205,133,63)"
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
                    backgroundColor: 'white',
                    borderColor: 'white',
                    width:"4vw",
                    // backgroundColor: 'white',
                    color: "rgb(205,133,63)"
                }}>
                <div className="fa fa-heart fa-lg"></div>
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

        console.log(window.wishlist);
        this.setState({wish: w, msg: val})
    }

    request = () => {
        if (!window.bbooks.includes(book)) {
            if (window.bbooks.length < 4) {
                window
                    .bbooks
                    .push(book)
                console.log(window.bbooks);
                let a = b = (
                    <button
                        className="btn btn-primary mt-3"
                        onClick={this.removeRequest}
                        style={{
                        backgroundColor: 'white',
                        borderColor:"rgb(205,133,63)",
                        color: "rgb(205,133,63)"
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
                <div className="container" style={{width:"100%"}}>
                <div className="row">
                <div className="col-md-7 card my-2" style={{background:"#614126",width:"75%"}}>
                <div className="row" style={{height:"100vh"}}>
                <div className="left-card col-md-4" style={{color:"white"}}>
                <br/>
                <h5>
                <br/>
                <i>ISBN</i><br/><br/>
                {book.isbn}
                <br/><br/>
                <hr/>

                <br/>
                <i>Author</i><br/><br/>
                {book.details.author}
                <br/><br/>
                <hr/>

                <br/>
                <i>Published By</i><br/><br/>
                {book.details.publisher}
                <br/><br/>
                <hr/>

                <br/>
                <i>Category</i><br/><br/>
                {book.details.category}
                <br/><br/>
                <hr/>

                </h5>
                </div>
                <div className="right-card col-md-8" style={{color:"#614126"}}>
                <br/>
                <i className="fa fa-times fa-2x" style={{float:"right"}} onClick={this.goBack}></i>
                <img src={book.details.url} className="my-1" style={{height:"50vh", width:"60%"}}/>
                <div className="row offset-md-3">
                {this.state.wish}
                {this.state.req}
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