import React,{Component}from 'react';
import EachCategory from './eachCategory';
import axios from 'axios';
import './topRated.css'
import LoadingEffect from './../../../loading-component/loading';
import { Category } from './../../../header-component/categoryView';
class TopBooks extends Component{
        constructor() {
        super();
        //this.counting=0;
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
        let counting=0;
        let brr = [];
        let arr = window.display
  .sort((a, b) => {
                if (a.details.category.toUpperCase() > b.details.category.toUpperCase()) {
                    return 1;
                } else if (a.details.category.toUpperCase() < b.details.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
            if(arr.length!==0)
            {
                brr.push(arr[0]);
            }
        for (var i = 0; i < arr.length - 1; i++) {
            if (arr[i].details.category.toUpperCase() != arr[i + 1].details.category.toUpperCase()) {

                brr.push(arr[i+1]);
            }

        }

        let k=<div style={{position:'relative',top:'50px'}}><LoadingEffect/></div>;
                if (brr.length !==0 ) {
                let b = window.display;
                 k=brr.map(result=>{
                     ++counting;
                    return(
                        <EachCategory key={`ea${result.isbn}`} click={this.viewMoreClicked} category={result.details.category} rated={b} count={counting}/>   
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