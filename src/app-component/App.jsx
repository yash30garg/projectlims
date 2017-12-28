import React, { Component } from 'react';
import './App.css';
//import Header from '../app-component/header-component/header.jsx';
// import Pbooks from '../app-component/main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
// import Footer from '../app-component/footer-component/footer.jsx';
// import BorrowedBooks from './main-component/admin-component/booksDisplay.jsx';

import Login from './main-component/login-component/login.jsx';
import {BrowserRouter, Route, Link,Switch} from 'react-router-dom';
import {User} from './main-component/user-component/user'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/home" exact component={User}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
