import React, { Component } from 'react';
import axios from 'axios';
import './bootheader.css';
import Footer from '../footer-component/footer.jsx';
import Header from './header.jsx';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';
import Search from '../search-component/Search.jsx';
// import SearchResults from '../search-component/SearchResults.jsx';
import Details from './../BookDetails-Component/details';
import { LandingView } from './landingView';
import { Category } from './categoryView';
import WishedBooks from '../main-component/user-component/wishlist/wishlistComponent'
import LoadingEffect from './../loading-component/loading';
import $ from 'jquery';
var count = 0,plus,check;
class BootHeader extends Component {
    constructor(){
       super(); 
plus=(<div className="fa fa-minus"></div>)
check="-";
    this.state = {
        display: [],
        landingView: true,
        currentlyClicked: "",
        categoryClicked: true,
        borrowedClicked: false,
        wishlistClicked: false,
        passBorrowed: false,
        passWish:false,
        plus:plus,
        arrayResults: []

    }
    }
    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/1a9rkj')
            .then(res => {
                this.setState({ display: res.data.booksArray });
                console.log(this.state.display);
            })

    }

    openCategory = (arg) => {
        this.setState({ landingView: false, currentlyClicked: arg, categoryClicked: true, borrowedClicked: false, passBorrowed:false, passWish:false, wishlistClicked:false });
    }
    closeCategory = () => {
        this.setState({ landingView: true, categoryClicked: true, borrowedClicked: false,passBorrowed:false,wishlistClicked:false, passWish:false });
    }
    openBorrowedBooks = () => {
        this.setState({ landingView: true, categoryClicked: true, borrowedClicked: true, passBorrowed:true, wishlistClicked:false, passWish:true });
    }

    closeBorrowed = () => {
        this.setState({ landingView: true, categoryClicked: true, borrowedClicked: false, passBorrowed:false, wishlistClicked:false ,passWish:false });
    }

    openWishlist=()=>{
        this.setState({ landingView: true, categoryClicked: true, wishlistClicked: true,passWish:true, borrowedClicked:false, passBorrowed:true });
    }

    closeWishlist=()=>
    {
        this.setState({ landingView: true, categoryClicked: true, wishlistClicked: false,passWish:false, borrowedClicked:false, passBorrowed:false  });
    }

     plusClicked=()=>
    {  
        if(check==="-")
        {
            check="+";
            plus=(<div className="fa fa-plus"></div>)
        this.setState({plus:plus});
        }
        else
        {
            check="-";
            plus=(<div className="fa fa-minus"></div>)
          this.setState({plus:plus});  
        }
    }
    render() {

        return (

            <div>

                <Header />
                <div className="bigshow" style={{backgroundColor : "#FFF8DC"}}>
                {/*<nav
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

                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                style={{
                                color: 'white'
                            }}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                style={{
                                color: 'white'
                            }}>Features</a>
                        </li>
                        <li class="nav-item">
                            <a
                                class="nav-link"
                                href="#"
                                style={{
                                color: 'white'
                            }}>Pricing</a>
                        </li>
                        <li class="nav-item dropdown">


                       
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
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Javascript {/*<div className="all" style={{paddingLeft : "187px"}}>

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
                                    <span class="fa fa-asterisk" aria-hidden="true"></span>Angular {/*<div className="all" style={{paddingLeft : "187px"}}>

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
                </nav>*/}
                <br />{/*<section id="breadcrumb">
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
                                            backgroundColor: "#614126",
                                            color: "white"
                                        }}>
                                        <span className="fa fa-cog" aria-hidden="true"></span>
                                        My Books</a>

                                    <a
                                        onClick={this.openBorrowedBooks}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-arrow-right" aria-hidden="true"></span>Borrowed Books

                                    </a>

                                    <a 
                                        onClick={this.openWishlist}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-arrow-right" aria-hidden="true"></span>Wishlist
                                       {/* <div className="all">

                                            <span className="badge badge-pill badge-warning ml-1">0</span>
                                        </div>*/}
                                    </a>
                                </div>
                                <div className="list-group mt-4" style={{ cursor: 'pointer' }}>
                                    <div
                                        className="row col-md-12 list-group-item collor nav-item dropdown nav-link ml-0" data-toggle="collapse" data-target="#navbaDropdown" aria-controls="navbaDropdown" aria-expanded="true" aria-label="Toggle navigation"
                                        style={{
                                            backgroundColor: "#614126",
                                            color: "white"
                                        }}
                                        onClick={this.plusClicked}>

                                        <div className="col-md-0 fa fa-cog" aria-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Categories</div>
                                        <div className="row">
                                        <div className="mr-1">{this.state.plus}</div>
                                        </div>
                                        </div>

                                    <div class="collapse show" id="navbaDropdown">

                                   
                                    <div onClick={this
                                        .openCategory
                                        .bind(this, 'Java')}
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Java</div>
                                        <div className="row">
                                        <div className="badge badge-pill badge-warning mr-3">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "java")
                                                .length}</div>
                                        </div>    
                                    </div>
                                    <div   
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Javascript')}


                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Javascript</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>C</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Angular</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>React</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>C++</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>C#</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Python</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Jquery</div>
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Html & Css</div>
                                        <div className="row">
                                        <div className="badge badge-pill badge-warning mr-3">{this
                                                .state
                                                .display
                                                .filter(r => r.details.category.toLowerCase() == "Html & Css")
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
                                        class=" row list-group-item  list-group-item-action ml-0">
                                        <div className="col-md-0 fa fa-arrow-right" area-hidden="true"></div>
                                        <div className="col" style={{textAlign:"left"}}>Data Analytics</div>
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
                                        ? <LandingView show={this.state.passBorrowed} wish={this.state.passWish} />
                                        : <Category categoryCrossClicked={this.closeCategory} data={this.state.display} selected={this.state.currentlyClicked} />}</a>
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
                <br /><br />
                <Footer />
                </div>
            </div>

        )

    }

}

export default BootHeader;