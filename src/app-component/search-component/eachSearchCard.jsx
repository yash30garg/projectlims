import React, { Component } from 'react';
import { processedData } from './Search';
import $ from 'jquery';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';
import { search, sortTitle, sortAuthor, sortPublish, sortRating, selectFilter } from './Search'
import store from '../../state/store/store.js'
import { ToastContainer, toast } from 'react-toastify';
import { css } from 'glamor'
export var book, notify = 0;
// let users,
//     books;
export var changeNotify = () => {
    notify = 0;
}
class EachSearchCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wishlistIcon: true,
            requestIcon: true
        }
    }
        handle(res) {
        window.selected = res;
        window.showDetails = true;
        document.getElementById('detail').click();
        window.setClickProps = "searchDetailsCross"
    }

    changeToFilled = () => {
        this.setState({ wishlistIcon: false });
    }
    changeToEmpty = () => {
        this.setState({ wishlistIcon: true });
    }
    changeToUndo = () => {
        this.setState({ requestIcon: false });
    }
    changeToRequest = () => {
        this.setState({ requestIcon: true });
    }
    render()
    {
        return(
                            <div key={this.props.eachValue.isbn} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3 mb-3">

                    <div
                        id={this.props.eachValue.isbn}
                        className="card particular"
                        style={{
                            width: '200px',
                            height: '16rem',
                            paddingBottom: '0px'
                        }}>
                        <img
                            className="card-img-top"
                            src={this.props.eachValue.url}
                            alt="not available"
                            style={{ padding: "0px" }}
                            height="200vh" />
                        {/* {this.props.eachValue.details.rating} <span
                                                className="fa fa-star"
                                                style={{
                                                color: '#FFD700',
                                                fontSize:'13px',
                                                paddingTop:"0px"
                                            }}></span><br/>*/}
                        <div className="card-block card-text">
                            {this.props.eachValue.title}
                        </div>
                        <div className="overlay" style={{ backgroundColor: "rgba(97,65,38,0.9)" }} onClick={() => this.handle(this.props.eachValue)}>
                            <div className="text container-fluid" style={{ fontSize: '15px' }}>
                                {this.props.eachValue.title}<br />
                                <b>Author: </b> {this.props.eachValue.author}<br />
                                <b>Category: </b> {this.props.eachValue.category}<br /> {
                                    //eslint-disable-next-line
                                    [1, 2, 3, 4, 5].map(d => {
                                        if (this.props.eachValue.rating >= d)
                                            return <span
                                                key={`starred${d}`}
                                                className="fa fa-star mt-1"
                                                style={{
                                                    color: '#FFD700',
                                                    fontSize: '13px'
                                                }}></span>
                                    })}
                                <br />
                            </div>
                        </div>
                        <div className="buttonOverlay" style={{ backgroundColor: "white" }} >
                            <div className="buttonText container-fluid" style={{ fontSize: '20px' }}>
                                {this.state.wishlistIcon ? <span onClick={this.changeToFilled} className="fa fa-heart-o" style={{ color: '#CD853F' }}></span> : <span onClick={this.changeToEmpty} className="fa fa-heart" style={{ color: '#CD853F' }}></span>}
                            </div>
                        </div>
                        <div className="requestOverlay" style={{ backgroundColor: "white" }} >
                            <div className="requestText container-fluid" style={{ fontSize: '20px' }}>
                                {this.state.requestIcon ? <span onClick={this.changeToUndo} className="fa fa-plus-circle" style={{ color: '#CD853F', marginLeft: '30px' }}></span> : <span onClick={this.changeToRequest} className="fa fa-undo" style={{ color: '#CD853F', marginLeft: '30px' }}></span>}
                            </div>
                        </div>
                    </div>

                </div>
        )
    }
}
export default EachSearchCard;