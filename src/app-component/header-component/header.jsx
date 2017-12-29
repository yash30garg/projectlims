import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search';
// import './header.css';
// import PBooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
//import Footer from '../footer-component/footer.jsx';

import { Link } from 'react-router-dom';
class Header extends Component {

  handleCategory = () => {
    if (document.getElementById("cat").style.display === "none")
      document.getElementById("cat").style.display = "block";
    else
      document.getElementById("cat").style.display = "none"
  }
  handleProfile = () => {
    if (document.getElementById("pro").style.display === "none")
      document.getElementById("pro").style.display = "block";
    else
      document.getElementById("pro").style.display = "none"
  }
  

  render() {


    return (
      <div>

        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">Web-Tech</a></li>
          <li><a href="#yy!">Java</a></li>
          <li className="divider"></li>
          <li><a href="#!">All</a></li>
        </ul>

        <ul id="profile" className="dropdown-content">
          <li><a href="#!">Settings</a></li>
          <li><a href="#!">Preferences</a></li>
          <li className="divider"></li>
          <li><a href="#!">Logout</a></li>
        </ul>
        <nav>
          <div>

            <a href="#!" className="brand-logo">Library</a>
            <ul id="slide-out" className="side-nav">
              <li><a href="sass.html">What's New?</a></li>
              <li><a className="collapsible-header active waves-effect waves-teal" onClick={this.handleCategory}>Book Categories <i className="material-icons right">arrow_drop_down</i></a>
                <div id="cat" className="collapsible-body" style={{ display: "none" }}>
                  <ul>
                    <li><a href="#!">Web-Tech</a></li>
                    <li><a href="#yy!">Java</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">All</a></li>
                  </ul>
                </div>
              </li>
              <li><a className="collapsible-header active waves-effect waves-teal" onClick={this.handleProfile}>Profile <i className="material-icons right">arrow_drop_down</i></a>
                <div id="pro" className="collapsible-body" style={{ display: "none" }}>
                  <ul>
                    <li><a href="#!">Settings</a></li>
                    <li><a href="#!">Preferences</a></li>
                    <li className="divider"></li>
                    <li><a href="#!">Logout</a></li>
                  </ul>
                </div>
              </li>
              {/*<li><a className="dropdown-button" href="#!" data-activates="dropdown1">Book Categories <i className="material-icons right">arrow_drop_down</i></a></li>
              <li><a className="dropdown-button" href="#!" data-activates="profile">Profile <i className="material-icons right">arrow_drop_down</i></a></li>*/}
            </ul>
            <a href="!#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>
            <ul className="right">
              <li>
                <Link to="/Search">
                  <i className="material-icons left">search</i>Search
              </Link>
              </li>
            </ul>
          </div>


          <nav>
            <div className="nav-wrapper hide-on-med-and-down">
              <a ><img className="App-logo" src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"} alt="My logo" align="left" /></a>
              <ul className="left hide-on-med-and-down"><a href="#!" className="brand-logo" style={{ paddingLeft: "10px" }}>Mindtree Library</a></ul>
              <ul className="right hide-on-med-and-down">
                <li><Link to="/Search">
                  <i className="material-icons left">search</i>Search
                </Link></li>
                <li><a href="sass.html">What's New?</a></li>
               <li><a className="dropdown-button" href="#!" data-activates="dropdown1" >Book Categories <i className="material-icons right">arrow_drop_down</i></a></li>
         
              
              
                <li><a className="dropdown-button" href="#!" data-activates="profile">Profile <i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>
        </nav>


      </div>
    );
  }
}

export default Header;
