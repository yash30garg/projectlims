import React, {Component} from 'react';
import Pbooks from '../main-component/admin-component/PreferredBooks/PrefferdBooks.jsx';
import BorrowedSlider from '../main-component/user-component/borrowedBooks/borrowedSlider.jsx';

export const Category=()=>
{
    return(
        
                                        <div>
                                        <ol className="breadcrumb" style={{backgroundColor : "#8a0051", color : "white"}}>
                                            <li className="active jinx3" ><h5>Whats's New</h5></li>
                                            
                                        </ol>                                   
                                <div className="card" >
                                    <h5 className="card-header yoyo" style={{backgroundColor : "#8a0051", color : "white"}}>Top Rated Books</h5>
                                    <br />
                                   <Pbooks />
                                </div>

                                <div className="mana">
                                    <div class="card">
                                        <h5 className="card-header yoyo" style={{backgroundColor : "#8a0051", color : "white"}}>
                                            Borrowed Books</h5>
                                        <div class="card-block">
                                            <BorrowedSlider/>
                                            
                                        </div>
                                    </div>
                                </div>
                                </div>
    );
}
