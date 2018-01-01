import React,{Component} from 'react';
import { processedData } from './Search';
import $ from 'jquery';
import './Search.css';
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
                 <div className="col-md-6 col-sm-12 col-lg-3 each">
        <div className="card" style={{ width: '20rem' }}>
      <img className="card-img-top" src={res.details.url} alt="not available" height="200vh"/>
    <div className="card-block text-block">
        <b>Title: </b><span>{res.details.title}</span><br/>
        <b>Category: </b><span>{res.details.category}</span>
    </div>
  </div>
  </div>
             );

//     <div class="card" style="width: 20rem;">
//   <img class="card-img-top" src="..." alt="Card image cap">
//   <div class="card-block">
//     <h4 class="card-title">Card title</h4>
//     <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//     <a href="#" class="btn btn-primary">Go somewhere</a>
//   </div>
// </div>
         })

         return(
             <div className="row eachRow">
             {a}
             </div>
         );
     }
    
 }
 export default SearchResults;