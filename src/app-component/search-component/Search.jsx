import React, { Component } from 'react';
import Rx from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'rxjs/add/operator/filter';
import SearchResults from '../search-component/SearchResults';
import Footer from '../footer-component/footer'
import './Search.css'
var debounce = require('debounce');
export var processedData = [];

export default class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchTerm: '',
            data: '',
            sortedData: '',
            filteredData: '',
            temp: 0
        }
        Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/19krvn'))
            .flatMap((response) => response.json())
            .subscribe(values => {
                this.setState({ data: values })
                console.log(this.state.data.booksArray);
            })
    }
    search = (event) => {
        let value = document.getElementById("search").value.toLowerCase();
        console.log(document.getElementById("search").value)

        console.log(this.state.data)

        this.setState({ searchTerm: document.getElementById("search").value.toLowerCase() })

        console.log(this.state.data)
        this.datax = this.state.data.booksArray.filter((data3) =>
            (data3.details.title.toLowerCase().indexOf(value) >= 0 ||
                data3.details.author.toLowerCase().indexOf(value) >= 0 ||
                data3.details.publisher.toLowerCase().indexOf(value) >= 0 ||
                data3.details.category.toLowerCase().indexOf(value) >= 0) &&
            value !== '');
        this.dataOrg = this.datax;
        processedData = this.datax;
        console.log(processedData)


        this.setState({ sortedData: this.datax })
        // console.log(this.state.sortedData)


        console.log(this.state.sortedData)
        this.setState({ sortedData: this.datax })
        // console.log(this.state.sortedData)

        console.log(this.state.sortedData)
        event.preventDefault();



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
        processedData = processedData.filter((data) =>
            data.details.rating === "5")
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by five rated");
        this.setState({ temp: 2 })
    }
    fourRated() {
        processedData = processedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "4"))
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by four rated");
        this.setState({ temp: 2 })
    }
    threeRated() {
        processedData = processedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "3"))
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by three rated");
        this.setState({ temp: 2 })
    }
    twoRated() {
        processedData = processedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "2"))
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by two rated");
        this.setState({ temp: 2 })
    }
    back() {
        processedData = [];
        window.history.go(-1)
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
                    <a ><img
                        className="App-logo"
                        src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"}
                        alt="My logo"
                        align="left" /></a>
                    <a className="navbar-brand" href="#">Mindtree Library</a>
                    <form onSubmit={this.search}>
                        <div className="col-lg-9">
                            <div className="row offset-md-3">
                                <div className="input-group">

                                    <input type="text" id="search" className="form-control" size="800" style={{ alignSelf: "center" }} placeholder="Search for..." onKeyUp={debounce(this.search, 700)} autoFocus />
                                    <span className="input-group-btn">

                                        <button type="submit" className="btn btn-outline-secondary" onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                this.search()
                                            }
                                        }}
                                            onClick={this.search}>Go!</button>

                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                    {/*<a className="close"><label id="close" onClick={this.back}><h4>x</h4></label></a>*/}
                    <a className="close"><button className="btn btn-outline-primary" onClick={this.back}>back</button></a>
                </nav>
                <div className="content">
                    <SearchResults result={this.state.sortedData} />
                </div>
            </div>



            //         <div class="card-columns">
            // <div *ngFor = 'let index of datax'>
            // <div class="card  mb-3 " style="width: 20rem;">
            //   <img class="card-img-top" src="../../../../assets/images/LiMS.png" alt="Book image">
            //   <div class="card-block">
            //     <h4 class="card-title">ISBN: {{index.isbn}}</h4>
            //     <p class="card-text">Title: {{index.details.title}}<br>Author: {{index.details.author}}<br>Category: {{index.details.category}}<br>Rating: {{index.details.rating}}<br></p>
            //     <a href="#!" class="btn btn-primary">Request Book</a>
            //   <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#!exampleModal">
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
// https://api.myjson.com/bins/19krvn