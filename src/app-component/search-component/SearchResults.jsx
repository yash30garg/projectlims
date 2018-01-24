import React, { Component } from 'react';
import { processedData } from './Search';
import $ from 'jquery';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';
export var book;
// let users,
//     books;
class SearchResults extends Component {
    constructor(props) {
        super(props);
        // axios
        //     .get('https://api.myjson.com/bins/14x90j')
        //     .then(res => {
        //         this.setState({output: res.data});
        //         users = this.state.output;
        //         console.log(users)
        //         const b = users.filter((res) => res.user.mid === "1042948")
        //     });
    }

    handle(res) {
        window.selected = res;
    }
    render() {
        const a = processedData.map(res => {
            return (
                <div key={res.isbn} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3 mb-3">
                    <Link to="/search/details">
                        <div
                            id={res.isbn}
                            className="card particular"
                            style={{
                                width: '200px',
                                height: '16rem',
                                paddingBottom: '0px'
                            }} onClick={() => this.handle(res)}>
                            <img
                                className="card-img-top"
                                src={res.details.url}
                                alt="not available"
                                style={{ padding: "0px" }}
                                height="200vh" />
                            {/* {res.details.rating} <span
                                                className="fa fa-star"
                                                style={{
                                                color: '#FFD700',
                                                fontSize:'13px',
                                                paddingTop:"0px"
                                            }}></span><br/>*/}
                            <div className="card-block card-text">
                                {res.details.title}
                            </div>
                            <div className="overlay" style={{ backgroundColor: "rgba(97,65,38,0.9)" }}>
                                <div className="text container-fluid" style={{ fontSize: '15px' }}>
                                    {res.details.title}<br />
                                    <b>Author: </b> {res.details.author}<br />
                                    <b>Category: </b> {res.details.category}<br /> {
                                        //eslint-disable-next-line
                                        [1, 2, 3, 4, 5].map(d => {
                                            if (res.details.rating >= d)
                                                return <span
                                                    key={`starred${d}`}
                                                    className="fa fa-star mt-1"
                                                    style={{
                                                        color: '#FFD700',
                                                        fontSize: '13px'
                                                    }}></span>
                                        })}
                                    <br />
                                    <button
                                        className="btn btn-primary mt-3"
                                        style={{
                                            backgroundColor: 'white',
                                            color: "rgb(205,133,63)"
                                        }}
                                        onClick={this.request}>
                                        <b>Know More</b>
                                    </button>
                                </div>
                                {/*<div className="overlay">
                            <div className="text container-fluid">                          
                            <b>{res.details.title}</b><br/><br/>
                            <b>Author : </b>
                            {res.details.author}<br/><br/>
                            <b>Category: </b>
                            {res.details.category}<br/><br/>
                            {[1,2,3,4,5].map(d=>{
                              if(res.details.rating>=d)
                                return<span className="fa fa-star" style={{color:'white'}}></span>
                              else 
                                return<span className="fa fa-star" style={{color:'black'}}></span>
                            })}
                            <button className="btn mt-4" style={{backgroundColor:'white', color:'rgb(96, 0, 58)'}} onClick={this.request}><b>Request Book</b></button>*/}
                            </div>
                        </div>
                    </Link>
                </div>
            )
        });
        $(document).ready(function () {
    $('.contained section .sortTypes li a').click(function(e) {
        e.preventDefault();
        $('.contained section .sortTypes li.activeSortElement').removeClass('activeSortElement');

        var $parent = $(this).parent();
        $parent.addClass('activeSortElement');
        e.preventDefault();
    });
});
        return (
            <div>
                {this.props.isSearchClicked ? <div className="contained">
                    <ol className="breadcrumb" style={{ backgroundColor: "#614126", color: "white" }}  >
                        <h5 >{this.props.divName}<span style={{ float: 'right', cursor: 'pointer', paddingLeft: '70px' }} onClick={this.props.searchCrossClicked}>x</span></h5>
                    </ol>
                    <section className="sortInline">
                        <span className="sortName">
                            <span>Sort By</span>
                            </span>
                            <ul className="sortTypes">
                                <li className="sortElement activeSortElement"><a>Relevance</a></li>
                                <li className="sortElement"><a>Title</a></li>
                                <li className="sortElement"><a>Author</a></li>
                                <li className="sortElement"><a>Publisher</a></li>
                                <li className="sortElement"><a>Rating</a></li>
                            </ul>
                    </section>
                    <div className="container-fluid">
                        <div className="row">
                            {a}
                        </div>
                    </div>
                </div> : null}
            </div>
            /*<div id="myModal" className="modal">
      <span className="close">&times;</span>
      <div className="container">
      <div className="row">
      <div className="col-md-6">
      <img className="modal-content" id="img01" height="500px" width="400px"/>
      </div>
      <div className="col-md-6">
      <div id="caption">
      </div>
      </div>
      </div>
      </div>
    </div>*/

        );

    }
}


export default SearchResults;