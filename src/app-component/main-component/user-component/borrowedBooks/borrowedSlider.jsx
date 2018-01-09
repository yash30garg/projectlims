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
    //   this.state={

    //  output:[],
    //   }
    } 
//  componentDidMount()
//  {
     
//      axios.get('https://api.myjson.com/bins/14x90j')
//      .then(res=>{
//          this.setState({output:res.data});
//         });
//  }


 render()
 {
     if(email===""){
     id="1042948";
    }
    else id="1042948";
    //  const outputs=window.users.filter(temp=>temp.user.mid===id).map(result=>{
    //     return(<UserBooks key={result.user.mid} list={result.borrowedbooks}/>);
    //  });
    const outputs=<UserBooks key={id} list={window.bbooks}/>;
     return(
    <div className="contained mt-4">
        <ol className="breadcrumb" style={{backgroundColor : "#116466", color : "white"}}>
        <h5>Books I Have <span onClick={this.props.borrowCrossClicked} style={{float:'right',cursor:'pointer',paddingLeft:'70px'}}>x</span> </h5>
        </ol>
     {outputs}
    </div>
     );
 }

 }
export default BorrowedSlider;

