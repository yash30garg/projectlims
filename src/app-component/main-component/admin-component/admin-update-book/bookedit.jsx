import React, { Component } from 'react';
// import axios from 'axios';
// import './bookshow.css';
import { Link } from 'react-router-dom';
// import SearchResultsAdmin from '../../../search-component/SearchResults.jsx';
// import SearchAdmin from './searchadmin';
// import './searchdis.css';
import AdminFooter from '../admin-footer-component/adminFooter';
import { requireAuth } from '../../../isLoggedIn.js'
// import '../../../../../node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js'
import DashBoardStats from '../admin-stats/adminstats'

import AdminHeader from '../adminheader'

// var debounce = require('debounce');
// var count = 0,gotBook='';

class BookEdit extends Component {
    componentWillMount() {
        requireAuth(window.location.href)
    }

    findBook = (e) => {
        e.preventDefault();
        fetch('https://limsreactapi.azurewebsites.net/admineditbook/findBook', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            // form:{mid:"1042932"}
            body: JSON.stringify({
                isbn: document.getElementById('findBookIsbn').value,
            })
        })
            // .then(res=>(res.json))
            .then((res) => res.json())
            .then((res) => {
                if (res === "Book Doesn't Exist, Add It !!!")
                {
                    return res
                }
                    // alert(res)

                else {
                    // alert(res[0])
                    //console.log((res)
                    document.getElementById('editBookIsbn').value = res[0].isbn;
                    document.getElementById('editBookTitle').value = res[0].title;
                    document.getElementById('editBookAuthor').value = res[0].author;
                    document.getElementById('editBookPublisher').value = res[0].publisher;
                    document.getElementById('editBookRatings').value = res[0].rating;
                    document.getElementById('editBookCopies').value = res[0].copies;
                    document.getElementById('editBookUrl').value = res[0].url;
                    document.getElementById('editBookCategory').value = res[0].category;
                    document.getElementById('editBookYear').value = res[0].year;
                    
                }
            })
    }
    deleteBook = (e) => {
        e.preventDefault();
                    fetch('https://limsreactapi.azurewebsites.net/admindeletebook/removeBook', {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            // form:{mid:"1042932"}
            body: JSON.stringify({
                isbn: document.getElementById('findBookIsbn').value,
            })
        }).then((res)=>res.json())
        .then((res)=> {
            //console.log((res)
            if(res === "Book Deleted")
            {
                return res
            }
            // alert("Book Deleted")
            else{
                return res;
                // alert("Book Not Deleted")
        }
        })
}
    render() {

        return (

            <div>

                <AdminHeader />

                <header id="header" style={{ backgroundColor: '#333333' }}>

                    <div className="conatainer">
                        <div className="row">
                            <div className="col-md-10" style={{}}>
                                <h3
                                    className="dd"
                                    style={{
                                        textAlign: "left", marginTop: "7px",marginLeft:"2%"
                                    }}>
                                    <span className="fa fa-cog" aria-hidden="true"></span>DashBoard
                                    <small> Edit Books</small>
                                </h3>
                            </div>


                            <div className="dropdown create">
                                <button
                                    className="btn default dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false"
                                    style={{ color: 'white', backgroundColor: "#db9917", marginTop: "0px", height: "33px" }}>
                                    Manage Content
                                        <span className="caret" /></button>
                                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <Link to="/bookadd">
                                        <a class="dropdown-item" href="!#">Add Book(s)</a>
                                        </Link>
                                        <Link to="/bookedit">
                                        <a class="dropdown-item" href="!#">Edit Book(s)</a>
                                        </Link>
                                                                                <Link to="/manageuser">

                                    <a class="dropdown-item" href="!#">Manage User(s)
                                        </a>    
                                        </Link>                        
                                </div>
                            </div>

                        </div>

                    </div>
                </header>

                <section id="breadcrumb">
                    <div className="container-fluid">
                        <ol className="breadcrumb">
                            <li className="active" style={{ color: "black", fontSize: "20px" }}><b>DashBoard</b></li>
                        </ol>
                    </div>
                </section>

                <section id="main">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3">
                                <DashBoardStats />

                               </div>


                            <div className="col-md-9">


                                <div className="card">
                                    <h5 className="card-header">Edit Book : </h5>
                                    <br />
                                    <div className="card-body">
                                    <div className="col-md-12">

                                        <form action="/action_page.php">

                                        <div class="form-group" style={{textAlign : "left"}}>
                                                ISBN:
                                                <input type="text" class="form-control" id="findBookIsbn" />  
                                                </div>
                                                
                                            <div style={{textAlign:'left'}}><button type="button" onClick={this.findBook} class="btn btn-warning" style={{alignContent : "left"}}>Edit Book</button>

                                            <button onClick={this.deleteBook} class="btn btn-danger" style={{marginLeft :'30px'}}>Delete Book</button>
                                            
                                            </div>
                                            
                                                

                                            <div class="form-group " style={{textAlign : "left"}}>
                                                ISBN:
                                                <input type="text" class="form-control" id="editBookIsbn" />  
                                                </div>

                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Title:
                                                <input type="text" class="form-control" id="editBookTitle" />  
                                                </div>
                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Author:
                                                <input type="text" class="form-control" id="editBookAuthor" />  
                                                </div>
                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Category:
                                                <input type="text" class="form-control" id="editBookCategory" />  
                                                </div>
                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Publisher:
                                                <input type="text" class="form-control" id="editBookPublisher" />  
                                                </div>
                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Ratings:
                                                <input type="text" class="form-control" id="editBookRatings" />  
                                                </div>

                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Copies:
                                                <input type="text" class="form-control" id="editBookCopies" />  
                                                </div>

                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                URL:
                                                <input type="text" class="form-control" id="editBookUrl" />  
                                                </div>

                                                 <div class="form-group " style={{textAlign : "left"}}>
                                                Year:
                                                <input type="text" class="form-control" id="editBookYear" />  
                                                </div>

                                                
                                           <div style={{textAlign: "left"}}> <button type="submit" class="btn btn-warning" style={{textAlign :"left"}}>Update Book</button></div>
</form>




</div>
                                                </div>






                                            </div></div>
                                    </div>
                                </div>
                </section>
                            <br /><br />


                            <div>





                            </div>



                            <AdminFooter />


                        </div>









                        )

    }


}

export default BookEdit;


