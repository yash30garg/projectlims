import React, { Component } from 'react';
import '../../../logo.svg';
import '../../App.css';
import './AlternateHeader.css'
import { Link } from 'react-router-dom';
import {user_name} from '../../App'
// import {url} from '../header'
import {url} from '../../App'
import {authContext} from '../../../adalConfig.js'
// let user_name = localStorage.getItem('user-name')
class AlternateHeader extends Component {
constructor(props)
{
  super(props);
  this.state={
    greet:"Hi, ",
    search:'',

  }
}
  logout(e) {
    e.preventDefault();
    localStorage.clear();
    sessionStorage.clear();
    authContext.logOut();
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

           
            src={require("../../../Assets/Images/final_header.jpg")}
            alt="My logo"
            align="left" onClick={(e) => { e.preventDefault(); window.location = "/#/" }} />
            
          <Link to="/">
            <span id="projectTitle" className="navbar-brand" style={{ color: "white",paddingLeft:'15px', fontSize : "23px", marginBottom : "15px"  }}>Mindtree Library</span>
          </Link>

          <div className="offset-md-1 col-lg-6 col-md-10">
              <div>
              <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="input-group">
                  <input type="text" id="key" className="form-control" style={{ alignSelf: "center" }} placeholder="Search for..." />
                  {// eslint-disable-next-line
                  <button className="btn btn-primary" type="button" className="btn btn-primary" style={{ backgroundColor: "#CD853F", borderColor: "#fff" }} >Go!</button>}
                </div>
                </Link>
              </div>
            </div>  
         <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ml-auto">


               
              <li className="dropdown " style={{color:"white"}}>

                <div data-toggle="dropdown">{this.state.greet} {user_name}<span style={{paddingRight:"15px"}}></span>
                <img alt="" className="inset" src={url} />

                <span className="dropdown-toggle"></span></div>
                <ul className="dropdown-menu dropdown-menu-right" style={{backgroundColor:"#FFF8DC	"}} >
                  <li >
                    <Link to="/profile"><a className="dropdown-item" style={{color:'#614126', borderColor:'brown'}}><span className="fa fa-user"></span>Profile
                    </a></Link></li>
                      <div class="dropdown-divider" ></div>
                    <li >
                    <a onClick={this.logout} className="dropdown-item" style={{color:'#614126', borderColor:'brown' }}><span className="fa fa-lock"></span> Logout</a></li>
                </ul>
              </li>
        
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}
export default AlternateHeader;