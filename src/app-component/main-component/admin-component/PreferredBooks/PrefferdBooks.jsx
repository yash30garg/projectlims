import React, { Component } from 'react';
import axios from 'axios';
// import PrefferedBooks from './PrefferedBooks.css';
// import $ from 'jquery';
var preferredBooks = [];

class PBooks extends Component {

    constructor() {
        super();
        this.state = {
            display: [],
            indexStart: 0,
            indexEnd: 2,
            pb:[]
        }
    }
    clickPrevious = () => {

        if (this.state.indexStart - 2>= 0) {
            this.setState({ indexStart: ((this.state.indexStart) - 2) });
            this.setState({ indexEnd: ((this.state.indexEnd) - 2) });
        }
    }
    // clickNext = () => {
    //     if (this.state.indexEnd <= this.state.posts.length) {
    //         this.setState({ indexStart: ((this.state.indexStart) + 3) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) + 3) });

    //     if (this.state.indexStart - 4 >= 0) {
    //         this.setState({ indexStart: ((this.state.indexStart) - 4) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) - 4) });
    //     }
    // }
    clickNext = () => {
        if (this.state.indexEnd < this.state.pb.length) {
            this.setState({ indexStart: ((this.state.indexStart) + 2) });
            this.setState({ indexEnd: ((this.state.indexEnd) + 2) });

        }
    }





    componentDidMount() {
        axios.get('https://api.myjson.com/bins/b20lr')
            .then(res => {
                this.setState({ display: res.data.booksArray });
                console.log(this.state.display)
                prefBooks();
                console.log(preferredBooks)
            })
        var prefBooks = () => {
            this.state.display.map((result) => {
                if (result.details.rating >= 3) {
                    console.log(result)
                    preferredBooks.push(result)
                }
            })
            this.setState({pb:preferredBooks})
            return console.log(preferredBooks);
        }
        
      
    }


    render() {

        return (

            <div>

                <div className="row">
                    {this.state.pb.filter((book, index) => { return index >= this.state.indexStart && index <= this.state.indexEnd }).map(book =>
                        <div key={book.isbn} className="container">
                            <div className="card col s4" >
                                <div className="card-image">
                                    <img src={book.details.url} alt="" height="200px" />
                                    <span className="card-title">Card Title</span>
                                    <div className="card-content">
                                        <p><b>Title :</b> {book.details.title}</p>
                                        <p><b>Author :</b> {book.details.author}</p>
                                        <p><b>Categories :</b> {book.details.categories}</p>
                                        <p><b>Quantity :</b> {book.details.copies}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>






                <input className="button" type="button" id="prev" value="Prev" onClick={this.clickPrevious} />
                <input className="button" type="button" id="next" value="Next" onClick={this.clickNext} />



            </div>




        )








    }

}



export default PBooks;

