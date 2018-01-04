import React, { Component } from 'react';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';


export const LandingView = () => {
    return (

        <div>

            <div className="card" >
                <h5 className="card-header yoyo" style={{ backgroundColor: "#8a0051", color: "white" }}>Top Rated Books</h5>
                <br />
              
                <Pbooks />
            </div>


        </div>
    );
}
