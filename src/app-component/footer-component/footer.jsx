import React, { Component } from 'react';
import './footer.css'
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
<div className="fixed">
    <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About Mindtree Library</h5>
                <p className="grey-text text-lighten-4">For more details....</p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
                  <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
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