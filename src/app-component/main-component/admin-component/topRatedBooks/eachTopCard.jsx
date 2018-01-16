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
                <img
                    className="mx-auto"
                    src={this.props.item.details.url}
                    height="180px"
                    width="100%"/>
                <div className="overlay" style={{backgroundColor : "rgba(97,65,38,0.9)"}}>
                    <div className="text container-fluid">
                        <b>{this.props.item.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {this.props.item.details.author}<br/>
                         {[1, 2, 3, 4, 5].map(d => {
                            if (this.props.item.details.rating >= d) 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'

                                }}></span>
                            else 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: 'black',
                                    fontSize:'5px'
                                }}></span>
                        })}
                    </div>
                </div>
            </Link>
            </div>
           
        </div>
    )
    }
}
export default EachTopCard;