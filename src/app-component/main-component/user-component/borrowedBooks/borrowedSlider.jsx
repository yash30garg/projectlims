import React,{Component} from 'react';
import {UserBooks}from './borrowedBook'
import {connect} from 'react-redux';
// import axios from 'axios';
// import {email,mid} from '../../login-component/login'
// import {email} from '../../login-component/login'
import Pbooks from '../../admin-component/PreferredBooks/PrefferdBooks'
// var req = require('request');
// import {BrowserRouter,Route,Link } from 'react-router-dom';
let id;
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
     let bbooks=this.props.bbooks;
    //  const outputs=window.users.filter(temp=>temp.user.mid===id).map(result=>{
    //     return(<UserBooks key={result.user.mid} list={result.borrowedbooks}/>);
    //  });
        let outputs=<div>
        <h5 className="borrowedText" style={{textAlign:'center',color:"#614126"}}>You haven't borrowed any books yet!</h5>
        </div>
        // console.log(bbooks)
        if(bbooks!==null) {
        if(bbooks.length!==0)
        {
            outputs=<UserBooks key={id} list={bbooks}/>;
        }
        }
        else window.location = '/#/'
     return(
         <div className="mt-4">
             <div className="contained" >
                <h5 className="card-header yoyo" style={{ backgroundColor: "#614126", color: "white" }}>What's New</h5>
                <Pbooks />
            </div>
    <div className="contained mt-4">
        <ol className="breadcrumb" style={{backgroundColor:'	#614126', color : "white"}}>
        <h5>Books to be returned/renewed <span id="openHome" onClick={(e)=>{e.preventDefault(); window.location='/#/'}} style={{float:'right',cursor:'pointer',paddingLeft:'70px'}}>x</span> </h5>
        </ol>
     {outputs}
    </div>
    </div>
     );
 }

}
function mapStateToProps(state) {
    return {
        bbooks: state.bbooks
    };
}
export default connect(mapStateToProps)(BorrowedSlider);

