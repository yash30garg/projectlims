import React, { Component } from 'react';
import axios from 'axios';
import PrefferedBooks from './PrefferedBooks.css';
import $ from 'jquery';

class PBooks extends Component {

    state =
    {
        display: [],
    }


    componentDidMount() {
        axios.get('https://api.myjson.com/bins/eobyn')
            .then(res => {
                this.setState({ display: res.data.booksArray });
                

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
                        <div class="item">
      <img src={result.details.url}  />
    </div>

                    
                )
            }   
        })

        // const b=a.filter(out=> out.details.rating > 4);
        // console.log(b);

        return (


            

                <div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">

                        <div className="item active">
                            <img src="https://studybreaks.com/wp-content/uploads/2017/08/books.jpg" alt="Los Angeles" />
                        </div>

                        {a}


                    </div>


                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#myCarousel" data-slide="next">
                        <span className="glyphicon glyphicon-chevron-right"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>

        )
    }

}



export default PBooks;

