import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import'./PrefferedBooks.css'
// let res;
class EachPrefferedCard extends Component{
    constructor(props)
    {
        super(props);
        this.handle=this.handle.bind(this);
        this.state={
            wishlistIcon:true,
            requestIcon:true

        }
    }

    handle(){
        window.selected=this.props.item
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
        //res=this.props.item;
    return (
        <div
            className="mx-auto col-lg-2 col-md-4 col-sm-6 col-xs-12">
            
            <div
                className="card-img particular mx-auto"
                onClick={this.handle}
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
                    <Link to="/search/details">
                <div className="overlay" style={{backgroundColor : "rgba(97,65,38,0.9)"}}>
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
                </Link>
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
export default EachPrefferedCard;
