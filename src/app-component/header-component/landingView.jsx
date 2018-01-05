import React, { Component } from 'react';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';
import TopBooks from '../main-component/admin-component/topRatedBooks/topRated'

export const LandingView = (props) => {
    return (

        <div>

            <div className="contained" >
                <h5 className="card-header yoyo" style={{ backgroundColor: "#8a0051", color: "white" }}>What's New</h5>
                <Pbooks />
            </div>
            {props.show==false?<TopBooks/>:true}


        </div>
    );
}
