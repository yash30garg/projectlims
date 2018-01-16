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
            passedCategory:this.props.category
            
            
        }

    }

    componentWillMount()
    {
         if(this.props.category=="java"||this.props.category=="javascript")
        {
            
            this.setState({plus:"-", showable:"collapse show",});
        }
        this.setState({filterCategory:this.state.withoutFilter.filter(res=>res.details.rating>=4).sort((a,b)=>{return(b.details.rating-a.details.rating)}).slice(0,5)});
        if(this.props.category=="c++")
        {
             this.setState({passedCategory:"cPlusPlus"});
        }
        else if(this.props.category=="c#")
        {
             this.setState({passedCategory:"cSharp"});
        }
        else if(this.props.category=="html & css")
        {
             this.setState({passedCategory:"htmlAndCss"});
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

    viewMoreClicked=()=>
    {
        this.setState({filterCategory:this.state.withoutFilter, showViewCard:false});
    }
    render()
    {
        let c="#"+this.state.passedCategory;

    return(
                <div className="put mx-4 mt-1">
                <a onClick={this.plusClicked} style={{textDecoration:'none'}} data-toggle="collapse" 
                href={c} aria-expanded="false" aria-controls={c}><h5 className="card-header yoyo" 
                style={{ backgroundColor: "	#CD853F", color: "white", fontSize : "15px", fontStyle : "italic" }}>{this.props.category.toUpperCase()}<span style={{float:'right',paddingLeft:'70px'}}>{this.state.plus}</span></h5></a>
                <div className={this.state.showable} id={this.state.passedCategory}>
                <div className="row">
     {this.state.filterCategory.map(rslt=>{
         return(
             <EachTopCard key={`each${rslt.isbn}`} item={rslt}/>
         )
     })}
                  <div
            className="col-lg-2 col-md-4 col-sm-6 col-xs-12 my-3">
            <div
                className="card-img viewMoreCard mx-auto"
                onClick={(event)=>{
                    this.props.click(event,this.props.category)
                }}
                id={this.props.isbn}
                style={{
                width: '150px',
                height: '13rem'
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