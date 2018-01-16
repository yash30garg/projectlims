import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search'; import './header.css';
// import PBooks from
// '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx'; import
// Footer from '../footer-component/footer.jsx';
import { AuthenticationContext } from 'react-adal'
import { authContext } from '../../adalConfig.js'
import './header.css'
import { Link } from 'react-router-dom';
export var key;
export let url = `https://social.mindtree.com/User%20Photos/Profile%20Pictures/m${localStorage.getItem('mid')}_MThumb.jpg?t=63646089488`;
let user_name = localStorage.getItem('user-name')
class Header extends Component {
constructor(props)
{
  super(props);
  this.state={
    greet:"Hi, "
  }
}

  handle() {
    key = document.getElementById("key").value
    console.log(key)
  }

  logout(e) {
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    authContext.logOut();

    // for (var i = 0; i < cookies.length; i++) {
    //     var cookie = cookies[i];
    //     var eqPos = cookie.indexOf("=");
    //     var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    //     document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    // }

  }
  componentWillMount()
  {
var d = new Date(); // for now
let hours=d.getHours(); // => 9
let minutes=d.getMinutes(); // =>  30
let seconds=d.getSeconds(); // => 51

if(hours>=4 && hours<12){
    this.setState({greet:"Good morning, "});
  }
  else if(hours>=12 && hours<16)
  {
    this.setState({greet:"Good afternoon, "});
  }
  else if(hours>=16 && hours<=23 )
  {
    this.setState({greet:"Good evening, "});
  }
  }
  render() {

    return (
      <div>
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded" style={{ backgroundColor: "#614126" }}>
          <button style={{ backgroundColor: '#fff' }}
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span style={{ backgroundColor: '#fff' }} className="navbar-toggler-icon"></span>
          </button>
          <img
            className="App-logo inset"


            src={"https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg "}
            alt="My logo"
            align="left" />
          <Link to="/">
            <span className="navbar-brand" style={{ color: "white",paddingLeft:'15px' }}>Mindtree Library</span>
          </Link>
          
            <div className="col-lg-5">
              <div>
              <Link to="/search" style={{ textDecoration: 'none' }}>
                <div className="input-group">
                  
                  <input type="text" id="key" className="form-control"  style={{ alignSelf: "center" }} placeholder="Search for..." />


                  <button className="btn btn-primary" onClick={this.handle} type="button" style={{ backgroundColor: "#614126", borderColor: "#fff" }} >Go!</button>
                </div>
                </Link>
              </div>
            </div>
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">
              <li className="dropdown" style={{color:"white"}}>
                <div data-toggle="dropdown">{this.state.greet} {user_name.substring(1, user_name.length-1)}<span style={{paddingRight:"15px"}}></span><img className="inset" src={url} />
                <span className="dropdown-toggle"></span></div>
                <ul className="dropdown-menu dropdown-menu-right" align="center">
                  <li className="well" align="center">
                    <Link to="/profile"><div href="#" className="btn btn-outline-primary">Profile</div></Link></li>
                    <hr/>
                    <li align="center">
                    <div href="#" onClick={this.logout} className="btn btn-outline-primary"><span className="fa fa-lock"></span> Logout</div></li>
                </ul>
              </li>
              {/*<Link to="/profile">
                <li className="nav-item" >
                  <div className="nav-link" href="#" style={{ color: "white" }}><span class="fa fa-user"></span>profile
                </div>
                </li>
              </Link>
              <Link to="/">
                <li className="nav-item active"></li>
                <li className="nav-item" onClick={this.logout} >
                  <div className="nav-link" href="#" style={{ color: "white" }}><span class="fa fa-lock"></span>logout
                </div>
                </li>
              </Link>*/}
            {/*<li className="nav-item dropdown">
                <Link to="/profile">
                  <div className="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{color : "white"}}>
                  Profile
                </div>
                </Link>           
                <div
                  className="dropdown-menu dropdown-menu-right"
                  aria-labelledby="navbarDropdownMenuLink">
                  <Link to="/profile">
                  <div className="dropdown-item" href="#">Preferences</div>
                  </Link>
                  <div className="dropdown-item" href="#">Settings</div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" href="#">Logout</div>
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