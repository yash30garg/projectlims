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
import LoadingEffect from './../loading-component/loading';
var count = 0;
class BootHeader extends Component {

    state = {
        display: [],
        landingView: true,
        currentlyClicked: "",
        categoryClicked: true,
        borrowedClicked: false,
        arrayResults: []

    }
    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/1a9rkj')
            .then(res => {
                this.setState({display: res.data.booksArray});
                console.log(this.state.display);
            })

    }

    openCategory = (arg) => {
        console.log(arg);
        this.setState({landingView: false, currentlyClicked: arg, categoryClicked: false, borrowedClicked: false});
    }
    openBorrowedBooks = () => {
        this.setState({landingView: true, categoryClicked: true, borrowedClicked: true});
    }

    render() {

        return (

            <div>

                <Header/>
                <nav
                    class="navbar navbar-toggleable-md navbar-light bg-faded"
                    style={{
                    backgroundColor: "#26a69a",
                    color: "white"
                }}>
                    <ul
                        class="navbar-nav features"
                        style={{
                        color: 'white'
                    }}>
                       
                        <li class="nav-item dropdown mega-dropdown">
                            <a
                                class="nav-link dropdown-toggle"
                                style={{
                                color: 'white',
                                backgroundColor: "#26a69a"
                            }}
                                href="http://example.com"
                                id="navbarDropdownMenuLink"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false">
                                Categories
                            </a>
                            <div
                                class="dropdown-menu"
                                aria-labelledby="navbarDropdownMenuLink"
                                style={{
                                width: '250px',
                                backgroundColor: "#116466"
                            }}>
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
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'Javascript')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Javascript {/*<div className="all" style={{paddingLeft : "187px"}}>*/}

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "javascript")
                                            .length}</span>

                                </a>
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'c')}
                                    class="list-group-item  list-group-item-action" >
                                    <span class="fa fa-asterisk" aria-hidden="true" ></span>C

                                    <span className="badge badge-pill badge-warning ml-1" >{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "c")
                                            .length}</span>

                                </a>
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'Angular')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Angular {/*<div className="all" style={{paddingLeft : "187px"}}>*/}

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "angular")
                                            .length}</span>

                                </a>
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'React')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>React

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "react")
                                            .length}</span>

                                </a>
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'c++')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>C++

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "c++")
                                            .length}</span>

                                </a>
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'c#')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>C#

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "c#")
                                            .length}</span>

                                </a>
                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'Python')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Python

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "python")
                                            .length}</span>

                                </a>

                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'jquery')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Jquery

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "jquery")
                                            .length}</span>

                                </a>

                                <a
                                    
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'html & css')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Html & Css

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category == "Html & Css")
                                            .length}</span>

                                </a>

                                <a
                                    
                                    style={{
                                    marginBottom: '-8px'
                                }}
                                    onClick={this
                                    .openCategory
                                    .bind(this, 'das')}
                                    class="list-group-item  list-group-item-action">
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Data Analytics

                                    <span className="badge badge-pill badge-warning ml-1">{this
                                            .state
                                            .display
                                            .filter(r => r.details.category.toLowerCase() == "das")
                                            .length}</span>

                                </a>
                            </div>
                        </li>
                    </ul>
                </nav>
                <br/> {/*<section id="breadcrumb">
                    <div className="container-fluid">
                        <ol
                            className="breadcrumb bc"
                            style={{
                            backgroundColor: "#116466"
                        }}>
                            <li className="active jinx">
                                <h4>Your Library</h4>
                            </li>
                            <li className="jinx2">Use the largest library in the world online or in person!
                                More about the Library.</li>
                        </ol>
                    </div>
                </section>*/}
                <section id="main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">

                                <div className="list-group">
                                    <a
                                        className="list-group-item collor"
                                        style={{
                                        backgroundColor: "#116466",
                                        color: "white"
                                    }}>
                                        <span className="fa fa-cog" aria-hidden="true"></span>
                                        My Books</a>

                                    <a
                                        onClick={this.openBorrowedBooks}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Borrowed Books
                                       
                                    </a>

                                    <a class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Requested Books
                                       {/* <div className="all">

                                            <span className="badge badge-pill badge-warning ml-1">0</span>
                                        </div>*/}
                                    </a>
                                </div>

                                <div className="list-group mt-4">
                                    <a
                                        className="list-group-item collor"
                                        style={{
                                        backgroundColor: "#116466",
                                        color: "white"
                                    }}>
                                        <span className="fa fa-cog" aria-hidden="true"></span>
                                        Categories</a>

                                    <a
                                        
                                        style={{
                                        marginTop: '-8px'
                                    }}
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Java')}
                                        className="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Java

                                        <span class="badge  badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "java")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Javascript')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Javascript

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "javascript")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'c')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>C

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "c")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Angular')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Angular

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "angular")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'React')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>React

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "react")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'c++')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>C++

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "c++")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'c#')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>C#

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "c#")
                                                .length}</span>

                                    </a>
                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Python')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Python

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "python")
                                                .length}</span>

                                    </a>

                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'jquery')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Jquery

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "jquery")
                                                .length}</span>

                                    </a>

                                    <a
                                        
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'html & css')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Html & Css

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category == "Html & Css")
                                                .length}</span>

                                    </a>

                                    <a
                                        
                                        style={{
                                        marginBottom: '-8px'
                                    }}
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'das')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Data Analytics

                                        <span className="badge badge-pill badge-warning ml-1">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "das")
                                                .length}</span>

                                    </a>
                                </div>

                            </div>

                            <div className="col-md-9">

                                <a>
                                    {this.state.landingView && this.state.categoryClicked
                                        ? <LandingView show={this.state.borrowedClicked}/>
                                        : <Category data={this.state.display} selected={this.state.currentlyClicked}/>}</a>
                                <a>
                                    {this.state.borrowedClicked
                                        ? <BorrowedSlider/>
                                        : null}</a>
                            </div>
                        </div>
                    </div>
                </section>
                <br/><br/>
                <Footer/>
            </div>

        )

    }

}

export default BootHeader;