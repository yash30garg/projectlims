import React, {Component}from 'react';
import Header from './../../header-component/header';
import { BorrowedSlider } from './borrowedBooks/borrowedSlider';

export class User extends Component
{
    render()
    {
        return(
            <div>
            <Header/>
            <BorrowedSlider/>
            </div>
        );
    }
}
