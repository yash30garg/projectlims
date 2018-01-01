import React, {Component} from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search'; import './header.css';
// import PBooks from
// '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx'; import
// Footer from '../footer-component/footer.jsx';
import {Link} from 'react-router-dom';
export var key;
class Header extends Component {
handle(){
  key=document.getElementById("key").value
  console.log(key)
}
  render() {

    return (
      <div>
        <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
          <button
            class="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <a ><img
            className="App-logo"
            src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg"}
            alt="My logo"
            align="left"/></a>
          <a class="navbar-brand" href="#">LiMS</a>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div class="col-lg-9">
          <div className="row offset-md-3">
              <div class="input-group">
                <input type="text" id="key" class="form-control" placeholder="Search for..."/>
                <span class="input-group-btn">
                  <Link to="/Search">
                    <button class="btn btn-primary" onClick={this.handle} type="button">Go!</button>
                  </Link>
                </span>
              </div>
            </div>
            </div>
            <ul class="navbar-nav ml-auto">

              <li class="nav-item active"></li>
              <li class="nav-item">
                <a class="nav-link" href="#">Wishlist
                </a>
              </li>

              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="http://example.com"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Profile
                </a>
                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Preferences</a>
                  <a class="dropdown-item" href="#">Settings</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Logout</a>
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
