import React, { Component } from 'react';
import axios from 'axios';
import PrefferedBooks from './PrefferedBooks.css';
import $ from 'jquery';

class PBooks extends Component {

    constructor() {
        super();
        this.state = {
            display: [],
            indexStart: 0,
            indexEnd: 15
        }
    }
    clickPrevious = () => {
        if (this.state.indexStart - 4 >= 0) {
            this.setState({ indexStart: ((this.state.indexStart) - 4) });
            this.setState({ indexEnd: ((this.state.indexEnd) - 4) });
        }
    }
    clickNext = () => {
        if (this.state.indexEnd <= this.state.display.length) {
            this.setState({ indexStart: ((this.state.indexStart) + 4) });
            this.setState({ indexEnd: ((this.state.indexEnd) + 4) });
        }
    }





    componentDidMount() {
        axios.get('https://api.myjson.com/bins/eobyn')
            .then(res => {
                this.setState({ display: res.data.booksArray });



                console.log(this.state.display)


            })

        // $('.carousel.carousel-slider').carousel({fullWidth: true});

        $(document).ready(function () {
            $('.carousel').carousel({
                dist: 0,
                shift: 0,
                padding: 20,


            });

        });
    }





    //        $(document).ready(function(){
    //   $('.carousel').carousel();
    // });


    render() {




        /*const a = this.state.display.map((result) => {
            if (result.details.rating >= 4) {
                return (

                    <div class="card col s6">
                        <div class="card-image">

                            <img src={result.details.url} height="400px" />
                            <span class="card-title">Card Title</span>

                            <div class="card-content">
                                <p>{result.details.title}</p>
                            </div>

                        </div>
                    </div>




                )
            }
        })*/

        // const b=a.filter(out=> out.details.rating > 4);
        // console.log(b);

        return (

            <div>

                <div class="row">
                    
                    {this.state.display.filter((book, index) => { return index >= this.state.indexStart && index <= this.state.indexEnd && book.details.rating >= 3 }).map(book =>

                        <div className="container">
                            <div className="card col s3">
                                <div className="card-image">
                                    <img src={book.details.url} height="200px" />
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

