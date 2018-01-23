import React, { Component } from 'react';
import '../../logo.svg';
import '../App.css';
// import Search from '../search-component/Search'; import './header.css';
// import PBooks from
// '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx'; import
// Footer from '../footer-component/footer.jsx';
import { authContext } from '../../adalConfig'
import './header.css'
import { Link, withRouter } from 'react-router-dom';
import {user_name} from '../App'
import {connect} from 'react-redux'
import BootHeader from './bootheader'
// import Footer from '../footer-component/footer'
// import {storeSearch} from '../../state/action/searchAction.js'
import store from '../../state/store/store.js'
import {search} from '../search-component/Search'
export var key;
export let url = `https://social.mindtree.com/User%20Photos/Profile%20Pictures/m${localStorage.getItem('mid')}_MThumb.jpg?t=63646089488`;
// let user_name = localStorage.getItem('user-name')
var debounce = require('debounce');
class Header extends Component {
constructor(props)
{
  super(props);
  this.state={
    greet:"Hi, ",
    search:'',

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
search(e) {
  store.dispatch({type:"STORE_SEARCH",payload: document.getElementById('key').value})
  search()
}
  render() {

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
            align="left"  />
            
          <Link to="/">
            <span id="projectTitle" className="navbar-brand" style={{ color: "white",paddingLeft:'15px',fontSize:'23px', marginBottom : "15px"  }}>Mindtree Library</span>
          </Link>
          
            <div className="offset-md-1 col-lg-6 col-md-10">
              <div>
              {/*<Link to="/search" style={{ textDecoration: 'none' }}>*/}
                <div className="input-group">
                  
                  <input type="text" id="key" className="form-control" style={{ alignSelf: "center" }} placeholder="Search for..." onKeyUp={debounce((this.search), 1000)} autoFocus
                                    onKeyPress={event => {
                                            if (event.key === 'Enter') {
                                                store.dispatch({type:"STORE_SEARCH",payload:document.getElementById('key').value})
                                                search()
                                            }
                                        }}
                  />
                  <button className="btn btn-primary" 

                  onClick={(event)=>{this.setState({search:document.getElementById('key').value})
                    store.dispatch({type:"STORE_SEARCH", payload: document.getElementById('key').value})
                    search()
                    }} 
                  type="button" className="btn btn-primary" style={{ backgroundColor: "#CD853F", borderColor: "#fff" }} >Go!</button>
                </div>
                {/*</Link>*/}
              </div>
            </div>
            
          
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">


               
              <li className="dropdown " style={{color:"white"}}>

                <div data-toggle="dropdown">{this.state.greet} {user_name}<span style={{paddingRight:"15px"}}></span>
                <img className="inset" src={url} />

                <span className="dropdown-toggle"></span></div>
                <ul className="dropdown-menu dropdown-menu-right" style={{backgroundColor:"#FFF8DC	"}} >
                  <li >
                    <Link to="/profile"><a href="#" className="dropdown-item" style={{color:'#614126', borderColor:'brown'}}><span className="fa fa-user"></span>Profile
                    </a></Link></li>
                    <div class="dropdown-divider" >
                  </div>
                    <li > 
                    <a href="#" onClick={this.logout} className="dropdown-item" style={{color:'#614126', borderColor:'brown' }}><span className="fa fa-lock"></span> Logout</a></li>
                </ul>
              </li>
        
            </ul>
          </div>


       
  


        </nav>
        <BootHeader/>
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