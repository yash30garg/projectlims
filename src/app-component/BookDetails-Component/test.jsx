import React, {Component} from 'react';
// import book from '../search-component/SearchResults'
let users,
    book,
    b = null;
class Details extends Component {
    constructor(props) {
        super(props);
        b = (
            <button className="btn btn-primary mt-3" onClick={this.request}>
                <b>Request Book</b>
            </button>
        )
        this.state = {
            b: b,
            msg: ""
        };
        const a = window
            .bbooks
            .map(res => {
                if (res.isbn === this.props.data.isbn) {
                    this.state = {
                        b: "Requested"
                    }
                }
            })
        this.request = this
            .request
            .bind(this);
    }

    goBack() {
        window
            .history
            .go(-1)
    }

    request = () => {
        if (!window.bbooks.includes(book)) {
            if (window.bbooks.length < 4) {
                window
                    .bbooks
                    .push(book)
                console.log(window.bbooks);
                let a = "Requested"
                let val = (
                    <div class="alert alert-success ml-1 mt-1" role="alert">
                        <strong>Success! 
                        </strong>
                         The Requested Book has been allotted to you. Please Collect if from the Library. 
                        <strong>
                            Happy Reading!!</strong>
                    </div>
                )
                this.setState({b: a, msg: val})
                // alert("The Requested Book has been allotted to you..Please Collect It from
                // the Library");
            } else {
                let val = (
                    <div class="alert alert-danger ml-1 mt-1">
                        <strong>Oops! 
                        </strong>
                         Looks like you cannot borrow more books. Please return a book to borrow more. <strong>
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
            <div className="card m-5 container-fluid">
                <div
                    className="offset-11"
                    style={{
                    fontSize: '40px'
                }}
                onClick={this.goBack}>X</div>
                <div className="container-fluid">
                <div className="row">
                <div className="col-sm-3 "><img src={book.details.url} height="400vh"/></div>
                <div className="col-sm-2"></div>
                <div className="col-sm-6">
                    <h3> 
                        <table
                            className="table table-responsive"
                            style={{
                            textTransform: "capitalize",
                        }}>
                            <tr>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    <i>Title</i>
                                </td>
                                <td>:</td>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    {book.details.title}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    <i>Author</i>
                                </td>
                                <td>:</td>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    {book.details.author}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    <i>ISBN</i>
                                </td>
                                <td>:</td>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    {book.isbn}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    <i>Category</i>
                                </td>
                                <td>:</td>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    {book.details.category}
                                </td>
                            </tr>
                            <tr>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    <i>Publisher</i>
                                </td>
                                <td>:</td>
                                <td
                                    style={{
                                    textAlign: "left"
                                }}>
                                    {book.details.publisher}
                                </td>
                            </tr>

                            <tr
                                styele={{
                                textAlign: "center"
                            }}>
                                <td colSpan="2">
                                    {[1, 2, 3, 4, 5].map(d => {
                                        if (book.details.rating >= d) 
                                            return <span
                                                class="fa fa-star mt-1"
                                                style={{
                                                color: '#FF8C00',
                                                fontSize: '30px'
                                            }}></span>
                                            // else
                                        //     return <span         class="fa fa-star mt-1"         style={{ color:
                                        // 'black',         fontSize: '30px'     }}></span>
                                    })}
                                </td>
                            </tr>
                            <td>
                                {this.state.b}
                            </td>
                            <tr></tr>
                        </table>
                    </h3>
                </div>
                </div></div>
            </div>
            </div>
        )
    }

}
export default Details;