import React,{Component} from 'react';
import { processedData } from './../../search-component/Search';
class SearchResults extends Component
 {
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
            {b}
             </div>
         );
     }
    
 }
 export default SearchResults;