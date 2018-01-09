import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
import SearchBar from './searchbar/searchBar.jsx';
// import Search from '../search-component/Search'; import './header.css';
// import PBooks from
// '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx'; import
// Footer from '../footer-component/footer.jsx';

import searchBar from './searchbar/searchBar.jsx';
import { Link } from 'react-router-dom';
export var key;
class Header extends Component {
  handle() {
    key = document.getElementById("key").value
    console.log(key)
  }
  render() {

    return (
      <div>

        
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" style={{backgroundColor:"#116466"}}>
          <button style={{backgroundColor:'#fff'}}
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span style={{backgroundColor:'#fff'}} className="navbar-toggler-icon"></span>
          </button>
          <a ><img
            className="App-logo"
            src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"}
            alt="My logo"
            align="left" /></a>
            <Link to="/home">
          <a className="navbar-brand" style={{color : "white"}}>Mindtree Library</a>
          </Link>
            <Link to="/search">
            <div className="col-lg-9">
              
              <div className="row offset-md-3">
                <div className="input-group">

                  <input type="text" id="key" className="form-control" size="800" style={{alignSelf: "center"}} placeholder="Search for..." />
                  <span className="input-group-btn">
                    
                      <button className="btn btn-outline-secondary" onClick={this.handle} type="button">Go!</button>
                    
                  </span>

                 

                  
                </div>
              </div>
            </div>
            </Link>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            
            <ul className="navbar-nav ml-auto">
            <img src="http://www.easydrawingtutorials.com/images/Tom/tom-step-last.jpg" height="50px" width="50px" className="rounded-circle"/>
    <Link to="/profile">
              
              <li className="nav-item active"></li>
              <li className="nav-item" >
                <a className="nav-link" style={{color : "white"}}>Profile
                </a>
              </li>
              </Link>

              <Link to="/">
              <li className="nav-item active"></li>
              <li className="nav-item" >
                <a className="nav-link" href="#" style={{color : "white"}}>LogOut
                </a>
              </li>
             </Link>

              

              {/*<li className="nav-item dropdown">
                <Link to="/profile">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color : "white"}}>
                  Profile
                </a>
                </Link>
                
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/profile">
                  <a className="dropdown-item" href="#">Preferences</a>
                  </Link>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Logout</a>
                </div>*/}
              {/*</li>*/}
            </ul>
          </div>
          
        </nav>
</div>

    )
  }
}

export default Header;