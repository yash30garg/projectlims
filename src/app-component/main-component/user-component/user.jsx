import React, {Component}from 'react';
import BootHeader from './../../header-component/bootheader.jsx';
import Pbooks from '../admin-component/PreferredBooks/PrefferdBooks.jsx';
import Footer from '../../footer-component/footer.jsx';
import axios from 'axios';
import { BorrowedSlider } from './borrowedBooks/borrowedSlider';
import {email,mid} from '../login-component/login.jsx';
import {requireAuth} from '../../isLoggedIn.js'
let users;
// window.bbooks='';
// import {email,mid} from '../login-component/login.jsx'
// import SearchResults from './SearchResults'
export class User extends Component
{
    constructor(){
        super();
    //     axios.get('https://api.myjson.com/bins/14x90j')
    //  .then(res=>{
    //      this.setState({output:res.data});
    //       window.users = this.state.output;
    //             console.log(users);
    //             const b = window.users.filter((res) => res.user.mid === "1042948")
    //             window.bbooks=b[0].borrowedbooks;
    //             console.log(window.bbooks.length)
    //     });
}
componentWillMount() {
    // requireAuth(window.location.href)
}
    render()
    {
        // if(window.bbooks.length!==0){

        // alert(window.bbooks.length)
        // }
        return(
            <div>
            <BootHeader />
            {/*<Pbooks/>*/}
            {/*<BorrowedSlider/>*/}
            {/*<Footer />*/}
            
            </div>
        );
    }
}
