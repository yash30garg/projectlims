import React,{Component} from 'react';
import './bootheader.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {controller,handleController} from './bootheader';
let handle=(data)=>{
window.selected=data;
 window.showDetails=true;
document.getElementById('detail').click();
 window.setClickProps="categoryDetailsCross"
}
let filteredArray=[];
 class Category extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
        wishlistIcon:true,
        requestIcon:true,
        a:0,
        b:11,
        showButton:false
    }
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
    next_click_handler=()=>
    {
    if(this.state.b<filteredArray.length)
    {
        this.setState({a:this.state.a+11});
        this.setState({b:this.state.b+11});
    }  
    }
    previous_click_handler=()=>
    {
    if(this.state.a>=11)
    {
        this.setState({a:this.state.a-11});
        this.setState({b:this.state.b-11});
    }
}  

    render()
    {
    if(this.props.selected==="all")
    {
          filteredArray=this.props.data.sort((a, b) => {
                if (a.category.toUpperCase() > b.category.toUpperCase()) {
                    return 1;
                } else if (a.category.toUpperCase() < b.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
    }
    else
    {
    filteredArray=this.props.data.filter(r=>r.category.toLowerCase()===this.props.selected.toLowerCase()).sort((a,b)=>{return(b.rating-a.rating)});
}
if(controller===0) {
    handleController();
    if(filteredArray.length>12)
        {
          this.setState({showButton:true});
        }
        if(filteredArray.length<12)
        {
            this.setState({showButton:false})
        }
    this.setState({a:0,b:11})
    
}

    const b=filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
        return(
         
                <div
                key={`filter${res.isbn}`}
                className="col-lg-2 col-md-4 col-sm-4 col-xs-4 mt-2 mb-3">
            
        <div
                className="card-img particular mx-auto"
                id={res.isbn}
                style={{
                    height:"13rem", width:"160px"
            }}>
            
                <img
                    alt=""
                    className="mx-auto"
                    src={res.url}
                    height="160px"
                    width="100%"/>
                   <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {res.title}
                    </div>
                     <div className="overlay" style={{backgroundColor: "rgba(97,65,38,0.9)"}} onClick={()=>handle(res)}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{res.title}</b><br/>
                        <b>Author :
                        </b>
                        {res.author}<br/>
                        {
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {

                            if (res.rating >= d) 
                                return <span
                                key={`category${res.isbn}`}
                                    className="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'
                                }}></span>
                        })}
                    </div>
                </div>
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

        )

    })
return(
    <div id={`i${this.props.selected.toLowerCase()}`}>
        {this.props.isSearchClicked===false && (window.showDetails===false)?
    <div className="contained">
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white", height:"45px" , fontSize : "15px"}}  >
        <h5 >{this.props.selected.toUpperCase()} <span style={{float:'right',cursor:'pointer',paddingLeft:'85px'}} id="openHome" onClick={this.props.categoryCrossClicked}>x</span></h5>
        </ol>
    <div className="row ml-1 mr-1">
     {b}
    </div>
    {this.state.showButton?<div className="row ml-1 mr-1" style={{paddingLeft:"40%"}}>
     <button onClick={this.previous_click_handler} className="btn-primary">Previous</button>
      <button onClick={this.next_click_handler} className="btn-primary">Next</button>
    </div>:null}
    </div>:null}
    </div>
)
    }
}
function mapStateToProps(state) {
    return {
        books: state.books
    };
}
export default connect(mapStateToProps)(Category);