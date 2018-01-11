import React,{ Component } from 'react';
import {WishedCard} from './wishedBookCard'
class WishedBooks extends Component
{
    render()
    {
        let x=<div>
        <h2 style={{textAlign:'center',color:"#614126"}}>I have not added any book in wishlist!</h2>
        </div>
        if(window.wishlist.length!=0)
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
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white"}}>
        <h5>Books I wish<span onClick={this.props.wishCrossClicked} style={{float:'right',cursor:'pointer',paddingLeft:'70px'}}>x</span> </h5>
        </ol>
        
     {x}
    </div>
        );
    }
}
export default WishedBooks;