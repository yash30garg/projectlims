import React,{Component} from 'react';
import './topRated.css';
import {Link} from 'react-router-dom';
export class EachTopCard extends Component{
    constructor(props)
    {
        super(props);
        this.hanle = this.handle.bind(this)
    }
    handle=(res)=>{
        window.selected=res;
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
           <Link to="/search/details">
           <div className="card particular" style={{width:"160px",height:"13rem"}}>
                <img
                    className="card-img-top mx-auto"
                    src={this.props.item.details.url}
                    // src="x"
                    alt={`${this.props.item.details.title}`}
                    height="160px"
                    width="100%"/>
                    <div className="card-block" style={{width:"160px", fontSize:"14px"}}>
                    {this.props.item.details.title}
                    </div>
                    
                <div className="overlay" style={{backgroundColor : "rgba(97,65,38,0.9)"}}>
                    <div className="text container-fluid">
                        <b>{this.props.item.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {this.props.item.details.author}<br/>
                        
                         {                
                             //eslint-disable-next-line
                         [1, 2, 3, 4, 5].map(d => {
                            if (this.props.item.details.rating >= d) 
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
                </div>
            </Link>
            </div>
           
        </div>
    )
    }
}
export default EachTopCard;