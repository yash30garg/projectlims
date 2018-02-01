import React , { Component } from 'react'
import Header from '../header-component/header'
import Footer from '../footer-component/footer'
import {User} from './user-component/user'
import BootHeader from '../header-component/bootheader'
import { HashRouter, Route, Switch } from 'react-router-dom';
import store from '../../state/store/store.js'

import Profile from './user-component/profileView/ProfileDetails'
import Category from '../header-component/categoryView'
import BorrowedSlider from './user-component/borrowedBooks/borrowedSlider'
import WishedBooks from './user-component/wishlist/wishlistComponent'
import SearchResults from '../search-component/SearchResults'
import Details from '../BookDetails-Component/details.jsx'
import {requireAuth} from '../isLoggedIn.js'

import {processedData} from '../search-component/Search'

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            marginLeft:'-1%'
        }
    }
    componentWillMount() {
        requireAuth(window.location.href)
        if(window.innerWidth<=500)
        {
            this.setState({marginLeft:'0%'})
        }
    }
    render() {
        if(window.login==="yes")
        return(
            <div style={{overflow:"hidden"}}>
            <Header/>
            <div className="row mainDiv">
                <div className="col-md-3 mainDiv"><BootHeader/></div>
                <div style={{marginLeft:this.state.marginLeft}} className="col-md-9 mainDiv">
                {/*<User/>*/}
                <HashRouter>
                <Switch>
                <Route path="/" exact component={User}/>
                <Route path="/category/:category" exact component={Category} onChange={Category}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/borrowedBooks" exact component={BorrowedSlider}/>
                <Route path="/wishlist" exact component={WishedBooks}/>
                <Route path="/profile" exact component={Profile}/>
                <Route path="/search/:searchValue" exact render={(processedData) => <SearchResults display={processedData}/>} onChange={SearchResults}/>
                <Route path="/details" exact render = {()=> <Details data={window.selected}/>}/>
                </Switch>
                </HashRouter>
                </div>
            </div>
            <Footer/>
            </div>
        )
        else if(window.login==="no")
        return(<div></div>)
    }
}