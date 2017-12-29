import React, { Component } from 'react';
import Rx from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'rxjs/add/operator/filter';
import SearchResults from './../main-component/user-component/SearchResults';
var debounce = require('debounce');
export var processedData="";

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            data: '',
            sortedData: '',
            filteredData: '',
            temp:0
        }
        Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/eobyn'))
            .flatMap((response) => response.json())
            .subscribe(values => {
                this.setState({ data: values })
                console.log(this.state.data.booksArray[0])
            })
    }
    search = (event) => {
        let value = document.getElementById("search").value;
        console.log(document.getElementById("search").value)

            console.log(this.state.data)
                        this.datax = this.state.data.booksArray.filter((data3) =>
                            (data3.details.title.indexOf(value) >= 0 || 
                            data3.details.author.indexOf(value) >= 0 || 
                            data3.details.publisher.indexOf(value) >= 0 || 
                            data3.details.category.indexOf(value) >= 0) && 
                            value !== '');
                        this.dataOrg = this.datax;
                        this.setState({ sortedData : this.datax})
                        this.setState({ filteredData : this.datax})
                        console.log(this.state.sortedData);
                        // <Link to="/results">
                        // <button className="btn-primary">Search</button>
                        //     </Link>

        this.setState({ searchTerm: document.getElementById("search").value })

        console.log(this.state.data)
        this.datax = this.state.data.booksArray.filter((data3) =>
            (data3.details.title.indexOf(value) >= 0 ||
                data3.details.author.indexOf(value) >= 0 ||
                data3.details.publisher.indexOf(value) >= 0 ||
                data3.details.category.indexOf(value) >= 0) &&
            value !== '');
        this.dataOrg = this.datax;
        processedData = this.datax;
        console.log(processedData)

        this.setState({ sortedData: this.datax })
        // console.log(this.state.sortedData)

        console.log(this.state.sortedData)

    }
    selectSort = () => {
        if (document.getElementById("sort").value === "Title") {
            this.sortTitle();
        }
        else if (document.getElementById("sort").value === "Author") {
            this.sortAuthor();
        }
        else if (document.getElementById("sort").value === "Publisher") {
            this.sortPublish();
        }
        else if (document.getElementById("sort").value === "Rating") {
            this.sortRating();
        }
        else alert("Select a valid sort");
    }
    selectFilter = () => {
        if (document.getElementById("filter").value === "5 Rated") {
            this.fiveRated();
        }
        else if (document.getElementById("filter").value === "4 and above Rated") {
            this.fourRated();
        }
        else if (document.getElementById("filter").value === "3 and above Rated") {
            this.threeRated();
        }
        else if (document.getElementById("filter").value === "2 and above Rated") {
            this.twoRated();
        }
        else alert("Select a valid Filter");
    }
    sortTitle() {
        this.flag = !this.flag;
        let i = this.flag;
        this.state.sortedData.sort(function (a, b) {
            if (a.details.title > b.details.title) {
                if (i)
                    return -1;
                else
                    return 1;
            }
            if (a.details.title < b.details.title) {
                if (i)
                    return 1;
                else
                    return -1;
            }
            return 0;
        }    
        )
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by Title");
        this.setState({ temp: 1 })
    }
    sortAuthor() {
        this.flag = !this.flag;
        let i = this.flag;
        this.state.sortedData.sort(function (a, b) {
            if (a.details.author > b.details.author) {
                if (i)
                    return -1;
                else
                    return 1;
            }
            if (a.details.author < b.details.author) {
                if (i)
                    return 1;
                else
                    return -1;
            }
            return 0;
        }
        )
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by Author");
        this.setState({ temp: 1 })
    }
    sortPublish() {
        this.flag = !this.flag;
        let i = this.flag;
        this.state.sortedData.sort(function (a, b) {
            if (a.details.publisher > b.details.publisher) {
                if (i)
                    return -1;
                else
                    return 1;
            }
            if (a.details.publisher < b.details.publisher) {
                if (i)
                    return 1;
                else
                    return -1;
            }
            return 0;
        }
        )
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by Publisher");
        this.setState({ temp: 1 })
    }
    sortRating() {
        this.flag = !this.flag;
        let i = this.flag;
        this.state.sortedData.sort(function (a, b) {
            if (a.details.rating > b.details.rating) {
                if (i)
                    return -1;
                else
                    return 1;
            }
            if (a.details.rating < b.details.rating) {
                if (i)
                    return 1;
                else
                    return -1;
            }
            return 0;
        }
        )
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by Rating");
        this.setState({ temp: 1 })
    }
    fiveRated() {
        this.state.sortedData = this.state.sortedData.filter((data) =>
            data.details.rating === "5")
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by five rated");
        this.setState({ temp: 2 })
    }
    fourRated() {
        this.state.sortedData = this.state.sortedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "4"))
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by four rated");
        this.setState({ temp: 2 })
    }
    threeRated() {
        this.state.sortedData = this.state.sortedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "3"))
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by three rated");
        this.setState({ temp: 2 })
    }
    twoRated() {
        this.state.sortedData = this.state.sortedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "2"))
        processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by two rated");
        this.setState({ temp: 2 })
    }

    render() {
        return (
            <div className="row">
                <nav>
                    <div className="nav-wrapper">
                        <form>
                            <div className="input-field">
                                <input id="search" type="search" onKeyUp={debounce(this.search, 1000)} required />
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>

                <div className="col-md-4 col-md-offset-6">
                </div>
                <div className="col-md-4 col-md-offset-6">
                    <div className="btn-group">
                        <div className="dropdown">
                            <select className="btn btn-secondary dropdown-toggle" type="button" id="sort" onChange={this.selectSort} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                {/*<div className="dropdown-menu" aria-labelledby="dropdownMenu2">*/}
                                <option className="dropdown-item" >Sort By</option>
                                <option className="dropdown-item" onKeyUp={this.sortTitle}>Title</option>
                                <option className="dropdown-item" onClick={this.sortAuthor}>Author</option>
                                <option className="dropdown-item" onClick={this.sortPublish}>Publisher</option>
                                <option className="dropdown-item" onClick={this.sortRating}>Rating</option>
                                {/*</div>*/}
                            </select>
                        </div>
                    </div>
                    <div className="btn-group">
                        <div className="dropdown">
                            <select className="btn btn-secondary dropdown-toggle" id="filter" onChange={this.selectFilter} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                {/*<div className="dropdown-menu" aria-labelledby="dropdownMenu2">*/}
                                <option className="dropdown-item" >Filter By</option>
                                <option className="dropdown-item" onClick={this.fiveRated}>5 Rated</option>
                                <option className="dropdown-item" onClick={this.fourRated}>4 and above Rated </option>
                                <option className="dropdown-item" onClick={this.threeRated}>3 and above Rated</option>
                                <option className="dropdown-item" onClick={this.twoRated}>2 and above Rated</option>
                            </select>
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
                <SearchResults result={this.state.sortedData}/>
            </div>
             

            //         <div class="card-columns">
            // <div *ngFor = 'let index of datax'>
            // <div class="card  mb-3 " style="width: 20rem;">
            //   <img class="card-img-top" src="../../../../assets/images/LiMS.png" alt="Book image">
            //   <div class="card-block">
            //     <h4 class="card-title">ISBN: {{index.isbn}}</h4>
            //     <p class="card-text">Title: {{index.details.title}}<br>Author: {{index.details.author}}<br>Category: {{index.details.category}}<br>Rating: {{index.details.rating}}<br></p>
            //     <a href="#" class="btn btn-primary">Request Book</a>
            //   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
            //   Quickview
            // </button>

            //   </div>
            // </div>
            // <br><br>
            // </div>
            // </div>
        );
    }
}

// https://api.myjson.com/bins/agk87
// https://api.myjson.com/bins/q3n27
// https://api.myjson.com/bins/eobyn 