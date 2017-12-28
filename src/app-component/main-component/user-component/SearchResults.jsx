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
         console.log('hello');
         console.log(processedData);
         return(
             <div>
            
             </div>
         );
     }
    
 }
 export default SearchResults;