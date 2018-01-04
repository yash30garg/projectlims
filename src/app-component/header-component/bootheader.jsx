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

var count = 0;
class BootHeader extends Component {

    state = {
        display: [],
        showLanding: true,
        currentlyClicked: ""
    }
    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/19krvn')
            .then(res => {
                this.setState({display: res.data.booksArray});
                console.log(this.state.display);
            })
    }
    openCategory = (arg) => {
        console.log(arg);
        this.setState({showLanding: false, currentlyClicked: arg});
    }

    render() {

        return (

            <div>

                <Header/>
                <br/>

                <section id="breadcrumb">
                    <div className="container-fluid">
                        <ol
                            className="breadcrumb bc"
                            style={{
                            backgroundColor: "#60003a"
                        }}>
                            <li className="active jinx">
                                <h4>Your Library</h4>
                            </li>
                            <li className="jinx2">Use the largest library in the world online or in person!
                                More about the Library.</li>
                        </ol>
                    </div>
                </section>

                <section id="main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">

                                <div className="list-group">
                                    <a
                                        className="list-group-item collor"
                                        style={{
                                        backgroundColor: "#8a0051",
                                        color: "white"
                                    }}>
                                        <span className="fa fa-cog" aria-hidden="true"></span>
                                        Categories</a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Java')}
                                        className="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>JAVA<div
                                            className='mov'
                                            style={{
                paddingRight: "220px"
            }}/>
                                        <span class="badge  badge-pill badge-warning">12</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Javascript')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Java Script<div
                                            className='mov'
                                            style={{
                paddingRight: "185px"
            }}/>
                                        <span className="badge badge-pill badge-warning">8</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Dot NET')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Dot Net<div
                                            className='mov'
                                            style={{
                paddingRight: "195px"
            }}/>
                                        <span className="badge badge-pill badge-warning">13</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Angular')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Angular<div
                                            className='mov'
                                            style={{
                paddingRight: "195px"
            }}/>
                                        <span className="badge badge-pill badge-warning">17</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'React')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>React<div
                                            className='mov'
                                            style={{
                paddingRight: "212px"
            }}/>
                                        <span className="badge badge-pill badge-warning">14</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Mongo')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Mongo<div
                                            className='mov'
                                            style={{
                paddingRight: "204px"
            }}/>
                                        <span className="badge badge-pill badge-warning">6</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'PHP')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>PHP<div
                                            className='mov'
                                            style={{
                paddingRight: "220px"
            }}/>
                                        <span className="badge badge-pill badge-warning">16</span>
                                    </a>
                                    <a
                                        onClick={this
                                        .openCategory
                                        .bind(this, 'Python')}
                                        class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Python<div
                                            className='mov'
                                            style={{
                paddingRight: "200px"
            }}/>
                                        <span className="badge badge-pill badge-warning">14</span>
                                    </a>

                                    {/*<a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>*/}
                                </div>

                                <br/>

                            </div>

                            <div className="col-md-9">
                                {this.state.showLanding
                                    ? <LandingView/>
                                    : <Category data={this.state.display} selected={this.state.currentlyClicked}/>}
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