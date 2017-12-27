import React, { Component } from 'react';
  import '../../logo.svg';
  import '../App.css';
  import './header.css';
// import PBooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import $ from 'jquery';
class Header extends Component {

  componentDidMount()
{
    $(".dropdown-button").dropdown();
    $(document).ready(function(){
  $('.button-collapse').sideNav({
      menuWidth: 300, // Default is 300
      edge: 'left', // Choose the horizontal origin
      closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );
  // START OPEN
});

}

  render() {


    return (
      <div>

        
<ul id="dropdown1" class="dropdown-content">
  <li><a href="#!">one</a></li>
  <li><a href="#!">two</a></li>
  <li class="divider"></li>
  <li><a href="#!">three</a></li>
</ul>
<nav>

   <ul id="slide-out" className="side-nav">
     <li><a href="#!">abcd</a></li>
    </ul>
    <a href="#" data-activates="slide-out" class="button-collapse"><i class="material-icons">menu</i></a>

  <div class="nav-wrapper">
    <a href="#!" class="brand-logo">Logo</a>
    <ul class="right hide-on-med-and-down">
      <li><a href="sass.html">Sass</a></li>
      <li><a href="badges.html">Components</a></li>
    
      <li><a class="dropdown-button" href="#!" data-activates="dropdown1">Dropdown<i class="material-icons right">arrow_drop_down</i></a></li>
    </ul>
  </div>
</nav>

      </div>
    );
  }
}

export default Header;
