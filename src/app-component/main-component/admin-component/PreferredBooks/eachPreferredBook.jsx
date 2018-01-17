import React, {Component} from 'react';
import {Link} from 'react-router-dom';
// let res;
class EachPrefferedCard extends Component{
    constructor(props)
    {
        super(props);
        this.handle=this.handle.bind(this);
    }

    handle(){
        window.selected=this.props.item
    }

    render()
    {
        //res=this.props.item;
    return (
        <div
            className="mx-auto col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <Link to="/search/details">
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
                    src={this.props.item.details.url}
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
                        <b>Category :
                        </b>
                        {this.props.item.details.category}<br/> {
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {
                            if (this.props.item.details.rating >= d) 
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
            </div>
            </Link>
        </div>
    );
    }
}
export default EachPrefferedCard;
