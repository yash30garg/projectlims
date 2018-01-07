import React, {Component}from 'react';
import BootHeader from './../../header-component/bootheader.jsx';
import Pbooks from '../admin-component/PreferredBooks/PrefferdBooks.jsx';
import Footer from '../../footer-component/footer.jsx';
import searchBar from '../../header-component/searchbar/searchBar.jsx';
import axios from 'axios';
import { BorrowedSlider } from './borrowedBooks/borrowedSlider';
import {email,mid} from '../login-component/login.jsx';
let users;
// import {email,mid} from '../login-component/login.jsx'
// import SearchResults from './SearchResults'
export class User extends Component
{
    constructor(){
        super();
        axios.get('https://api.myjson.com/bins/14x90j')
     .then(res=>{
         this.setState({output:res.data});
          users = this.state.output;
                console.log(users)
                const b = users.filter((res) => res.user.mid === "1042948")
                window.bbooks=b[0].borrowedbooks;
        });
    }
    render()
    {
        return(
            <div>
            <BootHeader />
            <searchBar />
            {/*<Pbooks/>*/}
            {/*<BorrowedSlider/>*/}
            {/*<Footer />*/}
            </div>
        );
    }
}
