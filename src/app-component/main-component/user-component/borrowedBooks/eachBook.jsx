import React,{Component} from 'react'
import './css/isssuedSlider.css'
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import {getDates} from '../../../dates';
// import {css} from 'glamor'
// import {ToastContainer, toast} from 'react-toastify';
// import {borrowDate, returnDate} from '../../../dates';
// import requestBook from '../../../mongo/requestBook'
// import returnBook from '../../../mongo/returnBook'
// import {storeBbooks} from '../../../../state/action/bbooksAction'
// import {addWishlist} from '../../../mongo/addWishlist';
// import {storeWbooks} from '../../../../state/action/wbooksAction'
// import {removeWishlist} from '../../../mongo/removeWishlist'
// import {Link} from 'react-router-dom';
// import $ from 'jquery';
let handle = (data) => {
    window.selected = data;
    window.showDetails=true;
    window.location="/#/details"
    //document.getElementById('detail').click();
    window.setClickProps="borrowedDetailsCross";
}
class Card extends Component{
    constructor(props)
    {
        super(props)
        this.state={
         wishlistIcon:true,
        requestIcon:true,
        }
    }
    render()
    {
    let res = this.props.data;
    return (
            <div
                className="card-img mx-auto particular"               
                id={this.props.data.isbn}
                style={{
                height: "13rem",
                width: "180px"
            }}>
                <img
                    className="mx-auto"
                    src={this.props.data.url}
                    height="160px"
                    width="100%"
                    alt=""
                    />
                    <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {this.props.data.title}
                    </div>
                <div
                    className="overlay"
                    style={{
                    backgroundColor: "rgba(97,65,38,0.9)"
                }}
                onClick={() => handle(res)}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{this.props.data.title}</b><br/><br/>
                        <p>Return by {this.props.data.returnDate}</p>
                    </div>
                </div>
                <div className="buttonOverlay" style={{backgroundColor : "white"}} >
                <div className="buttonText container-fluid" style={{fontSize:'20px'}}>
                {this.state.wishlistIcon?<span onClick={this.changeToFilled} className="fa fa-heart-o" style={{color:'#CD853F'}} title="Click to add to wishlist"></span>:<span onClick={this.changeToEmpty} className="fa fa-heart" style={{color:'#CD853F'}} title="Click to remove from wishlist"></span>}
                </div>
                </div>
                <div className="requestOverlay" style={{backgroundColor : "white"}} >
                <div className="requestText container-fluid" style={{fontSize:'20px'}}>
                {this.state.requestIcon?<span onClick={this.changeToUndo} className="fa fa-plus-circle" style={{color:'#CD853F', marginLeft:'30px'}} title="Click to request"></span>: <span onClick={this.changeToRequest} className="fa fa-undo" style={{color:'#CD853F', marginLeft:'30px'}} title="Click to return"></span>}
                </div>
                </div>
            </div>

    );
    }

}
export default Card;