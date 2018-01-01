import React, {Component}from 'react';
import BootHeader from './../../header-component/bootheader.jsx';
import Pbooks from '../admin-component/PreferredBooks/PrefferdBooks.jsx';
import Footer from '../../footer-component/footer.jsx';
import { BorrowedSlider } from './borrowedBooks/borrowedSlider';
import {email,mid} from '../login-component/login.jsx'
// import {email,mid} from '../login-component/login.jsx'
// import SearchResults from './SearchResults'
export class User extends Component
{
    render()
    {
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
