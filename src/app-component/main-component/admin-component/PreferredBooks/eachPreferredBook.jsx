import React, {Component} from 'react';

class EachPrefferedCard extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            btnText:"REQUEST BOOK"

        }
    }
    //     request() {

           
    //         this.setState({btnText:"REQUESTED"});

    // }
    render()
    {
    return (
        <div
            className="mx-auto col-lg-4 col-md-6 col-sm-6 col-xs-12"
            style={{
            margin: 'auto'
        }}>
            <div
                className="card-img particular mx-auto"
                id={this.props.isbn}
                style={{
                width: '240px'
            }}>
                <img
                    className="mx-auto"
                    src={this.props.item.details.url}
                    height="290px"
                    width="100%"/>
                <div className="overlay">
                    <div className="text container-fluid">
                        <b>{this.props.item.details.title}</b><br/><br/>
                        <b>Author :
                        </b>
                        {this.props.item.details.author}<br/><br/>
                        <b>Category :
                        </b>
                        {this.props.item.details.category}<br/><br/> {[1, 2, 3, 4, 5].map(d => {
                            if (this.props.item.details.rating >= d) 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: 'white'
                                }}></span>
                            else 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: 'black'
                                }}></span>
                        })}
                        <button
                            class="btn mt-5"
                            style={{
                            backgroundColor: 'white',
                            color: 'rgb(96, 0, 58)'
                        }}
                            onClick={this.request}>
                            <b>{this.state.btnText}</b>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}
export default EachPrefferedCard;
