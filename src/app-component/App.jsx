import React, {Component} from 'react';
import './App.css';
// import Search from './search-component/Search'
import SearchResults from './search-component/SearchResults'
// import Admin from './main-component/admin-component/admin'
// import SearchResults from '../app-component/search-component/SearchResults.jsx';
// import BootHeader from '../app-component/header-component/bootheader.jsx';
// import Pages from '../app-component/main-component/admin-component/adminDashboard/pages.jsx';
import {BookDetails} from '../app-component/BookDetails-Component/bookDetails'
import DashBoard from  '../app-component/main-component/admin-component/adminDashboard/dashboard.jsx';
import Login from './main-component/login-component/login.jsx';
import storeBbooks from '../state/store/storeBbooks';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import { User } from './main-component/user-component/user';
import axios from 'axios';
import BookAdmin from '../app-component/main-component/admin-component/BookHandler/bookshow.jsx';
import HandleUsers from '../app-component/main-component/admin-component/adminDashboard/handleusers.jsx';
import Profile from '../app-component/main-component/user-component/profileView/prodetails.jsx';
// import BookTor from '../app-component/booktor/booktor.jsx';
import AboutUs from '../app-component/footer-component/AboutUs/aboutus.jsx';
import { authContext } from '../adalConfig.js'
import BookAdd from '../../src/app-component/main-component/admin-component/admin-edit-book/bookadd'
import ContactUs from '../app-component/footer-component/ContactUs/contactus.jsx';
import BookEdit from '../app-component/main-component/admin-component/admin-update-book/bookedit.jsx'
// import { AuthenticationContext, adalGetToken, adalFetch } from 'react-adal';
export var user_name;
var req = require('request');
// let res;
// let users;
window.display='';
class App extends Component {
  constructor() {
    super();
    var Backlen=window.history.length;  
    // storeBbooks.dispatch({type:"STORE_BBOOKS",payload: []}) 
     window.history.go(-Backlen);
     this.state={
       bbooks:[],
       display:[],
       wishlist:[]
     }
  }
  
getBorrowedData(){
fetch('http://localhost:3005/borrowedBooks/getBooks',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body:JSON.stringify({
              mid:window.user
            })
})
.then((res)=>res.json())
.then((res)=>{
  // storeBbooks.dispatch({type:"STORE_BBOOKS",payload: res.data[0]})
  // alert("dispatch")
  this.setState({
    bbooks:res.data[0],
  wishlist:res.data[1]
  })
  // console.log(res.data[1])
  // window.bbooks=res.data.borrowedbooks;
  // console.log(window.bbooks);
})
}

  addUser=(UserDetails)=>{
    fetch('http://localhost:3005/user/addUser',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            // form:{mid:"1042932"}
            body:JSON.stringify({
                name:UserDetails.profile.name,
                email:UserDetails.userName,
                mid:window.user,
                role:"user",
                borrowedbooks:[],
                wishlist:[]
            })
        })
        .then((res)=>res.json())
        .then((res)=>{
          console.log(res)
          localStorage.setItem('token',res.token)
          localStorage.setItem('role',res.user[0].role)
          fetch('http://localhost:3005/books/getBooks',
        {
        method:'GET',
        headers:{'Content-Type': 'application/json',
          'Authorization': res.token
        }
      })
      .then((res)=>res.json())
      .then((res)=>{
  console.log("booksssssss");
  this.setState({
    display:res
  })
  console.log(res);

    })
          if(res.status==="Exists"){
          this.getBorrowedData();
          }
        })
  }
  componentWillMount()
    {
      var user=authContext._user;
      let mid=user.userName.split("@");
      let id=mid[0].split("M")
      // alert(res[1])
      window.user=id[1];
      this.addUser(user)
  //     fetch('http://localhost:3005/books/getBooks',
  //     {
  //       method:'GET',
  //       headers:{'Content-Type': 'application/json',
  //         'Authorization': localStorage.getItem('token')
  //       }
  //     })
  //     .then((res)=>res.json())
  //     .then((res)=>{
  // console.log("booksssssss");
  // this.setState({
  //   display:res
  // })
  // console.log(res);

  //   })
}

  render() {
    // alert("app")
    window.wishlist=this.state.wishlist;
    // window.bbooks=this.state.bbooks;
    window.display=this.state.display;
    storeBbooks.dispatch({type:"STORE_BBOOKS",payload:this.state.bbooks})
    // alert(window.display.length)
    console.log(authContext._user.profile.given_name);
    user_name = authContext._user.profile.given_name;
    localStorage.setItem('limsuser', JSON.stringify(authContext._user))
    localStorage.setItem('user-name',JSON.stringify(authContext._user.profile.given_name))
    console.log(localStorage.getItem('limsuser'))
    console.log(localStorage.getItem('adal.access.token.keyfa61fc30-ea79-4d93-8038-65273b42c71c'))
    // let value ="Bearer" + localStorage.getItem('adal.access.token.keyfa61fc30-ea79-4d93-8038-65273b42c71c')
    // console.log(`https://graph.microsoft.com/beta/me/photo/${value}`)
    var UserDetails = JSON.parse(localStorage.getItem('limsuser'))
    // this.getData();
    localStorage.setItem('mid',window.user)
    
    // alert(window.user);
    //  axios.get('https://api.myjson.com/bins/14x90j')
    //  .then(res=>{
    //      //output:res.data;
    //       window.users = res.data;
    //       if(window.users!==null){
    //             const b = window.users.filter((res) => res.user.mid === window.user)
    //             if(b.length!==0){
    //             window.bbooks=b[0].borrowedbooks;
    //             localStorage.setItem('bbooks',JSON.stringify(window.bbooks));
    //           }
    //           else{
    //             const c = window.users.filter((res) => res.user.mid === "1042948")
    //             window.bbooks=c[0].borrowedbooks;
    //             localStorage.setItem('bbooks',JSON.stringify(window.bbooks));                
    //           }
    //       }
    //     });

    return (
      <HashRouter basename="/">
        <div className="App" id="App">
          <Switch>
            <Route path="/login" exact component={Login}/>
            <Route path="/" exact component={User}/>
            <Route path="/search" exact component={SearchResults}/>
            <Route path="/search/details" exact component={BookDetails}/>
            {/*<Route path="/pdetails" exact component={ProductDetails}/>*/}
            {/*<Route path="/admin" exact component={AdminLogin} />  */}
            <Route path="/adminbooks" exact component={BookAdmin} />
            <Route path="/handleusers" exact component={HandleUsers} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/aboutus" exact component={AboutUs} />
            <Route path="/admindash" exact component={DashBoard} />
            <Route path="/contactus" exact component={ContactUs} />
            <Route path="/bookadd" exact component={BookAdd} />
            <Route path="/bookedit" exact component={BookEdit} />
            
            
          </Switch>

        </div>
      </HashRouter>
    );
  }
}

export default App;
