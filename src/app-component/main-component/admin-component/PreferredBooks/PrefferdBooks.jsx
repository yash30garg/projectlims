import React, { Component } from 'react';
import axios from 'axios';
// import PrefferedBooks from './PrefferedBooks.css';
import $ from 'jquery';

class PBooks extends Component 
{

    state =
    {
        display: [],
    }


    componentDidMount()
     {
        axios.get('https://api.myjson.com/bins/eobyn')
            .then(res => {
                this.setState({ display: res.data });
                
            })

        // $('.carousel.carousel-slider').carousel({fullWidth: true});

        $(document).ready(function(){
      $('.carousel').carousel({
            dist:0,
            shift:0,
            padding:20,

      });

    });
        
    //        $(document).ready(function(){
    //   $('.carousel').carousel();
    // });
    }
render()
     {
        const a = this.state.display.map((result) => {
            if (result.details.rating >=4) {
                return (
                    
                  
    
    <a class="carousel-item" > <img src= {result.details.url} height="200" /></a>

                
                )
            }
        })
        return (
            <div>
{/*<div class="carousel carousel-slider">
{a}
    
  </div>*/}
   <div class="carousel">
  {a}

  </div>
            </div>
        )



    }
    
}



export default PBooks;

