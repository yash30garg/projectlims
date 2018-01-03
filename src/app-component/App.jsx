import React, {Component} from 'react';
import './App.css';
import Search from './search-component/Search'
// import Admin from './main-component/admin-component/admin'
import SearchResults from '../app-component/search-component/SearchResults.jsx';
import BootHeader from '../app-component/header-component/bootheader.jsx';
import Pages from '../app-component/main-component/admin-component/adminDashboard/pages.jsx';
import AdminLogin from '../app-component/main-component/admin-component/adminDashboard/adminlogin.jsx';
import Login from './main-component/login-component/login.jsx';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {User} from './main-component/user-component/user';
import {BookDetails} from '../app-component/BookDetails-Component/bookDetails'
import DashBoard from '../app-component/main-component/admin-component/adminDashboard/dashboard.jsx';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Login}/>
            <Route path="/home" exact component={User}/>
            <Route path="/Search" exact component={Search}/>
            <Route path="/results" exact component={SearchResults}/>
            <Route path="/admin" exact component={AdminLogin}/>
            <Route path="/results/details" exact component={BookDetails}/>
            <Route path="/admindash" exact component={DashBoard}/>
          </Switch>

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
