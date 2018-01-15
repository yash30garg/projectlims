import React, {Component} from 'react';
import './App.css';
import Search from './search-component/Search'
// import Admin from './main-component/admin-component/admin'
import SearchResults from '../app-component/search-component/SearchResults.jsx';
import BootHeader from '../app-component/header-component/bootheader.jsx';
// import Pages from '../app-component/main-component/admin-component/adminDashboard/pages.jsx';
import {BookDetails} from '../app-component/BookDetails-Component/bookDetails'
import DashBoard from  '../app-component/main-component/admin-component/adminDashboard/dashboard.jsx';
import Login from './main-component/login-component/login.jsx';
import { BrowserRouter,HashRouter, Route, Switch } from 'react-router-dom';
import { User } from './main-component/user-component/user';
import axios from 'axios';
import BookAdmin from '../app-component/main-component/admin-component/BookHandler/bookshow.jsx';
import HandleUsers from '../app-component/main-component/admin-component/adminDashboard/handleusers.jsx';
import Profile from '../app-component/main-component/user-component/profileView/prodetails.jsx';
import ProductDetails from '../productDetails/product.jsx';
import AboutUs from '../app-component/footer-component/AboutUs/aboutus.jsx';
import {requireAuth} from './isLoggedIn.js'
import { authContext } from '../adalConfig.js'

import { AuthenticationContext, adalGetToken, adalFetch } from 'react-adal';

let users;
window.display='';
window.wishlist=[];
class App extends Component {
  
  render() {
    console.log(authContext._user);
    localStorage.setItem('limsuser', JSON.stringify(authContext._user))
    console.log(localStorage.getItem('limsuser'))
    console.log(AuthenticationContext.adalGetToken);
    var UserDetails = JSON.parse(localStorage.getItem('limsuser'))
    let mid=UserDetails.userName.split("@");
    let res=mid[0].split("M")
    // alert(res[1])
    window.user=res[1];
    // alert(window.user);
     axios.get('https://api.myjson.com/bins/14x90j')
     .then(res=>{
         //output:res.data;
          window.users = res.data;
          if(window.users!==null){
                const b = window.users.filter((res) => res.user.mid === window.user)
                window.bbooks=b[0].borrowedbooks;
                console.log(window.bbooks.length)
          }
        });

    return (
      <HashRouter basename="/">
        <div className="App">
          <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/" exact component={User}/>
            <Route path="/search" exact component={Search}/>
            <Route path="/search/details" exact component={BookDetails}/>
            <Route path="/pdetails" exact component={ProductDetails}/>
            {/*<Route path="/admin" exact component={AdminLogin} />  */}
            <Route path="/adminbooks" exact component={BookAdmin} />
            <Route path="/handleusers" exact component={HandleUsers} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/admindash" exact component={DashBoard} />
            

          </Switch>

        </div>
      </HashRouter>
    );
  }
}

export default App;
