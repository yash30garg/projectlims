import React,{Component} from 'react';
import {UserBooks}from './borrowedBook'
import axios from 'axios';
import {BrowserRouter,Route,Link } from 'react-router-dom';

export class BorrowedSlider extends Component
 { 
     constructor(props)
     {
         super(props);

     }
      state={
     output:[],
 } 
 componentDidMount()
 {
     
     axios.get('https://api.myjson.com/bins/ds48n')
     .then(res=>{
         this.setState({output:res.data});
        });
 }


 render()
 {
     const outputs=this.state.output.filter(temp=>temp.user.mid=="1042948").map(result=>{
        return(<UserBooks key={result.user.mid} list={result.userBooks}/>);
     });
     return(
       <div className="row">
       {outputs}
       </div>
     );
 }

 }
export default BorrowedSlider;

