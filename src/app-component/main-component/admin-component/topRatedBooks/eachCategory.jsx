import React,{Component}from 'react';
import EachTopCard from './eachTopCard';
import './topRated.css';

class EachCategory extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            plus:"+",
            showable:"collapse"
        }

    }

    componentDidMount()
    {
         if(this.props.category=="java"||this.props.category=="javascript")
        {
            
            this.setState({plus:"-", showable:"collapse show"});
        }
    }
    plusClicked=()=>
    {
        if(this.state.plus=="+")
        {
        this.setState({plus:"-"});
        }
        else
        {
          this.setState({plus:"+"});  
        }
    }
    render()
    {
        let c="#"+this.props.category;

    return(
                <div className="put mx-4 mt-1">

                <a onClick={this.plusClicked} style={{textDecoration:'none'}} data-toggle="collapse" href={c} aria-expanded="false" aria-controls={c}><h5 className="card-header yoyo" style={{ backgroundColor: "#26a69a", color: "white" }}>{this.props.category.toUpperCase()}<span style={{float:'right',paddingLeft:'70px'}}>{this.state.plus}</span></h5></a>
                <div className={this.state.showable} id={this.props.category}>

                <div className="row">
     {this.props.rated.filter(results=>results.details.category.toLowerCase()==this.props.category).slice(0,6).map(rslt=>{
         return(
             <EachTopCard key={rslt.isbn} item={rslt}/>
         )
     })}
     </div>
     </div>

     </div>
    );
    }
}
export default EachCategory;