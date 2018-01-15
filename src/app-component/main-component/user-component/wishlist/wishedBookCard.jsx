import React from 'react';
import {Link} from 'react-router-dom';

let handle=(data)=>{
    window.selected=data;
}
export const WishedCard=(props)=>
{
    let res=props.data;
    return( 
         <Link to="/search/details">   
            <div
                className="card-img mx-auto particular"
                onClick={()=>handle(res)}
                id={props.data.isbn}
                style={{
                width: '150px'
            }}>
                <img
                    className="mx-auto"
                    src={props.data.details.url}
                    height="180px"
                    width="100%"/>
                 <div className="overlay" style={{backgroundColor : "	#CD853F"}}>
                    <div className="text container-fluid">
                        <b>{props.data.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {props.data.details.author}<br/>
                        <b>Category :
                        </b>
                        {props.data.details.category}<br/> {[1, 2, 3, 4, 5].map(d => {
                            if (props.data.details.rating >= d) 
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
                            color: '#A0522D'
                        }}>
                    
                            <b style={{fontSize:'14px'}}>Know More</b>
                        </button>
                    </div>
                </div>
            </div>
        </Link>
    );


}