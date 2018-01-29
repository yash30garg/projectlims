import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
import Img from 'react-image';
// import Search from '../search-component/Search'; import './header.css';
// import PBooks from
// '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx'; import
// Footer from '../footer-component/footer.jsx';
import { authContext } from '../../adalConfig'
import './header.css'
import { Link, withRouter } from 'react-router-dom';
import { user_name } from '../App'
import { connect } from 'react-redux'
import BootHeader from './bootheader'
import LoadingEffect from '../loading-component/loading'
// import Footer from '../footer-component/footer'
// import {storeSearch} from '../../state/action/searchAction.js'
import store from '../../state/store/store.js'
import { search } from '../search-component/Search'
import Category from './categoryView';
export var key;
export let url = `https://social.mindtree.com/User%20Photos/Profile%20Pictures/m${localStorage.getItem('mid')}_MThumb.jpg?t=63646089488`;
// let user_name = localStorage.getItem('user-name')
var debounce = require('debounce');
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greet: "Hi, ",
      search: '',
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
  componentWillMount() {
    var d = new Date(); // for now
    let hours = d.getHours(); // => 9

    if (hours >= 4 && hours < 12) {
      this.setState({ greet: "Good morning, " });
    }
    else if (hours >= 12 && hours < 16) {
      this.setState({ greet: "Good afternoon, " });
    }
    else if (hours >= 16 && hours <= 23) {
      this.setState({ greet: "Good evening, " });
    }
  }
  search(e) {
    store.dispatch({ type: "STORE_SEARCH", payload: document.getElementById('key').value })
    search()
  }

  render() {
    let brr = [];
    let arr = window.display
      .sort((a, b) => {
        if (a.category.toUpperCase() > b.category.toUpperCase()) {
          return 1;
        } else if (a.category.toUpperCase() < b.category.toUpperCase()) {
          return -1;
        } else {
          return 0;
        }
      });
    if (arr.length !== 0) {
      brr.push(arr[0]);
    }
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i].category.toUpperCase() !== arr[i + 1].category.toUpperCase()) {

        brr.push(arr[i + 1]);
      }
    }
    var titleDup = () => {
      let titleD = []
      let arr = window.display
        .sort((a, b) => {
          if (a.title.toUpperCase() > b.title.toUpperCase()) {
            return 1;
          } else if (a.title.toUpperCase() < b.title.toUpperCase()) {
            return -1;
          } else {
            return 0;
          }
        });
      if (arr.length !== 0) {
        titleD.push(arr[0]);
      }
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].title.toUpperCase() !== arr[i + 1].title.toUpperCase()) {

          titleD.push(arr[i + 1]);
        }
      }
      titleD.map((res) => {
        listCategory.push(<option value={res.title}></option>)
      })
    }
    var authorDup = () => {
      let authorD = []
      let arr = window.display
        .sort((a, b) => {
          if (a.author.toUpperCase() > b.author.toUpperCase()) {
            return 1;
          } else if (a.author.toUpperCase() < b.author.toUpperCase()) {
            return -1;
          } else {
            return 0;
          }
        });
      if (arr.length !== 0) {
        authorD.push(arr[0]);
      }
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].author.toUpperCase() !== arr[i + 1].author.toUpperCase()) {

          authorD.push(arr[i + 1]);
        }
      }
      authorD.map((res) => {
        listCategory.push(<option value={res.author}></option>)
      })
    }
    var publisherDup = () => {
      let publisherD = []
      let arr = window.display
        .sort((a, b) => {
          if (a.publisher.toUpperCase() > b.publisher.toUpperCase()) {
            return 1;
          } else if (a.publisher.toUpperCase() < b.publisher.toUpperCase()) {
            return -1;
          } else {
            return 0;
          }
        });
      if (arr.length !== 0) {
        publisherD.push(arr[0]);
      }
      for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i].publisher.toUpperCase() !== arr[i + 1].publisher.toUpperCase()) {

          publisherD.push(arr[i + 1]);
        }
      }
      publisherD.map((res) => {
        listCategory.push(<option value={res.publisher}></option>)
      })
    }
    let listCategory = [];
    brr.map(res => {
      listCategory.push(<option value={res.category}></option>)
    })
    titleDup();
    publisherDup();
    authorDup();

    return (
      <div >
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
            src={require("../../Assets/Images/final_header.jpg")}
            alt="My logo"
            align="left" onClick={(e) => { e.preventDefault(); window.location = "/#/" }} />

          <Link to="/">
            <span id="projectTitle" className="navbar-brand" style={{ color: "white", paddingLeft: '15px', fontSize: '23px', marginBottom: "15px" }}>Mindtree Library</span>
          </Link>

          <div className="offset-md-1 col-lg-6 col-md-10">
            <div>
              {/*<Link to="/search" style={{ textDecoration: 'none' }}>*/}
              <div className="input-group">

                <input list="browsers" type="text" id="key" className="form-control" style={{ alignSelf: "center" }} placeholder="Search for..." onKeyUp={debounce((this.search), 2000)} autoFocus
                  onChange={debounce((event) => {
                    event.preventDefault();
                    store.dispatch({ type: "STORE_SEARCH", payload: document.getElementById('key').value })
                    search()
                  }, 2000)}
                  onKeyPress={debounce((event) => {
                    if (event.key === 'Enter') {
                      store.dispatch({ type: "STORE_SEARCH", payload: document.getElementById('key').value })
                      search()
                    }
                  }, 500)}
                />
                <datalist id="browsers">
                  {listCategory}
                </datalist>
                <button className="btn btn-primary"

                  onClick={(event) => {
                    this.setState({ search: document.getElementById('key').value })
                    store.dispatch({ type: "STORE_SEARCH", payload: document.getElementById('key').value })
                    search()
                  }}
                  type="button" className="btn btn-primary" style={{ backgroundColor: "#CD853F", borderColor: "#fff" }} >Go!</button>
              </div>
              {/*</Link>*/}
            </div>
          </div>


          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">



              <li className="dropdown " style={{ color: "white" }}>

                <div data-toggle="dropdown">{this.state.greet} {user_name}<span style={{ paddingRight: "15px" }}></span>
                  {/*<img className="inset" src={url} />*/}
                  <Img className="inset" src={url}  loader={<LoadingEffect/>}  />

                    <span className="dropdown-toggle"></span></div>
                  <ul className="dropdown-menu dropdown-menu-right" style={{ backgroundColor: "#FFF8DC	" }} >
                    <li >
                      <Link to="/profile"><a href="#" className="dropdown-item" style={{ color: '#614126', borderColor: 'brown' }}><span className="fa fa-user"></span>Profile
                    </a></Link></li>
                    <div class="dropdown-divider" >
                    </div>
                    <li >
                      <a href="#" onClick={this.logout} className="dropdown-item" style={{ color: '#614126', borderColor: 'brown' }}><span className="fa fa-lock"></span> Logout</a></li>
                  </ul>
              </li>

            </ul>
          </div>






        </nav>
          <BootHeader />
      </div>
        )
  }
}
// const mapStateToProps = (state) => {
//   return {}
// }
// const mapDispatchToProps = (dispatch) => {
//   return {
//     storeSearchToRedux : (obj) => {
//       dispatch(storeSearch(obj))
//     }
//   }
// }
// export default connect(mapDispatchToProps)(withRouter(Header));
export default Header;