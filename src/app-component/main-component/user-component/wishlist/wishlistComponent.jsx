import React,{ Component } from 'react';
import {WishedCard} from './wishedBookCard'
class WishedBooks extends Component
{
    render()
    {
        let x=<div>
        <h2 style={{textAlign:'center',color:"#614126", fontSize : "20px"}}>You have no items in your wishlist. Start adding!!</h2><img alt="" src="https://static1.squarespace.com/static/56b46411356fb0307ba84bd3/t/57e980e2e4fcb54af2a38dc6/1474920680832/" />
        </div>
        if(window.wishlist.length!==0)
        {

        x=<div className="row mb-5">
        {window.wishlist.map(r=>{
            return(
                   <div className="col-lg-2 col-md-3 col-sm-6 col-xs-12 mt-4">                   
                    <WishedCard key={r.isbn} data={r}/>
                  </div>
                   );
        })}
        </div>
        }

        return(
    <div className="contained mt-4">
        <ol className="breadcrumb" style={{backgroundColor : '	#CD853F', color : "white"}}>
        <h5>My Wishlist<span onClick={this.props.wishCrossClicked} style={{float:'right',cursor:'pointer',paddingLeft:'70px'}}>x</span> </h5>
        </ol>
        
     {x}
    </div>
        );
    }
}
export default WishedBooks;
