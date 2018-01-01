import React, { Component } from 'react';
import axios from 'axios';
import './PrefferedBooks.css';
// import $ from 'jquery';
// var preferredBooks = [];

class PBooks extends Component {

    constructor() {
        super();
        this.state = {
            display: [],
            // indexStart: 0,
            // indexEnd: 2,
            // pb:[]
        }
    }
    // clickPrevious = () => {

    //     if (this.state.indexStart - 2>= 0) {
    //         this.setState({ indexStart: ((this.state.indexStart) - 2) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) - 2) });
    //     }
    // }
    // clickNext = () => {
    //     if (this.state.indexEnd <= this.state.posts.length) {
    //         this.setState({ indexStart: ((this.state.indexStart) + 3) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) + 3) });

    //     if (this.state.indexStart - 4 >= 0) {
    //         this.setState({ indexStart: ((this.state.indexStart) - 4) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) - 4) });
    //     }
    // }
    // clickNext = () => {
    //     if (this.state.indexEnd < this.state.pb.length) {
    //         this.setState({ indexStart: ((this.state.indexStart) + 2) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) + 2) });

        // if (this.state.indexStart - 2>= 0) {
        //     this.setState({ indexStart: ((this.state.indexStart) - 2) });
        //     this.setState({ indexEnd: ((this.state.indexEnd) - 2) });
        // }
    
    // // clickNext = () => {
    // //     if (this.state.indexEnd <= this.state.posts.length) {
    // //         this.setState({ indexStart: ((this.state.indexStart) + 3) });
    // //         this.setState({ indexEnd: ((this.state.indexEnd) + 3) });

    // //     if (this.state.indexStart - 4 >= 0) {
    // //         this.setState({ indexStart: ((this.state.indexStart) - 4) });
    // //         this.setState({ indexEnd: ((this.state.indexEnd) - 4) });
    // //     }
    // // }
    // clickNext = () => {
    //     if (this.state.indexEnd < this.state.pb.length) {
    //         this.setState({ indexStart: ((this.state.indexStart) + 2) });
    //         this.setState({ indexEnd: ((this.state.indexEnd) + 2) });

    //     }
    // }

    

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/b20lr')
            .then(res => {
                this.setState({ display: res.data.booksArray });
                console.log(this.state.display)
                // prefBooks();
                // console.log(preferredBooks)
            })
    }
        

              render()
               {
const a = 
            this.state.display.map((result) => {
                if (result.details.rating >= 4) {
                    // console.log(result)
                    // preferredBooks.push(result)
                    return(

  
<div class="carousel-item">
      <img class="d-block img-fluid" src={result.details.url} height="200"  width="1300"/>
    </div>


                    )

                }
            })
            // this.setState({pb:preferredBooks})
            // return console.log(preferredBooks);
        
        
        return (

<div>

<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  {/*<ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>*/}
  <div class="carousel-inner" role="listbox">

      <div class="carousel-cell">
       <div class="carousel-item active">
      <img class="d-block img-fluid" src="http://bookloverbookreviews.dhvdjqudnc8k2lygmnqz.maxcdn-edge.com/wp-content/uploads/2017/07/BEST-BOOKS-of-2017-so-far.png" alt="First slide" height ="200" wodth="1300" />
    </div>

    
    {a}
    
  </div>
  </div>
  
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>


</div>

        )
    }

}



export default PBooks;

