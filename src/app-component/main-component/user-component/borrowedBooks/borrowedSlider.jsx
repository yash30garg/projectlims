import React,{Component} from 'react';
import {UserBooks}from './borrowedBook'
// import axios from 'axios';
// import {email,mid} from '../../login-component/login'
import {email} from '../../login-component/login'
var req = require('request');
// import {BrowserRouter,Route,Link } from 'react-router-dom';
let id;
window.bbooks=[];
class BorrowedSlider extends Component
 { 
    //  constructor(props)
    //  {
    //      super(props);


         //console.log(this.props.mids);


   

         //console.log(this.props.mids);
     
        //console.log(this.props.mids);
    //   this.state={

    //  output:[],
    //   }
    // } 
//  componentDidMount()
//  {
     
//      axios.get('https://api.myjson.com/bins/14x90j')
//      .then(res=>{
//          this.setState({output:res.data});
//         });
//  }

 render()
 {
    //  const outputs=window.users.filter(temp=>temp.user.mid===id).map(result=>{
    //     return(<UserBooks key={result.user.mid} list={result.borrowedbooks}/>);
    //  });
        let outputs=<div>
        <h2 style={{textAlign:'center',color:"#614126"}}>You haven't borrowed any books yet!</h2>
        </div>
        console.log(window.bbooks)
        if(window.bbooks.length!==0)
        {
            outputs=<UserBooks key={id} list={window.bbooks}/>;
        }
     return(
    <div className="contained mt-4">
        <ol className="breadcrumb" style={{backgroundColor:'	#614126', color : "white"}}>
        <h5>Books to be returned/renewed <span onClick={this.props.borrowCrossClicked} style={{float:'right',cursor:'pointer',paddingLeft:'70px'}}>x</span> </h5>
        </ol>
     {outputs}
    </div>
     );
 }

 }
export default BorrowedSlider;

