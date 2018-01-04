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
        display:[],
        showLanding:true,
        currentlyClicked:"",
        categoryClicked:false

    }
    componentDidMount() {
        axios
            .get('https://api.myjson.com/bins/15iomb')
            .then(res => {
                this.setState({display: res.data.booksArray});
                console.log(this.state.display);
            })
    }

   openCategory=(arg)=>
   {
     console.log(arg);
     this.setState({showLanding:false,
     currentlyClicked:arg,
     categoryClicked:true});
   }
   openBorrowedBooks=()=>
   {
     this.setState({showLanding:false,
     categoryClicked:false});
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
                                    <a onClick={this.openCategory.bind(this,'Java')} className="list-group-item  list-group-item-action" >
                                        <span class="fa fa-asterisk" aria-hidden="true" ></span>JAVA
                                        <div className="all" style={{paddingLeft : "228px"}}>
                                        <span class="badge  badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="java").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'Javascript')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Javascript
                                         <div className="all" style={{paddingLeft : "195px"}}>
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="javascript").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'c')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>C
                                         <div className="all" style={{paddingLeft : "252px"}}>
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="c").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'Angular')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Angular
                                         <div className="all" style={{paddingLeft : "205px"}}>
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="angular").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'React')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>React
                                         <div className="all" style={{paddingLeft : "224px"}}>
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="react").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'c++')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>C++
                                         <div className="all" style={{paddingLeft : "228px"}}>
                                        <span className="badge badge-pill badge-warning ml-1" >{this.state.display.filter(r=>r.details.category.toLowerCase()=="c++").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'c#')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>C#
                                         <div className="all" style={{paddingLeft : "243px"}}>
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="c#").length}</span>
                                        </div>
                                    </a>
                                    <a onClick={this.openCategory.bind(this,'Python')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Python
                                         <div className="all" style={{paddingLeft : "212px"}}>
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="python").length}</span>
                                        </div>
                                    </a>

                                    <a onClick={this.openCategory.bind(this,'jquery')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Jquery
                                         <div className="all" style={{paddingLeft : "215px"}}>
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="jquery").length}</span>
                                        </div>
                                    </a>

                                    <a onClick={this.openCategory.bind(this,'html & css')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Html & Css
                                         <div className="all" style={{paddingLeft : "180px"}}>
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category=="Html & Css").length}</span>
                                        </div>
                                    </a>

                                        <a onClick={this.openCategory.bind(this,'das')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Data 
                                         <div className="all" style={{paddingLeft : "225px"}}>
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="das").length}</span>
                                        </div>
                                    </a>

                                    {/*<a href="#" class="list-group-item list-group-item-action disabled">Vestibulum at eros</a>*/}
                                </div>

                                    <div className="list-group mt-4">
                                    <a                    
                                        className="list-group-item collor"
                                        style={{
                                        backgroundColor: "#8a0051",
                                        color: "white"
                                    }}>
                                        <span className="fa fa-cog" aria-hidden="true"></span>
                                        My Books</a>

                                        <a onClick={this.openBorrowedBooks} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Borrowed Books
                                         <div className="all">
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="das").length}</span>
                                        </div>
                                    </a>

                                        <a onClick={this.openCategory.bind(this,'das')} class="list-group-item  list-group-item-action">
                                        <span class="fa fa-asterisk" aria-hidden="true"></span>Requested Books
                                         <div className="all" >
                                        
                                        <span className="badge badge-pill badge-warning ml-1">{this.state.display.filter(r=>r.details.category.toLowerCase()=="das").length}</span>
                                        </div>
                                    </a>
                                    </div>
                            </div>

                            <div className="col-md-9">
                            {this.state.showLanding?<LandingView/>:this.state.categoryClicked?<Category data={this.state.display} selected={this.state.currentlyClicked}/>:<BorrowedSlider/>}

                              

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