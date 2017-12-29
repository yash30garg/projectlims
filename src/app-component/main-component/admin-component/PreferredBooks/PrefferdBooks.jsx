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
        
      
    



                /*<div className="row">

    render() {

        return (
            <div>

                <div className="row">


                <div className="container">
                    {this.state.pb.filter((book, index) => { return index >= this.state.indexStart && index <= this.state.indexEnd }).map(book =>
                        <div key={book.isbn} className="container">
                            <div  key={book.isbn} className="card col s12 m6 l4" >
                                <div className="card-image">
                                    <img src={book.details.url} alt="" height="200vh" width="0%" />
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

                </div>*

                      
                    </div>
                

                </div>


                
                /*<input className="button" type="button" id="prev" value="Prev" onClick={this.clickPrevious} />
            <input className="button" type="button" id="next" value="Next" onClick={this.clickNext} />*/


                // <button class="btn waves-effect waves-light" id="prev" value="Prev" onClick={this.clickPrevious} ><i class="material-icons left">send</i></button>
                // <button class="btn waves-effect waves-light" id="next" value="Next" onClick={this.clickNext} ><i class="material-icons right">send</i></button>

            // </div>

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
       <div class="carousel-item active">
      <img class="d-block img-fluid" src="http://bookloverbookreviews.dhvdjqudnc8k2lygmnqz.maxcdn-edge.com/wp-content/uploads/2017/07/BEST-BOOKS-of-2017-so-far.png" alt="First slide" height ="200" wodth="1300" />
    </div>

    
    {a}
    
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

