import React, { Component } from 'react';
import './App.css';
import Search from './search-component/Search'
import Admin from './main-component/admin-component/admin'
import SearchResults from '../app-component/search-component/SearchResults.jsx';


import Login from './main-component/login-component/login.jsx';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { User } from './main-component/user-component/user'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/home" exact component={User} />

            <Route path="/Search" exact component={Search} />

            <Route path="/results" exact component={SearchResults} />
            <Route path="/admin" exact component={Admin} />            

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
