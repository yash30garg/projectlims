import React,{Component}from 'react';
import EachCategory from './eachCategory';
import axios from 'axios';
import './topRated.css'

class TopBooks extends Component{
        constructor() {
        super();

    }

    //     componentWillMount() {
    //     axios
    //         .get('https://api.myjson.com/bins/1a9rkj')
    //         .then(res => {
    //             this.setState({display: res.data.booksArray});
    //         })
    // }
    render()
    {
        let k;
                if (window.display !== '') {
                let b = window.display;
                 k=["java","javascript","c","angular","react","c++","c#","python","jquery","html & css","das"].map(result=>{
                    return(
                        <div>
                        <EachCategory category={result} rated={b}/>
                        </div>
                    );
                })
            }
            
            return(
                
                <div className="put mt-4" style={{paddingBottom:'30px'}}>
                <h5 className="card-header yoyo" style={{ backgroundColor: "#614126", color: "white", fontSize : "18px" }}>Top Rated Books</h5>
                {k}
            </div>
                
                
                
            )
    }
}
export default TopBooks;