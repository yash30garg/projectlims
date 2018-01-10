import React,{Component} from 'react';
import './topRated.css'
export class EachTopCard extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            btnText:"REQUEST BOOK"

        }
        this.request = this.request.bind(this)
    }
        
        request() {

           
            this.setState({btnText:"REQUESTED"});

    }

    render(){
    return(
        <div
            className="col-lg-2 col-md-4 col-sm-6 col-xs-12 my-3">
            <div
                className="card-img particular mx-auto"
                id={this.props.isbn}
                style={{
                width: '150px'
            }}>
                <img
                    className="mx-auto"
                    src={this.props.item.details.url}
                    height="180px"
                    width="100%"/>
                <div className="overlay" style={{backgroundColor : "#CD853F"}}>
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
                        <button
                            class="btn btn-sm mt-3"
                            style={{
                            backgroundColor: 'white',
                            color: '#8B4513',
                        }}
                            onClick={this.request}>
                            <b style={{fontSize:'12px'}}>{this.state.btnText}</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
    }
}
export default EachTopCard;