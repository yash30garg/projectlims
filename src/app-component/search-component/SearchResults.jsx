import React, { Component } from 'react';
import { processedData } from './Search';
import $ from 'jquery';
// import axios from 'axios';
import { Link } from 'react-router-dom';
import './Search.css';
import {search,sortTitle,sortAuthor,sortPublish,sortRating} from './Search'
import store from '../../state/store/store.js'
export var book;
// let users,
//     books;
class SearchResults extends Component {
    constructor(props) {
        super(props);

        this.state={
        wishlistIcon:true,
        requestIcon:true
        }
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
        window.showDetails=true;
        document.getElementById('detail').click();
         window.setClickProps="searchDetailsCross"
    }

        changeToFilled=()=>
    {
        this.setState({wishlistIcon:false});
    }
    changeToEmpty=()=>
    {
        this.setState({wishlistIcon:true});
    }
    changeToUndo=()=>
    {
        this.setState({requestIcon:false});
    }
    changeToRequest=()=>
    {
        this.setState({requestIcon:true});
    } 

    render() {
        const a = processedData.map(res => {
            return (
                <div key={res.isbn} className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mt-3 mb-3">
                    
                        <div
                            id={res.isbn}
                            className="card particular"
                            style={{
                                width: '200px',
                                height: '16rem',
                                paddingBottom: '0px'
                            }}>
                            <img
                                className="card-img-top"
                                src={res.url}
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
                                {res.title}
                            </div>
                            <div className="overlay" style={{ backgroundColor: "rgba(97,65,38,0.9)" }} onClick={() => this.handle(res)}>
                                <div className="text container-fluid" style={{ fontSize: '15px' }}>
                                    {res.title}<br />
                                    <b>Author: </b> {res.author}<br />
                                    <b>Category: </b> {res.category}<br /> {
                                        //eslint-disable-next-line
                                        [1, 2, 3, 4, 5].map(d => {
                                            if (res.rating >= d)
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
                <div className="buttonOverlay" style={{backgroundColor : "white"}} >
                <div className="buttonText container-fluid" style={{fontSize:'20px'}}>
                {this.state.wishlistIcon?<span onClick={this.changeToFilled} className="fa fa-heart-o" style={{color:'#CD853F'}}></span>:<span onClick={this.changeToEmpty} className="fa fa-heart" style={{color:'#CD853F'}}></span>}
                </div>
                </div>
                <div className="requestOverlay" style={{backgroundColor : "white"}} >
                <div className="requestText container-fluid" style={{fontSize:'20px'}}>
                {this.state.requestIcon?<span onClick={this.changeToUndo} className="fa fa-plus-circle" style={{color:'#CD853F', marginLeft:'30px'}}></span>: <span onClick={this.changeToRequest} className="fa fa-undo" style={{color:'#CD853F', marginLeft:'30px'}}></span>}
                </div>
                </div>
                        </div>
                    
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
                        <h5 >{this.props.divName}<span style={{ float: 'right', cursor: 'pointer', paddingLeft: '70px' }} id="openHome" onClick={this.props.searchCrossClicked}>x</span></h5>
                    </ol>
                    {processedData.length>1?
                    <div>
                    <section className="sortInline">
                        <span className="sortName">
                            <span>Sort By</span>
                            </span>
                            <ul className="sortTypes">
                                <li id="defaultSearchResults" className="sortElement activeSortElement" onClick={(event)=> {
                                    event.preventDefault();
                                    store.dispatch({type:"STORE_SEARCH",payload: document.getElementById('key').value})
                                    event.target.className!=="sortELement activeSortElement"?
                                    search()
                                    :null
                                    }}><a>Default</a></li>
                                <li className="sortElement" onClick={(event) => {
                                    event.preventDefault();
                                    sortTitle();
                                    }}><a>Title</a></li>
                                <li className="sortElement" onClick = {(event) => {
                                    event.preventDefault()
                                    sortAuthor();
                                    }}><a>Author</a></li>
                                <li className="sortElement" onClick={(event)=>{
                                    event.preventDefault();
                                    sortPublish();
                                    }}><a>Publisher</a></li>
                                <li className="sortElement" onClick = {(event)=> {
                                    event.preventDefault();
                                    sortRating();
                                    }}><a>Rating</a></li>
                            </ul>
                
                    </section>
                    <div className="btn-group setDropdown">
                        <div className="dropdown">
                            <select className="btn btn-secondary dropdown-toggle" id="filter" onChange={this.selectFilter} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">

                                {/*<div className="dropdown-menu" aria-labelledby="dropdownMenu2">*/}
                                <option className="dropdown-item" >Filter By</option>
                                <option className="dropdown-item">5 Rated</option>
                                <option className="dropdown-item">4 and above Rated </option>
                                <option className="dropdown-item" >3 and above Rated</option>
                                <option className="dropdown-item">2 and above Rated</option>
                            </select>
                            {/*</div>*/}
                        </div>
                    </div>
                    </div>:null}
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