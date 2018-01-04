import React, {Component} from 'react';
import './bootheader.css'

export const Category=(props)=>
{
    let b=props.data.filter(r=>r.details.category.toLowerCase()==props.selected.toLowerCase()).map(res=>{
        return(
                    <div
            className="mx-auto col-lg-2 col-md-3 col-sm-6 col-xs-6 mt-3 mb-5">

        <div
                className="card-img particular mx-auto"
                id={res.isbn}
                style={{
                width: '190px'
            }}>
                <img
                    className="mx-auto"
                    src={res.details.url}
                    height="210px"
                    width="100%"/>
                     <div className="overlay">
                    <div className="text container-fluid">
                        <b>{res.details.title}</b><br/>
                        <b>Author :
                        </b>
                        {res.details.author}<br/>
                        <b>Category :
                        </b>
                        {res.details.category}<br/> {[1, 2, 3, 4, 5].map(d => {
                            if (res.details.rating >= d) 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'13px'
                                }}></span>
                            else 
                                return <span
                                    class="fa fa-star"
                                    style={{
                                    color: 'black',
                                    fontSize:'13px'
                                }}></span>
                        })}
                        <button
                            class="btn btn-block mt-3"
                            style={{
                            backgroundColor: 'white',
                            
                        }}
                            onClick={this.request}>
                            <b>REQUEST BOOK</b>
                        </button>
                    </div>
                </div>
                </div>
</div>
        )

    })
return(
    <div className="contained">
        <ol className="breadcrumb" style={{backgroundColor : "#8a0051", color : "white"}}>
        <h5>{props.selected.toUpperCase()}</h5>
        </ol>
    <div className="row">
     {b}
    </div>
    </div>
)
}