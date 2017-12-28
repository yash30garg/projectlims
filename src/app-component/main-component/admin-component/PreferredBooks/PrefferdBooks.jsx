import React, { Component } from 'react';
import axios from 'axios';
// import PrefferedBooks from './PrefferedBooks.css';
import $ from 'jquery';

class PBooks extends Component {
    constructor() {
        super();
        this.state = {
            display: [],
            indexStart: 0,
            indexEnd: 4
        }
    }
    clickPrevious = () => {
        if (this.state.indexStart - 5 >= 0) {
            this.setState({ indexStart: ((this.state.indexStart) - 5) });
            this.setState({ indexEnd: ((this.state.indexEnd) - 5) });
        }
    }
    clickNext = () => {
        if (this.state.indexEnd <= this.state.posts.length) {
            this.setState({ indexStart: ((this.state.indexStart) + 5) });
            this.setState({ indexEnd: ((this.state.indexEnd) + 5) });
        }
    }

    state =
    {
        display: [],
    }


    componentDidMount() {
        axios.get('https://api.myjson.com/bins/eobyn')
            .then(res => {
                this.setState({ display: res.data.booksArray});
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

        //        $(document).ready(function(){
        //   $('.carousel').carousel();
        // });
    }
    render() {
        const a = this.state.display.map((result) => {
            if (result.details.rating >= 4) {
                return (



                    <a class="carousel-item" > <img src={result.details.url} height="200" /></a>


                )
            }
        })
        return (
            <div>
                {/*<div class="carousel carousel-slider">
                        {a}
    
                    </div>*/}
                    {/*<div className="carousel">
                        {a}
                        {console.log(this.state.display)}
                        </div>*/}
                <div>
                    {this.state.display.filter((book, index) => { return index >= this.state.indexStart && index <= this.state.indexEnd }).map(book =>
                    { a }
                    )}
                    <input className="button" type="button" id="prev" value="Prev" onClick={this.clickPrevious} />
                    <input className="button" type="button" id="next" value="Next" onClick={this.clickNext} />
                </div>



            </div>
        )



    }

}



export default PBooks;

