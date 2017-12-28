import React, { Component } from 'react';

import $ from 'jquery';
class Footer extends Component {

    componentDidMount()
    {
         $(".container").css("background-color", ' #60003a');
         $(".footer-copyright").css("background-color", ' #60003a');
$(".page-footer").css("background-color", ' #60003a');
         
         
    }

    render()
    {
        return(
<div>
    <footer class="page-footer">
          <div class="container">
            <div class="row">
              <div class="col l6 s12">
                <h5 class="white-text">About Mindtree Library</h5>
                <p class="grey-text text-lighten-4">For more details....</p>
              </div>
              <div class="col l4 offset-l2 s12">
                <h5 class="white-text">Links</h5>
                <ul>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a class="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-copyright">
            <div>
            © 2017 Copyright 
            {/*<a class="grey-text text-lighten-4 right" href="#!">More Links</a>*/}
            </div>
          </div>
        </footer>
    </div>


        )
    }
}

export default Footer;