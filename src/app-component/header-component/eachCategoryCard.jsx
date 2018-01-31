import React,{Component} from 'react';
import './bootheader.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {controller,handleController} from './bootheader';
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
        this.state={
        wishlistIcon:true,
        requestIcon:true,
    }
}

    changeToFilled=()=>
    {
        this.setState({wishlistIcon:false});
    }
    changeToEmpty=()=>
    {
        this.setState({wishlistIcon:true});
    }
    changeToUndo=()=>
    {
        this.setState({requestIcon:false});
    }
    changeToRequest=()=>
    {
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
export default EachCategoryCard;