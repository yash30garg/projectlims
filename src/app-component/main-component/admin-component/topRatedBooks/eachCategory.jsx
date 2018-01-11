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
            showable:"collapse",
            withoutFilter:this.props.rated.filter(results=>results.details.category.toLowerCase()==this.props.category),
            filterCategory:[],
            showViewCard:true,
            
            
        }

    }

    componentDidMount()
    {
         if(this.props.category=="java"||this.props.category=="javascript")
        {
            
            this.setState({plus:"-", showable:"collapse show",});
        }
        this.setState({filterCategory:this.state.withoutFilter.filter(res=>res.details.rating>=4).slice(0,5)});
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

    viewMoreClicked=()=>
    {
        this.setState({filterCategory:this.state.withoutFilter, showViewCard:false});
    }
    render()
    {
        let c="#"+this.props.category;

    return(
                <div className="put mx-4 mt-1">
                <a onClick={this.plusClicked} style={{textDecoration:'none'}} data-toggle="collapse" href={c} aria-expanded="false" aria-controls={c}><h5 className="card-header yoyo" style={{ backgroundColor: "	#CD853F", color: "white", fontSize : "15px", fontStyle : "italic" }}>{this.props.category.toUpperCase()}<span style={{float:'right',paddingLeft:'70px'}}>{this.state.plus}</span></h5></a>
                <div className={this.state.showable} id={this.props.category}>
                <div className="row">
     {this.state.filterCategory.map(rslt=>{
         return(
             <EachTopCard key={rslt.isbn} item={rslt}/>
         )
     })}
                  <div
            className="col-lg-2 col-md-4 col-sm-6 col-xs-12 my-3">
            <div
                className="card-img viewMoreCard"
                onClick={(event)=>{
                    this.props.click(event,this.props.category)
                }}
                id={this.props.isbn}
                style={{
                width: '150px',
                height: '180px'
            }}>
                <img className="my-5"
                    src={require('../../../../Assets/Images/viewPlus.png')}
                    height="50px"
                    width="50px"/>
                    <p><i>view more..</i></p>
                    </div>
                    </div>
     </div>
     </div>
     </div>
    );
    }
}
export default EachCategory;