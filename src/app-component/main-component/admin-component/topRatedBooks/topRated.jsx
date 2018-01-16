import React,{Component}from 'react';
import EachCategory from './eachCategory';
import axios from 'axios';
import './topRated.css'
import LoadingEffect from './../../../loading-component/loading';
import { Category } from './../../../header-component/categoryView';

class TopBooks extends Component{
        constructor() {
        super();
        this.state={
            showTop:true,
            particularCategory:""
        }
        window.backLanding=false;

    }

    //     componentWillMount() {
    //     axios
    //         .get('https://api.myjson.com/bins/1a9rkj')
    //         .then(res => {
    //             this.setState({display: res.data.booksArray});
    //         })
    // }
    
    viewMoreClicked=(event,cate)=>
    {
        this.setState({showTop:false,particularCategory:cate});
    }
    closeCategory=()=>
    {
        this.setState({showTop:true,particularCategory:""});
    }

    render()
    {
        let k=<div style={{position:'relative',top:'50px'}}><LoadingEffect/></div>;
                if (window.display.length !==0 ) {
                let b = window.display;
                 k=["java","javascript","c","angular","react","c++","c#","python","jquery","html & css","das"].map(result=>{
                    return(
                        <EachCategory key={result} click={this.viewMoreClicked} category={result} rated={b}/>   
                    );
                })
            }
            
            return(
                <div>
                {(this.state.showTop)?<div className="put" style={{paddingBottom:'30px'}}>
                <h5 className="card-header yoyo" style={{ backgroundColor: "#614126", color: "white", fontSize : "18px" }}>Top Rated Books</h5>
                {k}
            </div>:<div className="mt-4"><Category data={window.display} selected={this.state.particularCategory} categoryCrossClicked={this.closeCategory}/></div>}
            </div>
                
                
                
            )
    }
}
export default TopBooks;