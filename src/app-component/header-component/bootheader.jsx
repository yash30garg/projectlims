import React, {Component} from 'react';
import axios from 'axios';
import './bootheader.css';
import Footer from '../footer-component/footer.jsx';
import Header from './header.jsx';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';
import Search from '../search-component/Search.jsx';
// import SearchResults from '../search-component/SearchResults.jsx';
import Details from './../BookDetails-Component/details';
import {LandingView} from './landingView';
import {Category} from './categoryView';
import WishedBooks from '../main-component/user-component/wishlist/wishlistComponent'
import LoadingEffect from './../loading-component/loading';
import {EachListItem} from './categoryList';
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
            arrayResults: []

        }
    }
    componentWillMount()
    {
        axios
            .get('https://api.myjson.com/bins/1a9rkj')
            .then(res => {
                this.setState({display: res.data.booksArray});
                console.log(this.state.display);
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
            wishlistClicked: false
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

    plusClicked = () => {
        if (check === "-") {
            check = "+";
            plus = (
                <div className="fa fa-plus"></div>
            )
            this.setState({plus: plus});
        } else {
            check = "-";
            plus = (
                <div className="fa fa-minus"></div>
            )
            this.setState({plus: plus});
        }
    }
    render() {
        let brr = [];
        let arr = this
            .state
            .display
            .sort((a, b) => {
                if (a.details.category.toUpperCase() > b.details.category.toUpperCase()) {
                    return 1;
                } else if (a.details.category.toUpperCase() < b.details.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i].details.category.toUpperCase() != arr[i + 1].details.category.toUpperCase()) {

                brr.push(arr[i]);
            }

        }
        if(arr.length!=0)
        {
        if (arr[arr.length - 1].details.category.toUpperCase() != arr[arr.length - 2].details.category.toUpperCase()) {
            brr.push(arr[arr.length - 1]);
        }
        }

        return (

            <div>

                <Header/>
                <div
                    className="bigshow"
                    style={{
                    backgroundColor: "#FFF8DC"
                }}>
                    {/*
                                <a

                                    style={{
                                    marginTop: '-8px'
                                }}
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'Java')}
                                    className="list-group-item  list-group-item-action" >
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Java
                                    <div
                                            className='mov'
                                            style={{
                                                paddingRight: "227px"
                                            }}>
                                    <span class="badge  badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "java")
                                            .length}</span></div>

                                </a>

                </section>*/}
                    <section id="main">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3">

                                    <div className="list-group">
                                        <a
                                            className="list-group-item collor"
                                            style={{
                                            backgroundColor: "#614126",
                                            color: "white"
                                        }}>
                                            <span className="fa fa-cog" aria-hidden="true"></span>
                                            My Books</a>

                                        <a
                                            onClick={this.openBorrowedBooks}
                                            class="list-group-item  list-group-item-action"
                                            style={{
                                            background: " #FFF8DC"
                                        }}>

                                            <span class="fa fa-arrow-right" aria-hidden="true"></span>
                                            Borrowed Books

                                        </a>

                                        <a
                                            onClick={this.openWishlist}
                                            class="list-group-item  list-group-item-action"
                                            style={{
                                            background: " #FFF8DC"
                                        }}>
                                            <span class="fa fa-arrow-right" aria-hidden="true"></span>Wishlist {/* <div className="all">

                                            <span className="badge badge-pill badge-warning ml-1">0</span>
                                        </div>*/}
                                        </a>

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

                                            <div className="col-md-0 fa fa-cog" aria-hidden="true"></div>
                                            <div
                                                className="col"
                                                style={{
                                                textAlign: "left"
                                            }}>Categories</div>
                                            <div className="row">
                                                <div className="mr-1">{this.state.plus}</div>
                                            </div>
                                        </div>

                                        <div class="collapse show" id="navbaDropdown">

                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'all')}
                                                class=" row list-group-item  list-group-item-action ml-0"
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
                                                    completeArray={this.state.display}
                                                    categoryName={r.details.category}
                                                    openByCategory={this
                                                    .openCategory
                                                    .bind(this, r.details.category)}/>
                                            })
}

                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'Javascript')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>Javascript</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "javascript")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'c')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>C</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "c")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'Angular')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>Angular</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "angular")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'React')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>React</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "react")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'c++')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>C++</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "c++")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'c#')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>C#</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "c#")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'Python')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>Python</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "python")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'jquery')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>Jquery</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "jquery")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'html & css')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>Html & Css</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "html & css")
                                                            .length}</div>
                                                </div>
                                            </div>
                                            <div
                                                style={{
                                                marginBottom: '-8px'
                                            }}
                                                onClick={this
                                                .openCategory
                                                .bind(this, 'das')}
                                                class=" row list-group-item  list-group-item-action ml-0"
                                                style={{
                                                background: " #FFF8DC"
                                            }}>
                                                <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                                <div
                                                    className="col"
                                                    style={{
                                                    textAlign: "left"
                                                }}>Data Analytics</div>
                                                <div className="row">
                                                    <div className="badge badge-pill badge-warning mr-3">{this
                                                            .state
                                                            .display
                                                            .filter(r => r.details.category.toLowerCase() == "das")
                                                            .length}</div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <a>
                                        {this.state.landingView && this.state.categoryClicked
                                            ? <LandingView show={this.state.passBorrowed} wish={this.state.passWish}/>
                                            : <Category
                                                categoryCrossClicked={this.closeCategory}
                                                data={this.state.display}
                                                selected={this.state.currentlyClicked}/>}</a>
                                    <a>
                                        {this.state.borrowedClicked && this.state.passBorrowed
                                            ? <BorrowedSlider borrowCrossClicked={this.closeBorrowed}/>
                                            : null}</a>
                                    <a>
                                        {this.state.wishlistClicked && this.state.passWish
                                            ? <WishedBooks wishCrossClicked={this.closeWishlist}/>
                                            : null}</a>

                                </div>
                            </div>
                        </div>
                    </section>
                    <br/><br/>
                    <Footer/>
                </div>
            </div>

        )

    }

}

export default BootHeader;