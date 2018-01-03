import React,{Component} from 'react';
import {UserBooks}from './borrowedBook'
import axios from 'axios';
// import {email,mid} from '../../login-component/login'
import {email} from '../../login-component/login'

// import {BrowserRouter,Route,Link } from 'react-router-dom';
let id;

class BorrowedSlider extends Component
 { 
     constructor(props)
     {
         super(props);


         //console.log(this.props.mids);


   

         //console.log(this.props.mids);
     
        //console.log(this.props.mids);
      this.state={

     output:[],
      }
    } 
 componentDidMount()
 {
     
     axios.get('https://api.myjson.com/bins/14x90j')
     .then(res=>{
         this.setState({output:res.data});

        });
 }


 render()
 {
     if(email===""){
     id="1042948";
    }
    else id="1042948";
     const outputs=this.state.output.filter(temp=>temp.user.mid===id).map(result=>{
        return(<UserBooks key={result.user.mid} list={result.borrowedbooks}/>);
     });
     return(
       <div className="issued-container">
       {outputs}
       </div>
     );
 }

 }
export default BorrowedSlider;

