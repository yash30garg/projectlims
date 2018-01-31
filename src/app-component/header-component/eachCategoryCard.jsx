import React,{Component} from 'react';
import './bootheader.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getDates} from '.././dates';
import {borrowDate, returnDate} from '.././dates';
import requestBook from '../mongo/requestBook'
import returnBook from '../mongo/returnBook'
import {storeBbooks} from '../../state/action/bbooksAction'
import {storeWbooks} from '../../state/action/wbooksAction'
import {controller,handleController} from './bootheader';
import {addWishlist} from '../mongo/addWishlist';
import {removeWishlist} from '../mongo/removeWishlist'
import EachCategory from './../main-component/admin-component/topRatedBooks/eachCategory';
let handle=(data)=>{
window.selected=data;
window.showDetails=true;
document.getElementById('detail').click();
 window.setClickProps="categoryDetailsCross"
}

 class EachCategoryCard extends Component
{
    constructor(props)
    {
        super(props);

        let reqVal=true;
        let wishVal=true;
        if(this.props.bbooks!==null && this.props.bbooks.length!==0){
                 this.props.bbooks.map(res=>{
                    //  console.log(res)
            if(res.isbn===this.props.eachValue.isbn){   
                // console.log("found")
            reqVal=false;
            }
        })
            }
            if(this.props.wbooks!==null && this.props.wbooks.length!==0){
                 this.props.wbooks.map(res=>{
                    //  console.log(res)
            if(res.isbn===this.props.eachValue.isbn){   
                // console.log("found")
            wishVal=false;
            }
        })
            }
        this.state={
        wishlistIcon:wishVal,
        requestIcon:reqVal,
    }
}

    changeToFilled=()=>
    {
        var items=new Object();
        items.isbn=this.props.eachValue.isbn;
        items.title=this.props.eachValue.title;
        items.author=this.props.eachValue.author;
        items.category=this.props.eachValue.category;
        items.publisher=this.props.eachValue.publisher;
        items.rating=this.props.eachValue.rating;
        items.url=this.props.eachValue.url;
        items.description="";
        // console.log(items);
        (async function(){
                    var data=await addWishlist(items);
                    console.log("data")
                console.log(data);
                this.props.storeWbooks(data)
                // var newD=data.json();
            }).bind(this)()
        this.setState({wishlistIcon:false});
    }
    changeToEmpty=()=>
    {
        (async function(){
                    var data=await removeWishlist(this.props.eachValue.isbn);
                    console.log("data")
                console.log(data);
                this.props.storeWbooks(data)
                // var newD=data.json();
            }).bind(this)()
        this.setState({wishlistIcon:true});
    }
    changeToUndo=()=>
    {
         if(this.props.bbooks.length<4){
            let bookAdded=new Object();
                bookAdded.isbn=this.props.eachValue.isbn;
                bookAdded.title=this.props.eachValue.title;
                bookAdded.author=this.props.eachValue.author;
                bookAdded.publisher=this.props.eachValue.publisher;
                bookAdded.url=this.props.eachValue.url;
                bookAdded.rating=this.props.eachValue.rating;
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
                var data=await returnBook(this.props.eachValue.isbn);
                console.log(data.data);
                this.props.storeBbooks(data.data)
            }).bind(this)()
        this.setState({requestIcon:true});
    } 

render()
{
    return(
                        <div
                className="col-lg-2 col-md-4 col-sm-4 col-xs-4 mt-2 mb-3">
            
        <div
                className="card-img particular mx-auto"
                id={this.props.eachValue.isbn}
                style={{
                    height:"13rem", width:"160px"
            }}>
            
                <img
                    alt=""
                    className="mx-auto"
                    src={this.props.eachValue.url}
                    height="160px"
                    width="100%"/>
                   <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {this.props.eachValue.title}
                    </div>
                     <div className="overlay" style={{backgroundColor: "rgba(97,65,38,0.9)"}} onClick={()=>handle(this.props.eachValue)}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{this.props.eachValue.title}</b><br/>
                        <b>Author :
                        </b>
                        {this.props.eachValue.author}<br/>
                        {
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {

                            if (this.props.eachValue.rating >= d) 
                                return <span
                                key={`category${this.props.eachValue.isbn}`}
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

    )

    
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
export default connect(mapStateToProps,matchDispatchToProps)(EachCategoryCard);