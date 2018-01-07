import React, {Component} from 'react';
import axios from 'axios';
// import book from '../search-component/SearchResults'
let users,book;
class Details extends Component {
    goBack() {
        window
            .history
            .go(-1)
    }
    request() {
        if (window.bbooks.length < 4) {
            window.bbooks.push(book)
            console.log(window.bbooks);

            alert("The Requested Book has been allotted to you..Please Collect It from the Library");
        } else {
            alert("Oops..Looks like You cannot borrow more books. Please return a book to borrow more");
        }
    }
    render() {
        book = this.props.data;
        return (
            <div className="card my-3 mx-5 container-fluid">
                <div className="row">
                    <div className="col-md-4 my-5">
                        <img src={book.details.url} height="400vh"/>
                    </div>
                    <div className="col-md-7 mt-5">
                        <h3>
                            <br/>
                            <table
                                className="table table-responsive"
                                style={{
                                textTransform: "capitalize"
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
                                            else 
                                                return <span
                                                    class="fa fa-star mt-1"
                                                    style={{
                                                    color: 'black',
                                                    fontSize: '30px'
                                                }}></span>
                                        })}
                                    </td>
                                </tr>
                                <td>
                                    <button className="btn btn-primary mt-3" onClick={this.request}>
                                        <b>Request Book</b>
                                    </button>
                                </td>
                                <tr></tr>
                            </table>
                        </h3>
                    </div>
                    <div
                        className="col"
                        style={{
                        fontSize: '60px'
                    }}
                        onClick={this.goBack}>X

                    </div>
                </div>
                <div
                    className="container-fluid"
                    style={{
                    textAlign: 'justify',
                    fontSize: "20px"
                }}>
                    If you want to achieve JavaScript′s full potential, it is critical to understand
                    its nature, history, and limitations. To that end, this updated version of the
                    bestseller by veteran author and JavaScript guru Nicholas C. Zakas covers
                    JavaScript from its very beginning to the present–day incarnations including the
                    DOM, Ajax, and HTML5. Zakas shows you how to extend this powerful language to
                    meet specific needs and create dynamic user interfaces for the web that blur the
                    line between desktop and internet. By the end of the book, you′ll have a strong
                    understanding of the significant advances in web development as they relate to
                    JavaScript so that you can apply them to your next website.
                </div>
            </div>
        )
    }

}
export default Details;