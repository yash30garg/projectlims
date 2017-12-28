import React,{Component} from 'react';
import { processedData } from './../../search-component/Search';
class SearchResults extends Component
 {
     constructor(props)
     {
     super(props);
    }
     render()
     {
         const b=this.props.result[0];
         if(processedData.length!==0){
             console.log(processedData);
        console.log(processedData[0]);
         }
         //console.log(this.props.result.details);
         return(
             <div>
            
             </div>
         );
     }
    
 }
 export default SearchResults;