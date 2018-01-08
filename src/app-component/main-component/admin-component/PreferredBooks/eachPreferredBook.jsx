import React, {Component} from 'react';
import {Link} from 'react-router-dom';
let res;
class EachPrefferedCard extends Component{
    constructor(props)
    {
        super(props);
    }

    handle(res){
        window.selected=res;
    }

    render()
    {
        res=this.props.item;
    return (
        <div
            className="mx-auto col-lg-2 col-md-4 col-sm-6 col-xs-12">
            <Link to="/search/details">
            <div
                className="card-img particular mx-auto"
                 onClick={()=>this.handle(res)}
                id={this.props.key}
                style={{
                width: '150px'
            }}>
                <img
                    className="mx-auto"
                    src={this.props.item.details.url}
                    height="180px"
                    width="100%"/>
                <div className="overlay" style={{backgroundColor : "rgba(38,166,154,0.9)"}}>
                    <div className="text container-fluid">
                        <b>{this.props.item.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {this.props.item.details.author}<br/>
                        <b>Category :
                        </b>
                        {this.props.item.details.category}<br/> {[1, 2, 3, 4, 5].map(d => {
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
                        <button
                            class="btn mt-3"
                            style={{
                            backgroundColor: 'white',
                            color: 'rgb(96, 0, 58)'
                        }}>
                    
                            <b style={{fontSize:'14px'}}>Know More</b>
                        </button>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    );
    }
}
export default EachPrefferedCard;
