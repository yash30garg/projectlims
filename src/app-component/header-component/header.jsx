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

<<<<<<< HEAD
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

=======
<nav class="navbar navbar-toggleable-md navbar-light bg-faded">
  <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <a class="navbar-brand" href="#">Navbar</a>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>
>>>>>>> 441aa0fbde3b09dec923f00cf4cd5243e96ef777

      </div>
    

    )}}

export default Header;
