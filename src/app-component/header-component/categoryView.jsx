import React,{Component} from 'react';
import './bootheader.css';
import EachCategoryCard from './eachCategoryCard'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {controller,handleController} from './bootheader';

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
        b:17,
        showButton:false
    }
} 
    next_click_handler=()=>
    {
    if(this.state.b<filteredArray.length)
    {
        this.setState({a:this.state.a+17});
        this.setState({b:this.state.b+17});
    }  
    }
    previous_click_handler=()=>
    {
    if(this.state.a>=17)
    {
        this.setState({a:this.state.a-17});
        this.setState({b:this.state.b-17});
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
    if(filteredArray.length>18)
        {
          this.setState({showButton:true});
        }
        if(filteredArray.length<18)
        {
            this.setState({showButton:false})
        }
    this.setState({a:0,b:17})
    
}

    const b=filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
        return(
            <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

        )

    })
return(
    <div id={`i${this.props.selected.toLowerCase()}`}>
        {this.props.isSearchClicked===false && (window.showDetails===false && window.hideCategory===false)?
    <div className="contained">
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white", height:"45px" , fontSize : "15px"}}  >
        <h5 >{this.props.selected.toUpperCase()} <span style={{float:'right',cursor:'pointer',paddingLeft:'85px'}} id="openHome" onClick={this.props.categoryCrossClicked}>x</span></h5>
        </ol>
    <div className="row ml-1 mr-1">
     {b}
    </div>
    {this.state.showButton?<div className="row ml-1 mr-1" style={{paddingLeft:"40%"}}>
     <button onClick={this.previous_click_handler} className="btn-primary" style={{backgroundColor:"#614126"}}>Previous</button>
      <button onClick={this.next_click_handler} className="btn-primary" style={{backgroundColor:"#614126"}}>Next</button>
    </div>:null}
    </div>:null}
    </div>
)
    }
}
// function mapStateToProps(state) {
//     return {
//         books: state.books
//     };
// }
// export default connect(mapStateToProps)(Category);
export default Category;