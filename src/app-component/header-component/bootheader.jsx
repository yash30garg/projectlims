import React, { Component } from 'react';
import axios from 'axios';
import './bootheader.css';
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router'
// import Footer from '../footer-component/footer.jsx';
// import Header from './header.jsx';
// import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';
// import Search from '../search-component/Search.jsx';
import SearchResults from '../search-component/SearchResults.jsx';
import Search from '../search-component/Search'
import Details from './../BookDetails-Component/details';
import { LandingView } from './landingView';
import { Category } from './categoryView';
import WishedBooks from '../main-component/user-component/wishlist/wishlistComponent'
import LoadingEffect from './../loading-component/loading';
import { EachListItem } from './categoryList';
import store from '../../state/store/store.js'
import $ from 'jquery';
var count = 0,
    plus,
    check;
class BootHeader extends Component {
    constructor() {
        super();
        plus = (
            <div className="fa fa-minus"></div>
        );
        check = "-";
        this.state = {
            display: [],
            landingView: true,
            currentlyClicked: "",
            categoryClicked: true,
            borrowedClicked: false,
            wishlistClicked: false,
            passBorrowed: false,
            passWish: false,
            plus: plus,
            arrayResults: [],
            searchResults: false,
            searchClicked : false,
            sortedData:'',
            searchArg:'',
            redirect:false
        

        }
    }
    componentWillMount() {
        axios
            .get('https://api.myjson.com/bins/1a9rkj')
            .then(res => {
                this.setState({ display: res.data.booksArray });
            })
    }

    openCategory = (arg) => {
        this.setState({
            landingView: false,
            currentlyClicked: arg,
            categoryClicked: true,
            borrowedClicked: false,
            passBorrowed: false,
            passWish: false,
            wishlistClicked: false,
            searchClicked: false,
        });
    }
    closeCategory = () => {
        this.setState({
            landingView: true,
            categoryClicked: true,
            borrowedClicked: false,
            passBorrowed: false,
            wishlistClicked: false,
            passWish: false
        });
    }
    openBorrowedBooks = () => {
        this.setState({
            landingView: true,
            categoryClicked: true,
            borrowedClicked: true,
            passBorrowed: true,
            wishlistClicked: false,
            passWish: true
        });
    }

    closeBorrowed = () => {
        this.setState({
            landingView: true,
            categoryClicked: true,
            borrowedClicked: false,
            passBorrowed: false,
            wishlistClicked: false,
            passWish: false
        });
    }

    openWishlist = () => {
        this.setState({
            landingView: true,
            categoryClicked: true,
            wishlistClicked: true,
            passWish: true,
            borrowedClicked: false,
            passBorrowed: true
        });
    }

    closeWishlist = () => {
        this.setState({
            landingView: true,
            categoryClicked: true,
            wishlistClicked: false,
            passWish: false,
            borrowedClicked: false,
            passBorrowed: false
        });
    }
    openSearch = () => {
        this.setState({
            landingView: false,
            categoryClicked: false,
            borrowedClicked: false,
            passBorrowed: false,
            passWish: false,
            wishlistClicked: false,
            searchResults: true,
            searchClicked : true,
            sortedData: store.getState().sorted_Data,
        })
        if(store.getState().sorted_Data.length===0)
        this.setState({searchArg: "No Results found for your search: "+ document.getElementById('key').value})
        else
        this.setState({searchArg:"Results Found for "+document.getElementById('key').value} )
        // this.setState({redirect:true})
    }
    closeSearch = () => {
        this.setState({
            landingView: true,
            categoryClicked: true,
            borrowedClicked: false,
            passBorrowed: false,
            wishlistClicked: false,
            passWish: false,
            searchResults: false,
            searchClicked:false
        });
       document.getElementById('key').value="";
    }

    plusClicked = () => {
        if (check === "-") {
            check = "+";
            plus = (
                <div className="fa fa-plus"></div>
            )
            this.setState({ plus: plus });
        } else {
            check = "-";
            plus = (
                <div className="fa fa-minus"></div>
            )
            this.setState({ plus: plus });
        }
    }
    render() {
//         if (this.state.redirect) {
//     return <Redirect push to="/search" />;
//   }
        let brr = [];
        // store.subscribe(()=> {
        //     console.log(store.getState().search)
        // })
        let arr = window.display
            .sort((a, b) => {
                if (a.details.category.toUpperCase() > b.details.category.toUpperCase()) {
                    return 1;
                } else if (a.details.category.toUpperCase() < b.details.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
        if (arr.length !== 0) {
            brr.push(arr[0]);
        }
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i].details.category.toUpperCase() !== arr[i + 1].details.category.toUpperCase()) {

                brr.push(arr[i + 1]);
            }

        }


        return (

            <div style={{
                backgroundColor: "#FFF8DC"
            }}>

                {/*<Header />*/}
                <br />
                <div
                    className="bigshow"
                >
                    {/*
                                <div

                                    style={{
                                    marginTop: '-8px'
                                }}
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'Java')}
                                    className="list-group-item  list-group-item-action" >
                                    <span className="fa fa-asterisk" aria-hidden="true"></span>Java
                                    <div
                                            className='mov'
                                            style={{
                                                paddingRight: "227px"
                                            }}>
                                    <span className="badge  badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "java")
                                            .length}</span></div>

                                </div>

                </section>*/}
                    <section id="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">

                                    <div className="list-group">
                                        <div
                                            className="list-group-item collor"
                                            style={{
                                                backgroundColor: "#614126",
                                                color: "white"
                                            }}>
                                            <span className="fa fa-list-alt" aria-hidden="true"></span>
                                            My Books</div>

                                        <div
                                            onClick={this.openBorrowedBooks}
                                            className="list-group-item  list-group-item-action"
                                            style={{
                                                background: " 	#FFF8DC"
                                            }}>

                                            <span className="fa fa-arrow-right" aria-hidden="true"></span>
                                            Borrowed Books

                                        </div>
                                        <div id="os" onClick={this.openSearch} ></div>
                                        <div id="cs" onClick={this.closeSearch}></div>

                                        <div
                                            onClick={this.openWishlist}
                                            className="list-group-item  list-group-item-action"
                                            style={{
                                                background: " 	#FFF8DC"
                                            }}>
                                            <span className="fa fa-arrow-right" aria-hidden="true"></span>Wishlist {/* <div className="all">

                                            <span className="badge badge-pill badge-warning ml-1">0</span>
                                        </div>*/}
                                        </div>

                                    </div>
                                    <div
                                        className="list-group mt-4"
                                        style={{
                                            cursor: 'pointer'
                                        }}>
                                        <div
                                            className="row col-md-12 list-group-item collor nav-item dropdown nav-link ml-0"
                                            data-toggle="collapse"
                                            data-target="#navbaDropdown"
                                            aria-controls="navbaDropdown"
                                            aria-expanded="true"
                                            aria-label="Toggle navigation"
                                            style={{
                                                backgroundColor: "#614126",
                                                color: "white"
                                            }}
                                            onClick={this.plusClicked}>

                                            <div className="col-md-0 fa fa-list-alt" aria-hidden="true"></div>
                                            <div
                                                className="col"
                                                style={{
                                                    textAlign: "left"
                                                }}>Categories</div>
                                            <div className="row">
                                                <div className="mr-1">{this.state.plus}</div>
                                            </div>
                                        </div>

                                        <div className="collapse show" id="navbaDropdown">

                                            <div
                                                onClick={this
                                                    .openCategory
                                                    .bind(this, 'all')}
                                                className=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                    background: " #FFF8DC"
                                                }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                        textAlign: "left"
                                                    }}>All</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this.state.display.length}</div>
                                                </div>
                                            </div>

                                            {brr.map((r) => {

                                                return <EachListItem
                                                    key={`boot${r.details.category}`}
                                                    completeArray={this.state.display}
                                                    categoryName={r.details.category}
                                                    openByCategory={this
                                                        .openCategory
                                                        .bind(this, r.details.category)} />
                                            })
                                            }



                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div>
                                        {this.state.landingView && this.state.categoryClicked
                                            ? <LandingView show={this.state.passBorrowed} wish={this.state.passWish} />
                                            : <Category
                                                categoryCrossClicked={this.closeCategory}
                                                data={this.state.display}
                                                selected={this.state.currentlyClicked}
                                                isSearchClicked={this.state.searchClicked} />}
                                    </div>
                                    <div>
                                        {this.state.borrowedClicked && this.state.passBorrowed
                                            ? <BorrowedSlider borrowCrossClicked={this.closeBorrowed} />
                                            : null}
                                    </div>
                                    <div>
                                        {this.state.wishlistClicked && this.state.passWish
                                            ? <WishedBooks wishCrossClicked={this.closeWishlist} />
                                            : null}
                                    </div>
                                    <div>
                                        {this.state.landingView && this.state.searchClicked
                                            ? <LandingView show={this.state.passBorrowed} wish={this.state.passWish} />
                                            : <SearchResults
                                                divName={this.state.searchArg}
                                                closeSearch={this.closeSearch}
                                                result={this.state.sortedData}
                                                isSearchClicked={this.state.searchClicked}
                                                searchCrossClicked={this.closeSearch} />}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <br /><br />
                    {/*<Footer />*/}
                </div>
            </div>

        )

    }

}

export default BootHeader;