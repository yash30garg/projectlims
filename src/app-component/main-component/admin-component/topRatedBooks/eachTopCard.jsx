import React,{Component} from 'react';
import './topRated.css';
import {Link} from 'react-router-dom';
export class EachTopCard extends Component{
    constructor(props)
    {
        super(props);
        this.hanle = this.handle.bind(this)
        this.state={
        wishlistIcon:true,
        requestIcon:true
        }
    }
    handle=(res)=>{
        window.selected=res;
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

    render(){
        let res=this.props.item;
    return(
        <div
            className="col-lg-2 col-md-6 col-sm-6 col-xs-6 my-3">
            
            <div
            onClick={()=>this.handle(res)}
                className="card-img particular mx-auto"
                id={this.props.isbn}
                style={{
                width: '150px'
                
            }}>

           <div className="card particular" style={{width:"160px",height:"13rem"}}>
                <img
                    className="card-img-top mx-auto"
                    src={this.props.item.url}
                    // src="x"
                    alt={`${this.props.item.title}`}
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
                        
                         {                
                             //eslint-disable-next-line
                         [1, 2, 3, 4, 5].map(d => {
                            if (this.props.item.rating >= d) 
                                return <span
                                    key={`gold${d}`}
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
           
        </div>
    )
    }
}
export default EachTopCard;