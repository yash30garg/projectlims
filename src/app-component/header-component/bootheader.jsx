import React, {Component} from 'react';
import axios from 'axios';
import './bootheader.css';
import Footer from '../footer-component/footer.jsx';
import Header from './header.jsx';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';
var count = 0;
class BootHeader extends Component {

    state = {
        output: []
    }
    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/ds48n')
            .then(res => {
                this.setState({output: res.data});
            })
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
                                        href="#"
                                        className="list-group-item collor"
                                        style={{
                                        backgroundColor: "#8a0051",
                                        color: "white"
                                    }}>
                                        <span className="fa fa-cog" aria-hidden="true"></span>
                                        Categories</a>
                                    <a href="#" className="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>JAVA<div
                                            className='mov'
                                            style={{
                paddingRight: "220px"
            }}/>
                                        <span class="badge  badge-pill badge-warning">12</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Java Script<div
                                            className='mov'
                                            style={{
                paddingRight: "185px"
            }}/>
                                        <span className="badge badge-pill badge-warning">8</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Dot Net<div
                                            className='mov'
                                            style={{
                paddingRight: "195px"
            }}/>
                                        <span className="badge badge-pill badge-warning">13</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Angular<div
                                            className='mov'
                                            style={{
                paddingRight: "195px"
            }}/>
                                        <span className="badge badge-pill badge-warning">17</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>React<div
                                            className='mov'
                                            style={{
                paddingRight: "212px"
            }}/>
                                        <span className="badge badge-pill badge-warning">14</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Mongo<div
                                            className='mov'
                                            style={{
                paddingRight: "204px"
            }}/>
                                        <span className="badge badge-pill badge-warning">6</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>PHP<div
                                            className='mov'
                                            style={{
                paddingRight: "220px"
            }}/>
                                        <span className="badge badge-pill badge-warning">16</span>
                                    </a>
                                    <a href="#" class="list-group-item  list-group-item-action">
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

                                <ol
                                    className="breadcrumb"
                                    style={{
                                    backgroundColor: "#8a0051",
                                    color: "white"
                                }}>
                                    <li className="active jinx3">
                                        <h5>Whats's New</h5>
                                    </li>

                                </ol>

                                <div className="card">
                                    <h5
                                        className="card-header yoyo"
                                        style={{
                                        backgroundColor: "#8a0051",
                                        color: "white"
                                    }}>Top Rated Books</h5>
                                    <br/>
                                    <Pbooks/>
                                </div>

                                <div className="mana">
                                    <div class="card">
                                        <h5
                                            className="card-header yoyo"
                                            style={{
                                            backgroundColor: "#8a0051",
                                            color: "white"
                                        }}>
                                            Borrowed Books</h5>
                                        <div class="card-block">
                                            <BorrowedSlider/>

                                        </div>
                                    </div>
                                </div>
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