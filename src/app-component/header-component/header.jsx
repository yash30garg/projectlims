import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search';
// import './header.css';
// import PBooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
//import Footer from '../footer-component/footer.jsx';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks'
import { Link } from 'react-router-dom';
export var value = "javascript";

class Header extends Component {
  constructor() {
    super();
    this.state ={
      category: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    value = document.getElementById('category').value
    this.setState({category: value})
    console.log(this.state.category)
    console.log(value)
    
  }

  render() {

    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a ><img className="App-logo" src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"} alt="My logo" align="left" /></a>
          <a className="navbar-brand" href="#!">Mindtree Library</a>
          <ul className="navbar-nav">
          <li className="nav-item active nav-link">
                <Link to="/Search">
                  <div className="container">
                    <div className="input-group">
                      <input className="form-control rounded-0 py-2" type="search" placeholder="Enter your Search here" id="example-search-input" />
                      <span className="input-group-btn">
                        <button className="btn btn-outline-secondary fa fa-search" type="button">
                          Search
                        </button>
                      </span>
                    </div>
                  </div>
                  <span className="sr-only"><i className="fa fa-search"></i></span>
                </Link>
              </li>
              </ul>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#!">Wishlist  </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"> Profile </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#!">Preferences</a>
                  <a className="dropdown-item" href="#!">Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#!">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
<nav className="pad">
  <ul class="nav nav-pills">
  <li class="nav-item">
    <a class="nav-link">Categories :</a>
  </li>
  <li class="nav-item dropdown">
    <select id="category" class="nav-link active" onChange={this.handleChange} aria-haspopup="true" aria-expanded="false">
      <option value="all">All Books</option>
      <hr/>
      <option value="javascript">Javascript</option>
      <option value="angular">Angular</option>
      <option value="react">React</option>
    </select>
  </li>
  {/*<li class="nav-item dropdown">
    <select class="nav-link" aria-haspopup="true" aria-expanded="false">Categories
      <option class="dropdown-item" href="#!">All</option>
      <option class="dropdown-item" href="#!">Angular</option>
      <option class="dropdown-item" href="#!">React</option>
      <div class="dropdown-divider"></div>
      <option class="dropdown-item" href="#!">Javascript</option>
    </select>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#!">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" href="#!">Disabled</a>
  </li>*/}
</ul>
  </nav>
  
      </div>


    )
  }
}

export default Header;
