import React, {Component} from 'react';
// import book from '../search-component/SearchResults'
let users,
    book,
    w = null,
    b = null;
class Details extends Component {
    constructor(props) {
        super(props);
        b = (
            <button className="btn btn-primary mt-3" onClick={this.request}>
                <div className="fa fa-plus-circle"></div>
                <b>Request Book</b>
            </button>
        )
        w = (
            <button className="btn btn-primary mt-3" onClick={this.wishlist}>
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
                        <button className="btn btn-primary mt-3">
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
                <button className="btn btn-primary mt-3">
                    <div className="fa fa-heart"></div>
                    <b>Added</b>
                </button>
            )
            this.state={
                req:b,
                wish:w
            }
        }


        this.request = this.request.bind(this);

        this.wishlist = this.wishlist.bind(this);
    }

    goBack() {
        window.history.go(-1)
    }

    wishlist = () => {

        w = (
            <button className="btn btn-primary mt-3">
                <div className="fa fa-heart"></div>
                <b>Added</b>
            </button>
        )
        let val = (
            <div class="alert alert-success ml-1 mt-1">
                <strong>Success!
                </strong>
                The Book was successfully added to the wishlist.
                <strong>
                    Happy Reading!!</strong>
            </div>
        )

        window.wishlist.push(book);

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
                    <button className="btn btn-primary mt-3">
                        <div className="fa fa-check"></div>
                        <b>Requested</b>
                    </button>
                )
                let val = (
                    <div class="alert alert-success ml-1 mt-1">
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
                    <div class="alert alert-danger ml-1 mt-1">
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
                        className="offset-11"
                        style={{
                        fontSize: '40px'
                    }}
                        onClick={this.goBack}>X</div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="mb-4 col-sm-4 col-md-4 col-xs-4 col-lg-4">
                                <div className="card">
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
                                    <i> {book.details.author}</i><br/>
                                    Published By
                                    <i> {book.details.publisher}</i><br/>
                                    <hr/>
                                    <table>
                                        <tr className="row">
                                            <td className="col-sm-5 col-xs-5 col-md-5 col-lg-5">ISBN</td>
                                            <td className="col-sm-2 col-xs-2 col-md-2 col-lg-2">   :
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
                                            <td colspan="3" className="col-sm-10 col-xs-10 col-md-10 col-lg-10">
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
            </div>
        )
    }

}
export default Details;