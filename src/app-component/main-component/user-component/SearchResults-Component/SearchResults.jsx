import React,{Component} from 'react';
import { processedData } from '../../../search-component/Search';
import $ from 'jquery';
class SearchResults extends Component
 {
     constructor(props)
     {
     super(props);
    }
 
     render()
     {
                 $(function() {
    $('.card').hover(
        function() {
            $(this).find('> .card-image > img.activator').click();
        }, function() {
            $(this).find('> .card-reveal > .card-title').click();
        }
    );
});


         const a=processedData.map(res=>{
             return(
                     <div class="card col s6 m3">
    <div class=" card-image waves-effect waves-block waves-light">
      <img class="activator" src={res.details.url} alt="not available" width="250" height="200" />
    </div>
    <div className="card-content">

        <b>Title: </b><span>{res.details.title}</span><br/>
        <b>Category: </b><span>{res.details.category}</span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">Book Details<i className="material-icons right">close</i></span>
        <b>ISBN: </b><span>{res.isbn}</span><br/>
        <b>Author: </b><span>{res.details.author}</span><br/>
        <b>Publisher: </b><span></span>{res.details.publisher}<br/>
        <b>Rating: </b><span>{res.details.rating}</span><br/>
        <b>Copies available: </b><span>{res.details.copies}</span>
    </div>
  </div>
             );
         })

         return(
             <div className="container row">
             {a}
             </div>
         );
     }
    
 }
 export default SearchResults;