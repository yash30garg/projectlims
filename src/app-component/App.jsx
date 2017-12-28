import React, { Component } from 'react';
import './App.css';
import Search from './search-component/Search'
//import Header from '../app-component/header-component/header.jsx';
// import Pbooks from '../app-component/main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
// import Footer from '../app-component/footer-component/footer.jsx';
// import BorrowedBooks from './main-component/admin-component/booksDisplay.jsx';

import Login from './main-component/login-component/login.jsx';
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';
import {User} from './main-component/user-component/user'
import {SearchResults} from './main-component/user-component/SearchResults-Component/results'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={User}/>
<<<<<<< HEAD
      <Route path="/Search" exact component={Search}/>      
=======
      <Route path="/results" exact component={SearchResults}/>

>>>>>>> 7b01147c77f73c647a947dd6b53683fe952d54da
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
