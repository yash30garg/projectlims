import React , { Component } from 'react'
import Header from '../header-component/header'
import Footer from '../footer-component/footer'
import {User} from './user-component/user'
import BootHeader from '../header-component/bootheader'
import { HashRouter, Route, Switch } from 'react-router-dom';
import Profile from './user-component/profileView/prodetails'

export default class Main extends Component {
    render() {
        return(
            <div>
            <Header/>
            
            <div className="row">
                <div className="col-md-3"><BootHeader/></div>
                <div className="col-md-9">
                {/*<User/>*/}
                <HashRouter>
                <Switch>
                <Route path="/" exact component={User}/>
                <Route path="/profile" component={Profile}/>
                </Switch>
                </HashRouter>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}