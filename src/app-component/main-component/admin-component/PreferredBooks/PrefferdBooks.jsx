import React, { Component } from 'react';
import axios from 'axios';
import PrefferedBooks from './PrefferedBooks.css';
var count = 0;
class PBooks extends Component {

    state =
    {
        display: [],
    }


    componentDidMount() {
        axios.get('https://api.myjson.com/bins/nmfn3')
            .then(res => {
                this.setState({ display: res.data });
            })
    }

    render() {
        /*this.state.display.map((result)=>{ 
               
                return(<div><p>{result.isbn}</p>
                <p>{result.details.title}</p></div>);
    
    });*/
        const a = this.state.display.map((result) => {
            if (result.details.rating >= 4) {
                count++;
                console.log(count);
                return (

                    <div className="item">

                        <img src="http://web.uvic.ca/~rileymclean/Final%20Project/images/books.png" alt="Chicago" />

                        <div className="carousel-caption">

                            <h3>{result.isbn}</h3>
                            <p>{result.details.title}</p>
                            <p>{result.details.author}</p>
                            <p>{result.details.category}</p>
                            <p>{result.details.rating}</p>



                        </div>
                    </div>
                )
            }
        })

        // const b=a.filter(out=> out.details.rating > 4);
        // console.log(b);

        return (


            <div>

                {/*<div id="myCarousel" className="carousel slide" data-ride="carousel">

                    <div className="carousel-inner">

                        <div className="item active">
                            <img src="https://studybreaks.com/wp-content/uploads/2017/08/books.jpg" alt="Los Angeles" />
                            <div className="carousel-caption">
                                <h1 id="tp"> Top Rated Books >>> </h1>
                            </div>
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
                </div>*/}


                <nav>
    <div class="nav-wrapper">
      <a href="#" class="brand-logo">Logo</a>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
      </ul>
    </div>
  </nav>
        

            </div>
        )

    }
}
export default PBooks;

