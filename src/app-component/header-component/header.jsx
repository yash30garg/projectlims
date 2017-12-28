import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search';
// import './header.css';
// import PBooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
//import Footer from '../footer-component/footer.jsx';
import $ from 'jquery';
import {Link} from 'react-router-dom';
class Header extends Component {

  componentDidMount() {
    $(".dropdown-button").dropdown();
    $(document).ready(function () {
      $('.button-collapse').sideNav({
        menuWidth: 300, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
      }
      );
      // START OPEN
    });

    $(".nav-wrapper").css("background-color", ' #8a0051');

  }

  render() {


    return (
      <div>

        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#yy!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>

        <ul id="dropdown2" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
        <nav>

          <ul id="slide-out" className="side-nav">
            <li><a href="#!">abcd</a></li>
          </ul>
          <a href="!#" data-activates="slide-out" className="button-collapse"><i className="material-icons">menu</i></a>


          <nav className="nav-extended">
            <div className="nav-wrapper">
              <a ><img className="App-logo" src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"} alt="My logo" align="left" /></a>
              <a href="#!" className="brand-logo center">Mindtree Library</a>
              <ul className="right hide-on-med-and-down">
                <Link to="/Search">
                <li>Search</li>
                </Link>
                <li><a href="sass.html">What's New?</a></li>

                <li><a className="dropdown-button" href="#!" data-activates="dropdown2">Book Categories <i className="material-icons right">arrow_drop_down</i></a></li>


                <li><a className="dropdown-button" href="#!" data-activates="dropdown1">Profile <i className="material-icons right">arrow_drop_down</i></a></li>
              </ul>
            </div>
          </nav>
        </nav>

        {/*<nav>
          <div class="nav-wrapper">
            <form>
              <div class="input-field">
                <input id="search" type="search" required />
                <label class="label-icon" for="search"><i class="material-icons">search</i></label>
                <i class="material-icons">close</i>
              </div>
            </form> 
          </div>
        </nav>*/}
        {/*<Search />*/}
        {/*<Pbooks />*/}

        <ul id="dropdown1" className="dropdown-content">
          <li><a href="#!">one</a></li>
          <li><a href="#!">two</a></li>
          <li className="divider"></li>
          <li><a href="#!">three</a></li>
        </ul>
      </div>
    );
  }
}

export default Header;
