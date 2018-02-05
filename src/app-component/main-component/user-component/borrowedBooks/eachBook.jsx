import React,{Component} from 'react'
import './css/isssuedSlider.css'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {css} from 'glamor'
// eslint-disable-next-line
import {ToastContainer,toast} from 'react-toastify';
import returnBook from '../../../mongo/returnBook'
import {storeBbooks} from '../../../../state/action/bbooksAction'
import {addWishlist} from '../../../mongo/addWishlist';
import {storeWbooks} from '../../../../state/action/wbooksAction'
import {removeWishlist} from '../../../mongo/removeWishlist'
let handle = (data) => {
    window.selected = data;
    window.showDetails=true;
    window.location=`/#/details/${data.isbn}`
    //document.getElementById('detail').click();
    window.setClickProps="borrowedDetailsCross";
}
class Card extends Component{
    constructor(props)
    {
        super(props)
        {
            let reqVal = true,
            wishVal = true;
             if (this.props.bbooks!==null && this.props.bbooks.length !== 0) {
            this
                .props
                .bbooks
                // eslint-disable-next-line
                .map(res => {
                    //  console.log(res)
                    if (res.isbn === this.props.data.isbn) {
                        // alert("found") console.log("found")
                        reqVal = false;
                    }
                })
        }
        if (this.props.wbooks!==null && this.props.wbooks.length !== 0) {
            this
                .props
                .wbooks
                // eslint-disable-next-line
                .map(res => {
                    //  console.log(res)
                    if (res.isbn === this.props.data.isbn) {
                        // console.log("found")
                        wishVal = false;
                    }
                })
        }
        this.state={
         wishlistIcon:wishVal,
        requestIcon:reqVal,
        }
        }
    }
     changeToEmpty = () => {
        if (navigator.onLine) {
            (async function () {
                var data = await removeWishlist(this.props.data.isbn);
                this
                    .props
                    .storeWbooks(data)
                // var newD=data.json();
            }).bind(this)()
            this.setState({wishlistIcon: true});
            toast.success("Removed from WishList !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }
changeToRequest = () => {
        if (navigator.onLine) {
            (async function () {
                var data = await returnBook(this.props.data.isbn);

                this
                    .props
                    .storeBbooks(data.data)
            }).bind(this)()
            this.setState({requestIcon: true});
            toast.warn("Successfully Returned !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
        }
    }

    changeToFilled = () => {
        if (navigator.onLine) {
            // eslint-disable-next-line
            var items = new Object();
            items.isbn = this.props.data.isbn;
            items.title = this.props.data.title;
            items.author = this.props.data.author;
            items.category = this.props.data.category;
            items.publisher = this.props.data.publisher;
            items.rating = this.props.data.rating;
            items.url = this.props.data.url;
            items.description = "";
            (async function () {
                var data = await addWishlist(items);
                this
                    .props
                    .storeWbooks(data)
                // var newD=data.json();
            }).bind(this)()
            this.setState({wishlistIcon: false});
            toast.success("Added to WishList !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "brown"})
            });
        } else {
            toast.error("You're Not Online !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({background: "blue"})
            });
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
function mapStateToProps(state) {
    return {bbooks: state.bbooks, wbooks: state.wbooks};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        storeBbooks: storeBbooks,
        storeWbooks: storeWbooks
    }, dispatch);
}
export default connect(mapStateToProps, matchDispatchToProps)(Card);