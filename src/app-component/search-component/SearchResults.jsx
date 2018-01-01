import React, {Component} from 'react';
import {processedData} from './Search';
import $ from 'jquery';
import axios from 'axios';
let users,books;
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