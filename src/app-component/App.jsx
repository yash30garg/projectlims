import React, { Component } from 'react';
import './App.css';
<<<<<<< HEAD

import Header from '../app-component/header-component/header.jsx';
// import Pbooks from '../app-component/main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
// import Footer from '../app-component/footer-component/footer.jsx';
// import BorrowedBooks from './main-component/admin-component/booksDisplay.jsx';
=======
>>>>>>> 6f7498e234c4654c31c0ec60a0e64a7d1dc23941
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
<<<<<<< HEAD
      <Route path="/home" exact component={Header}/>
      </Switch>
        
     
=======
      <Route path="/home" exact component={User}/>
        </Switch>
>>>>>>> 6f7498e234c4654c31c0ec60a0e64a7d1dc23941
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
