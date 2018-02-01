import React,{Component} from 'react';
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

let handle = (data) => {
    window.selected = data;
    window.showDetails=true;
    window.location="/#/details"
   // document.getElementById('detail').click();
    window.setClickProps="wishlistDetailsCross";
}
class WishedCard extends Component{
    constructor(props)
    {
        super(props);
        this.state={
         wishlistIcon:true,
        requestIcon:true,
    }
        // eslint-disable-next-line
            let reqVal = true,wishVal = true;
        // console.log("top") console.log(props.bbooks)
        if (this.props.bbooks.length !== 0) {
            this
                .props
                .bbooks
                // eslint-disable-next-line
                .map(res => {
                    //  console.log(res)
                    if (res.isbn === this.props.data.isbn) {
                        // alert("found") console.log("found")
                        // eslint-disable-next-line
                        reqVal = false;
                    }
                })
        }
        if (this.props.wbooks.length !== 0) {
            this
                .props
                .wbooks
                // eslint-disable-next-line
                .map(res => {
                    //  console.log(res)
                    if (res.isbn === this.props.data.isbn) {
                        // console.log("found")
                        // eslint-disable-next-line
                        wishVal = false;
                    }
                })
        }
    }
    
    render(){
    let res = this.props.data;
    return (
            <div
                className="card-img mx-auto particular"
                id={this.props.data.isbn}
                style={{
                height: "13rem",
                width: "160px"
            }}>
                <img
                    alt=""
                    className="mx-auto"
                    src={this.props.data.url}
                    height="160px"
                    width="100%"
                    />
                    <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {this.props.data.title}
                    </div>
                <div
                    className="overlay"
                    style={{
                    backgroundColor: " rgba(97,65,38,0.9)",
                    fontSize:'13px'
                }}
                onClick={() => handle(res)}>
                    <div className="text container-fluid" style={{fontSize:'12px'}}>
                        <b>{this.props.data.title}</b><br/>
                        <b>Author :
                        </b>
                        {this.props.data.author}<br/>
                        <b>Category :
                        </b>
                        {this.props.data.category}<br/> 
                        <span className="ml-2">{[1, 2, 3, 4, 5]
                            // eslint-disable-next-line
                            .map(d => {
                            if (this.props.data.rating >= d) 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize: '5px'
                                }}></span>
                        })}</span>

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
export default WishedCard;