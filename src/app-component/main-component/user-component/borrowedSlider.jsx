import React,{Component} from 'react';
import {Observable} from 'rxjs';

export class BorrowedSlider extends Component
 {    render()
     {   
       return(
           <div>
           {this.Fetching()}
           </div>
       ); 
     }
      Fetching=()=>
 {
      fetch('../../../Assets/Data/UserInfo.json')
     .then((resa) =>{return resa.json()})
     .then((data) =>console.log(data))
    
 }
 }
export default BorrowedSlider;

//  export default BorrowedSlider;