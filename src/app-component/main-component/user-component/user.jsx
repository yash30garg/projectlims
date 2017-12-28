import React, {Component}from 'react';
import Header from './../../header-component/header';
import Pbooks from '../admin-component/PreferredBooks/PrefferdBooks.jsx';
import Footer from '../../footer-component/footer.jsx';
import { BorrowedSlider } from './borrowedBooks/borrowedSlider';
// import {email,mid} from '../login-component/login.jsx'
// import SearchResults from './SearchResults'
export class User extends Component
{
    render()
    {
        return(
            <div>
            <Header/>
            <Pbooks/>
            <BorrowedSlider/>
            <Footer />
            </div>
        );
    }
}
