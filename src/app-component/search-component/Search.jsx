import React, { Component } from 'react';
import Rx from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Link } from 'react-router-dom';
import { requireAuth } from '../isLoggedIn.js'
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'rxjs/add/operator/filter';
import SearchResults from '../search-component/SearchResults';
// import Footer from '../footer-component/footer'
import './Search.css'
import store from '../../state/store/store.js'
import BootHeader from '../header-component/bootheader'
var debounce = require('debounce');
export var processedData = [];
var data
export var search = () => {
    let value = store.getState().search.toLowerCase();
    processedData = []
    // let value = document.getElementById('key').value.toLowerCase();
    let value1, value2;
    value1=value
    console.log(value1)
    if (value.indexOf('&') > -1) {
        console.log("I am Here")
        value1 = value.substring(0, value.indexOf('&')-1)
        value2 = value.substring(value.indexOf('&') + 2, value.length)
        console.log(value1 + " : " + value2)
    }
    else if(value.indexOf('and')>-1) {
        console.log('and')
        value1 = value.substring(0,value.indexOf('and')-1)
        value2 = value.substring(value.indexOf('and')+4,value.length)
    }
    if (value === "")
        document.getElementById('cs').click();
    else {
        // Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/1a9rkj'))
        //     .flatMap((response) => response.json())
        //     .subscribe(values => {
                // data = values;
                data = window.display;


                // console.log(this.state.data)
                var datax = data.filter((data3) =>
                    (data3.title.toLowerCase().indexOf(value1) >= 0 ||
                        data3.author.toLowerCase().indexOf(value1) >= 0 ||
                        data3.publisher.toLowerCase().indexOf(value1) >= 0 ||
                        data3.category.toLowerCase().indexOf(value1) >= 0) &&
                    value1 !== '').sort((a, b) => { return (b.rating - a.rating) });
                    console.log(value2)
                    processedData = datax
                if (value2 !== "") {
                   var datay = data.filter((data3) =>
                        (data3.title.toLowerCase().indexOf(value2) >= 0 ||
                            data3.author.toLowerCase().indexOf(value2) >= 0 ||
                            data3.publisher.toLowerCase().indexOf(value2) >= 0 ||
                            data3.category.toLowerCase().indexOf(value2) >= 0) &&
                        value2 !== '').sort((a, b) => { return (b.rating - a.rating) });
                        datay.map((res)=>{
                            processedData.push(res)
                        })
                }
                datax = processedData
                store.dispatch({ type: "STORE_SORTED_DATA", payload: datax })
                console.log(store.getState().sorted_Data)
                document.getElementById('os').click();
            // })
    }

}

export var sortTitle = () => {
    this.flag = !this.flag;
    let i = this.flag;
    processedData.sort(function (a, b) {
        if (a.title < b.title) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.title > b.title) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    // console.log(processedData)
    // console.log("Sorted by Title");
    document.getElementById('os').click();
}
export var sortAuthor = () => {
    this.flag = !this.flag;
    let i = this.flag;
    processedData.sort(function (a, b) {
        if (a.author < b.author) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.author > b.author) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    // console.log(processedData)
    // console.log("Sorted by Author");
    document.getElementById('os').click();
}
export var sortPublish = () => {
    this.flag = !this.flag;
    let i = this.flag;
    processedData.sort(function (a, b) {
        if (a.publisher < b.publisher) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.publisher > b.publisher) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    // console.log(processedData)
    // console.log("Sorted by Publisher");
    document.getElementById('os').click();
}
export var sortRating = () => {
    this.flag = !this.flag;
    let i = this.flag;
    processedData.sort(function (a, b) {
        if (a.rating > b.rating) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.rating < b.rating) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    // console.log(processedData)
    // console.log("Sorted by Rating");
    document.getElementById('os').click();
}

    var fiveRated= () => {
        processedData = processedData.filter((data) =>
            data.details.rating === "5")
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by five rated");
        this.setState({ temp: 2 })
    }
    var fourRated = () =>  {
        processedData = processedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "4"))
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by four rated");
        this.setState({ temp: 2 })
    }
    var threeRated = () => {
        processedData = processedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "3"))
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by three rated");
        this.setState({ temp: 2 })
    }
    var twoRated = () => {
        processedData = processedData.filter((data) =>
            (data.details.rating <= "5") && (data.details.rating >= "2"))
        // processedData = this.state.sortedData;
        console.log(processedData)
        console.log("Sorted by two rated");
        this.setState({ temp: 2 })
    }

/*export default class Search extends Component {
    constructor() {
        super();
        Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/1a9rkj'))
            .flatMap((response) => response.json())
            .subscribe(values => {
                data = values;
                let value = store.getState().search;
                console.log(value)

                // console.log(this.state.data)
                var datax = data.booksArray.filter((data3) =>
                    (data3.title.toLowerCase().indexOf(value) >= 0 ||
                        data3.author.toLowerCase().indexOf(value) >= 0 ||
                        data3.publisher.toLowerCase().indexOf(value) >= 0 ||
                        data3.category.toLowerCase().indexOf(value) >= 0) &&
                    value !== '').sort((a, b) => { return (b.rating - a.rating) });
                processedData = datax
                store.dispatch({ type: "STORE_SORTED_DATA", payload: datax })
                console.log(store.getState().sorted_Data)
                {
                    <BootHeader landingView={false}
                        categoryClicked={false}
                        borrowedClicked={false}
                        passBorrowed={false}
                        passWish={false}
                        wishlistClicked={false}
                        searchResults={true}
                        searchClicked={true}
                        sortedData={store.getState().sorted_Data} />
                }
            })
    }
}*/

// https://api.myjson.com/bins/agk87
// https://api.myjson.com/bins/q3n27
// https://api.myjson.com/bins/eobyn 
// https://api.myjson.com/bins/19krvn