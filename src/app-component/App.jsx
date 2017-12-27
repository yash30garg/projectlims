import React, { Component } from 'react';
import './App.css';
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
