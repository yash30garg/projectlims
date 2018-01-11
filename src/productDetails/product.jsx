import React, { Component } from 'react';
import Footer from '../app-component/footer-component/footer';
import Header from '../app-component/header-component/header';
import './product.css';
import $ from 'jquery';
export default class ProductDetails extends Component {

    componentDidMount()
    {
       
 

    }
    render() {
        return (
            <div>
                <Header />

                <div class="wrapper">
	<div class="gradient">
		<div class="left">
			<h5>Recipient</h5>
			<h4>Nitish Bali</h4>
			
			<h5>Book</h5>
			<h4>React for Beginners</h4>
			
			<h5>Published By</h5>
			<h4>Yash Garg</h4>
			
			<h5>Author</h5>
			<h4>Anirudh</h4>
			
			<h5>Category </h5>
			<h4>Web Tech</h4>
		</div>
		<div class="right">
			<div class="mast">
				<img src="https://www.mindtree.com/themes/custom/mindtree_theme/logo.svg" alt="Sellr" class="logo pull-left" />
				{/*<span class="date pull-right">Dec 23, 2015 &mdash; 13:45:05 GMT</span>*/}
				<div class="clearfix"></div>
			</div>
			<div class="invoice">
				<h2>React for beginners</h2> <h3 class="price pull-right">Ratings</h3>
				<div class="product-details">
					<a href="#" class="">View Product Page</a> 					 &mdash; 
					<a href="#" class="">Download</a>
				</div>
				
			</div>
			
			<div class="footer">
				<p class="tonote">Things to note</p>
				<p>If you are unsatisfied with your purchase or the product is not as described, please contact the seller of your product, Sellr does not represent the seller.</p>
				<p>Please make sure to download your products <i>immediately</i>, as items can get removed from time to time. Sellr can't recover removed products and files.</p>
				<a href="https://www.sellr.co/help">www.sellr.co/help</a>
			</div>
		</div>
		<div class="clearfix"></div>
	</div>
</div>

                <Footer />
            </div>
        )
    }
}