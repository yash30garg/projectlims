import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import'./PrefferedBooks.css';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { css } from 'glamor'
import { ToastContainer, toast } from 'react-toastify';
import {getDates} from '../../../dates';
import {borrowDate, returnDate} from '../../../dates';
import requestBook from '../../../mongo/requestBook'
import returnBook from '../../../mongo/returnBook'
import {storeBbooks} from '../../../../state/action/bbooksAction'
import {addWishlist} from '../../../mongo/addWishlist';
import {storeWbooks} from '../../../../state/action/wbooksAction'
import {removeWishlist} from '../../../mongo/removeWishlist'
let bbooks;
let test=()=>{
    var val=5;
    return val;
}
class EachPrefferedCard extends Component{
    constructor(props)
    {
        super(props);
        getDates();
        let reqVal=true
        let wishVal=true
        // if(props.data.length!==0){
        // console.log("called")
        // }
        // console.log(props.data)
        // console.log(props.data)
        // bbooks=storeBbooks.getState().bbooks;
        // console.log(bbooks)
            // alert(window.bbooks.length);
            // console.log(props.data.length)
            if(props.Bdata.length!==0){
                 props.Bdata.map(res=>{
                    //  console.log(res)
            if(res.isbn===this.props.item.isbn){   
                // console.log("found")
            reqVal=false;
            }
        })
            }
            if(props.Wdata.length!==0){
                 props.Wdata.map(res=>{
                    //  console.log(res)
            if(res.isbn===this.props.item.isbn){   
                // console.log("found")
            wishVal=false;
            }
        })
            }
        this.handle=this.handle.bind(this);
        this.changeToFilled=this.changeToFilled.bind(this);
        // requestBook
        // this.requestBook=this.requestBook.bind(this);
        this.state={
            wishlistIcon:wishVal,
            requestIcon:reqVal
        }
    }

    handle(){
        window.selected=this.props.item
        window.showDetails=true;
        document.getElementById('detail').click();
        window.setClickProps="prefferedDetailsCross"
    }
    changeToFilled=()=>
    {
        var items=new Object();
        items.isbn=this.props.item.isbn;
        items.title=this.props.item.title;
        items.author=this.props.item.author;
        items.category=this.props.item.category;
        items.publisher=this.props.item.publisher;
        items.rating=this.props.item.rating;
        items.url=this.props.item.url;
        items.description="";
        // console.log(items);
        (async function(){
                    var data=await addWishlist(items);
                    console.log("data")
                console.log(data);
                this.props.storeWbooks(data)
                // var newD=data.json();
            }).bind(this)()

        // addWishlist(items);
        this.setState({wishlistIcon:false});
         toast.success("Success !!!", {
                position: toast.POSITION.BOTTOM_CENTER,
                className: css({
                    background: "brown"
                })
            });
    }
    changeToEmpty=()=>
    {
        // removeWishlist(this.props.item.isbn);
        (async function(){
                    var data=await removeWishlist(this.props.item.isbn);
                    console.log("data")
                console.log(data);
                this.props.storeWbooks(data)
                // var newD=data.json();
            }).bind(this)()
        this.setState({wishlistIcon:true});
    }
    changeToUndo=()=>
    {
        // let num=test();
        // alert("in")
        // alert(num);
        if(this.props.bbooks.length<4){
            let bookAdded=new Object();
                bookAdded.isbn=this.props.item.isbn;
                bookAdded.title=this.props.item.title;
                bookAdded.author=this.props.item.author;
                bookAdded.publisher=this.props.item.publisher;
                bookAdded.url=this.props.item.url;
                bookAdded.rating=this.props.item.rating;
                bookAdded.borrowedDate=borrowDate;
                bookAdded.returnDate=returnDate;
                bookAdded.isRenewed="false"; 
                (async function(){
                    var data=await requestBook(bookAdded);
                console.log(data.data);
                this.props.storeBbooks(data.data)
                // var newD=data.json();
            }).bind(this)()
        this.setState({requestIcon:false});
        }
    }
    changeToRequest=()=>
    {
        (async function(){
                var data=await returnBook(this.props.item.isbn);
                console.log(data.data);
                
                this.props.storeBbooks(data.data)
            }).bind(this)()
        this.setState({requestIcon:true});
    }
    render()
    {
        // let a=<ReturnBook/>        
        // console.log(this.props.data)
        //res=this.props.item;
    return (
        <div
            className="mx-auto col-lg-2 col-md-4 col-sm-6 col-xs-12">            
            <div
                className="card-img particular mx-auto"
                //  onClick={()=>this.handle(res)}
                style={{
                    height:"13rem", width:"160px"
            }}>
                <img
                    className="mx-auto"
                    alt=""
                    src={this.props.item.url}
                    height="160px"
                    width="100%"/>
                    <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {this.props.item.title}
                    </div>
                <div className="overlay" style={{backgroundColor : "rgba(97,65,38,0.9)"}} onClick={this.handle}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{this.props.item.title}</b><br/>
                        <b>Author :
                        </b>
                        {this.props.item.author}<br/>
                        <b>Category :
                        </b>
                        {this.props.item.category}<br/> {
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {
                            if (this.props.item.rating >= d) 
                                return <span
                                key={`goldStar${d}`}
                                    className="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'
                                }}></span>
                        })}
                    </div>
                </div>
                <div className="buttonOverlay" style={{backgroundColor : "white"}} >
                <div className="buttonText container-fluid" style={{fontSize:'20px'}}>
                {this.state.wishlistIcon?<span onClick={this.changeToFilled} className="fa fa-heart-o" style={{color:'#CD853F'}}></span>:<span onClick={this.changeToEmpty} className="fa fa-heart" style={{color:'#CD853F'}}></span>}
                </div>
                </div>
                <div className="requestOverlay" style={{backgroundColor : "white"}} >
                <div className="requestText container-fluid" style={{fontSize:'20px'}}>
                {this.state.requestIcon?<span onClick={this.changeToUndo} className="fa fa-plus-circle" style={{color:'#CD853F', marginLeft:'30px'}}></span>: <span onClick={this.changeToRequest} className="fa fa-undo" style={{color:'#CD853F', marginLeft:'30px'}}></span>}
                </div>
                </div>
                
            </div>
            
        </div>
    );
    }
}
function mapStateToProps(state) {
    return {
        bbooks: state.bbooks,
        books: state.books,
        wbooks:state.wbooks
    };
}
function matchDispatchToProps(dispatch){
    return bindActionCreators({storeBbooks: storeBbooks,storeWbooks:storeWbooks}, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(EachPrefferedCard);
