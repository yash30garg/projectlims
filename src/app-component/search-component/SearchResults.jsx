import React, {Component} from 'react';
import {processedData} from './Search';
import $ from 'jquery';
<<<<<<< HEAD
import axios from 'axios';
let users,books;
=======
import './Search.css';
>>>>>>> c22a16639ba2c3e5aa6c9e52d698e6f6f3f1c3d8
class SearchResults extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            output: []
        }
    }

    componentDidMount()
    {

<<<<<<< HEAD
        axios
            .get('https://api.myjson.com/bins/ds48n')
            .then(res => {
                this.setState({output: res.data});
                users = this.state.output;
        const b = users.filter((res) => res.user.mid === "1042948")
        books=b[0].userBooks.length
            });
    }
    request() {
        if (books <5) {
            books++;
            alert("The Requested Book has been allotted to you..Please Collect It from the Library");
        }
        else{
            alert("Oops..Looks like You cannot borrow more books. Please return a book to borrow more")
        }
    }
    render()
    {

        $(function () {
            $('.card')
                .hover(function () {
                    $(this)
                        .find('> .card-image > img.activator')
                        .click();
                }, function () {
                    $(this)
                        .find('> .card-reveal > .card-title')
                        .click();
                });
        });

        const a = processedData.map(res => {
            return (
                <div className="card col-md-5 ml-5 mt-5">
                    <div className=" card-img-top">
                        <img
                            className="container-fill m-4"
                            src={res.details.url}
                            alt="not available"
                            height="200"/>
                    </div>
                    <div className="card-block">
                        <div className="card-title">
                            <h4>
                                <b>Title:
                                </b>
                                <span>{res.details.title}</span>
                            </h4>
                        </div>
                        <div className="card-text">
                            <b>Category:
                            </b>
                            <span>{res.details.category}</span>
                            <br/>
                            <b>ISBN:
                            </b>
                            <span>{res.isbn}</span><br/>
                            <b>Author:
                            </b>
                            <span>{res.details.author}</span><br/>
                            <b>Publisher:
                            </b>
                            <span></span>{res.details.publisher}<br/>
                            <b>Rating:
                            </b>
                            <span>{res.details.rating}</span><br/>
                            <b>Copies available:
                            </b>
                            <span>{res.details.copies}</span>
                        </div>
                        <br/>
                        <button type="button" class="btn btn-primary" onClick={this.request}>Request</button>
                    </div>
                </div>
            );
        })
        return (
            <div className="container-fill">
                <div className="row offset-md-1">
                    {a}
                </div>
            </div>
        )
    }
}
export default SearchResults;
=======
         const a=processedData.map(res=>{
             return(
                 <div className="col-md-6 col-sm-12 col-lg-3 each">
        <div className="card" style={{ width: '20rem' }}>
      <img className="card-img-top" src={res.details.url} alt="not available" height="200vh"/>
    <div className="card-block text-block">
        <b>Title: </b><span>{res.details.title}</span><br/>
        <b>Category: </b><span>{res.details.category}</span>
    </div>
  </div>
  </div>
             );

//     <div class="card" style="width: 20rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-block">
//     <h4 class="card-title">Card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
         })

         return(
             <div className="row eachRow">
             {a}
             </div>
         );
     }
    
 }
 export default SearchResults;
>>>>>>> c22a16639ba2c3e5aa6c9e52d698e6f6f3f1c3d8
