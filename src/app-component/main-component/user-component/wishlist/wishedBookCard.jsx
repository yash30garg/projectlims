import React from 'react';
import {Link} from 'react-router-dom';

let handle = (data) => {
    window.selected = data;
    window.showDetails=true;
    document.getElementById('detail').click();
    window.setClickProps="wishlistDetailsCross";
}
export const WishedCard = (props) => {
    let res = props.data;
    return (
            <div
                className="card-img mx-auto particular"
                id={props.data.isbn}
                style={{
                height: "13rem",
                width: "160px"
            }}>
                <img
                    alt=""
                    className="mx-auto"
                    src={props.data.url}
                    height="160px"
                    width="100%"
                    />
                    <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {props.data.title}
                    </div>
                <div
                    className="overlay"
                    style={{
                    backgroundColor: " rgba(97,65,38,0.9)",
                    fontSize:'13px'
                }}
                onClick={() => handle(res)}>
                    <div className="text container-fluid" style={{fontSize:'12px'}}>
                        <b>{props.data.title}</b><br/>
                        <b>Author :
                        </b>
                        {props.data.author}<br/>
                        <b>Category :
                        </b>
                        {props.data.category}<br/> {[1, 2, 3, 4, 5].map(d => {
                            if (props.data.rating >= d) 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize: '5px'
                                }}></span>
                            else 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: 'black',
                                    fontSize: '5px'
                                }}></span>
                        })}
                        <button
                            class="btn mt-3"
                            style={{
                            backgroundColor: 'white',
                            color: '#A0522D'
                        }}>

                            <b
                                style={{
                                fontSize: '14px'
                            }}>Know More</b>
                        </button>
                    </div>
                </div>
            </div>
    );

}