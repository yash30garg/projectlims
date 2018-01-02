import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search'; import './header.css';
// import PBooks from
// '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx'; import
// Footer from '../footer-component/footer.jsx';
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
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a ><img
            className="App-logo"
            src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"}
            alt="My logo"
            align="left" /></a>
          <a className="navbar-brand" href="#">Mindtree Library</a>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <div className="col-lg-9">
              <div className="row offset-md-3">
                <div className="input-group">
                  <input type="text" id="key" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <Link to="/Search">
                      <button className="btn btn-primary" onClick={this.handle} type="button">Go!</button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <ul className="navbar-nav ml-auto">

              <li className="nav-item active"></li>
              <li className="nav-item">
                <a className="nav-link" href="#">Wishlist
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Profile
                </a>
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="#">Preferences</a>
                  <a className="dropdown-item" href="#">Settings</a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">Logout</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>

      </div>

    )
  }
}

export default Header;