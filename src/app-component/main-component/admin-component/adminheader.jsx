import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class AdminHeader extends Component {
    
render()
{

return (
                <nav class="navbar navbar-toggleable-md navbar-default" style={{backgroundColor:'#A9A9A9'}}>
                    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation"   >
                        <span class="navbar-toggler-icon"></span></button>
                    <button
                        class="navbar-toggler navbar-toggler-right"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarsExampleDefault"
                        aria-controls="navbarsExampleDefault"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span
                            class="navbar-toggler-icon"
                            style={{
                                backgroundColor: "black"
                            }}></span>
                    </button>
                     <img 
            className="App-logo inset" 

           
            src={require("../../../Assets/Images/final_header.jpg")}
            alt="My logo"
            align="left"  />
            
          <Link to="/">
            <span id="projectTitle" className="navbar-brand" style={{ color: "white",paddingLeft:'15px',fontSize:'23px', marginBottom : "15px"  }}>Mindtree Library</span>
          </Link>

                    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
                        <ul class="navbar-nav mr-auto">
                            <Link to="/adminDash">
                            <li class="nav-item active">
                                <a class="nav-link" href="!#">DashBoard
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            </Link>
                            <Link to="/adminbooks">
                                <li class="nav-item">
                                    <a class="nav-link" href="!#">Books</a>
                                </li>
                            </Link>
                            <Link to="/handleusers">
                                <li class="nav-item">
                                    <a class="nav-link " href="!#">Users</a>
                                </li>
                            </Link>

                            {/*<li class="nav-item dropdown">
                                <a
                                    class="nav-link dropdown-toggle"
                                    href="http://example.com"
                                    id="dropdown01"
                                    data-toggle="dropdown"
                                    aria-haspopup="true"
                                    aria-expanded="false">Dropdown</a>
                                <div class="dropdown-menu" aria-labelledby="dropdown01">
                                    <a class="dropdown-item" href="!#">Action</a>
                                    <a class="dropdown-item" href="!#">Another action</a>
                                    <a class="dropdown-item" href="!#">Something else here</a>
                                </div>
                            </li>*/}
                        </ul>

                        <ul class="navbar-nav navbar-right">
                            <li class="nav-item active">
                                <a class="nav-link" href="!#">
                                    Welcome Anirudh,
                                    <span class="sr-only">(current)</span>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="!#">LogOut</a>
                            </li>
                        </ul>

                    </div>
                </nav>

)
}
}
export default AdminHeader;