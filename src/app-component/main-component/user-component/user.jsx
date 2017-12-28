import React, {Component}from 'react';
import Header from './../../header-component/header';
import Pbooks from '../admin-component/PreferredBooks/PrefferdBooks.jsx';
import Footer from '../../footer-component/footer.jsx';
import { BorrowedSlider } from './borrowedBooks/borrowedSlider';
import {email,mid} from '../login-component/login.jsx'
export class User extends Component
{
    render()
    {
        return(
            <div>
                {console.log(email)}
            <Header/>
           <Pbooks/>
            <BorrowedSlider/>
            <Footer />
            </div>
        );
    }
}
