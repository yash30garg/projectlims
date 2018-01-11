import React, { Component } from 'react';
import Footer from '../footer.jsx';
import Header from '../../header-component/header.jsx';
import './aboutus.css';
import $ from 'jquery';
export default class AboutUs extends Component {

    componentDidMount() {



    }
    render() {
        return (
            <div>


            <main>
  <h1>Our Team</h1>
  <ul>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo01.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo02.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo03.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo04.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo05.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo06.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo07.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo08.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo09.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo10.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo11.jpg" /></li>
    <li><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/10558/photo12.jpg" /></li>
  </ul>
  <p>Thanks to <a href="http://www.wocintechchat.com">#WOCinTech</a> for the groovy stock photos.</p>
</main>

            </div>
        )
    }
}