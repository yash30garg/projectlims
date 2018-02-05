// import React, { Component } from 'react';
// import Rx from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
// import { Link } from 'react-router-dom';
// import { requireAuth } from '../isLoggedIn.js'
// import { BrowserRouter, Route, Link } from 'react-router-dom';
import 'rxjs/add/operator/filter';
// import SearchResults from '../search-component/SearchResults';
// import Footer from '../footer-component/footer'
import './Search.css'
import store from '../../state/store/store.js'
// import BootHeader from '../header-component/bootheader'
import {changeNotify} from './SearchResults'
// var debounce = require('debounce');
export var processedData = [];
var data;
export var value;
export var search = () => {
    value = store.getState().search.toLowerCase();
    processedData = []
    // let value = document.getElementById('key').value.toLowerCase();
    changeNotify();
    let value1, value2;
    value1=value
    if (value.indexOf('&') > -1) {
        //console.log(("I am Here")
        value1 = value.substring(0, value.indexOf('&')-1)
        value2 = value.substring(value.indexOf('&') + 2, value.length)
        //console.log((value1 + " : " + value2)
    }
    else if(value.indexOf('and')>-1) {
        //console.log(('and')
        value1 = value.substring(0,value.indexOf('and')-1)
        value2 = value.substring(value.indexOf('and')+4,value.length)
            value1.trim();
    value2.trim();
    }
    else if(value.indexOf(',')>-1)
    {
        //console.log((',')
        value1 = value.substring(0,value.indexOf(','))
        value2 = value.substring(value.indexOf(',')+2, value.length)
            value1.trim();
    value2.trim();
    }

    if (value === "")
        window.location = '/#/';
    else {
        // Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/1a9rkj'))
        //     .flatMap((response) => response.json())
        //     .subscribe(values => {
                // data = values;
                data = window.display;


                // //console.log((this.state.data)
                var datax = data.filter((data3) =>
                    (data3.title.toLowerCase().indexOf(value1) >= 0 ||
                        data3.author.toLowerCase().indexOf(value1) >= 0 ||
                        data3.publisher.toLowerCase().indexOf(value1) >= 0 ||
                        data3.category.toLowerCase().indexOf(value1) >= 0) &&
                    value1 !== '').sort((a, b) => { return (b.rating - a.rating) });
                    //console.log((value2)
                    processedData = datax
                if (value2 !== "") {
                   var datay = data.filter((data3) =>
                        (data3.title.toLowerCase().indexOf(value2) >= 0 ||
                            data3.author.toLowerCase().indexOf(value2) >= 0 ||
                            data3.publisher.toLowerCase().indexOf(value2) >= 0 ||
                            data3.category.toLowerCase().indexOf(value2) >= 0) &&
                        value2 !== '').sort((a, b) => { return (b.rating - a.rating) });
                        // eslint-disable-next-line
                        datay.map((res)=>{
                            if(processedData.indexOf(res))
                            processedData.push(res)
                        })
                }
                datax = processedData
                store.dispatch({ type: "STORE_SORTED_DATA", payload: datax })
                //console.log((store.getState().sorted_Data)
                window.location = `/#/search/${value}`
                // document.getElementById('os').click();
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
    // //console.log((processedData)
    // //console.log(("Sorted by Title");
    window.location = `/#/search/title=${value}`    
    // document.getElementById('os').click();
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
    // //console.log((processedData)
    // //console.log(("Sorted by Author");
    window.location = `/#/search/author=${value}`
    // document.getElementById('os').click();
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
    // //console.log((processedData)
    window.location = `/#/search/publish=${value}`
    // //console.log(("Sorted by Publisher");
    // document.getElementById('os').click();
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
    // //console.log((processedData)
    window.location = `/#/search/rating=${value}`
    // //console.log(("Sorted by Rating");
    // document.getElementById('os').click();
}

export var selectFilter = () => {
        if (document.getElementById("filter").value === "Filter By 5 Rated") {
            fiveRated();
        }
        else if (document.getElementById("filter").value === "Filter By 4 and above") {
            fourRated();
        }
        else if (document.getElementById("filter").value === "Filter by 3 and above") {
            threeRated();
        }
        else if (document.getElementById("filter").value === "Filter by 2 and above") {
            twoRated();
        }
        else if(document.getElementById('filter').value === "Filter By")document.getElementById('defaultSearchResults').click();
    }

    var fiveRated= () => {
        processedData = store.getState().sorted_Data
        //console.log((store.getState().sorted_Data)
        //console.log((processedData)
        let filter = processedData
        processedData=[]
        filter.filter((data) => data.rating === 5)
        .map((res)=> processedData.push(res))
        // processedData = this.state.sortedData;
        window.location = `/#/search/5_star=${value}`
        //console.log((processedData)
        //console.log(("Sorted by five rated");
        // document.getElementById('os').click();
    }
    var fourRated = () =>  {
        processedData = store.getState().sorted_Data
        let filter = processedData
        processedData=[]
        filter.filter((data) =>
            (data.rating <= 5) && (data.rating >= 4))
            .map((res)=> processedData.push(res))
        // processedData = this.state.sortedData;
        window.location = `/#/search/>4_star=${value}`
        //console.log((processedData)
        //console.log(("Sorted by four rated");
        // document.getElementById('os').click();
    }
    var threeRated = () => {
        processedData = store.getState().sorted_Data
        let filter = processedData
        processedData=[]
        filter.filter((data) =>
            (data.rating <= 5) && (data.rating >= 3))
            .map((res)=> processedData.push(res))
        // processedData = this.state.sortedData;
        window.location = `/#/search/>3_star=${value}`
        //console.log((processedData)
        //console.log(("Sorted by three rated");
        // document.getElementById('os').click()
    }
    var twoRated = () => {
        processedData = store.getState().sorted_Data
        let filter = processedData
        processedData=[]
        filter.filter((data) =>
            (data.rating <= 5) && (data.rating >= 2))
            .map((res)=> processedData.push(res))
        // processedData = this.state.sortedData;
        window.location = `/#/search/>2_star=${value}`
        //console.log((processedData)
        //console.log(("Sorted by two rated");
        // document.getElementById('os').click();
    }

/*export default class Search extends Component {
    constructor() {
        super();
        Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/1a9rkj'))
            .flatMap((response) => response.json())
            .subscribe(values => {
                data = values;
                let value = store.getState().search;
                //console.log((value)

                // //console.log((this.state.data)
                var datax = data.booksArray.filter((data3) =>
                    (data3.title.toLowerCase().indexOf(value) >= 0 ||
                        data3.author.toLowerCase().indexOf(value) >= 0 ||
                        data3.publisher.toLowerCase().indexOf(value) >= 0 ||
                        data3.category.toLowerCase().indexOf(value) >= 0) &&
                    value !== '').sort((a, b) => { return (b.rating - a.rating) });
                processedData = datax
                store.dispatch({ type: "STORE_SORTED_DATA", payload: datax })
                //console.log((store.getState().sorted_Data)
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