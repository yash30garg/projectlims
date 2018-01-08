import React, { Component } from 'react';
import './prodetails.css';
class Profile extends Component {

  
  render() {

    return (
    <div>

<div class="container-fluid" style={{backgroundColor : "#7FFFD4", minHeight : "33px"}} >
	<div class="innerwrap">
		<section class="section1 clearfix">
			<div>
				<div class="row grid clearfix">
					<div class="col2 first">
						
						<h1>M S Dhoni</h1>
						<p>India's most successful captain across all formats</p>
						
					</div>
					<div class="col2 last">
						<div class="grid clearfix">
							<div class="col3 first">
								<h1>4</h1>
								<span>Books Borrowed</span>
							</div>
							<div class="col3"><h1>9</h1>
							<span>Wishlist</span></div>
							<div class="col3 last"><h1>12</h1>
							<span>Books Requested</span></div>
						</div>
					</div>
				</div>
				<div class="container" style={{minHeight : "33px"}}>
					<ul class="row2tab clearfix">
						<li><i class="fa fa-list-alt"></i> My Books </li>
						<li><i class="fa fa-heart"></i> My WishList </li>
						<li><i class="fa fa-check"></i> My Requests </li>
						<li><i class="fa fa-thumbs-o-up "></i> Reviews </li>
					</ul>
				</div>
			</div>
			<span class="smalltri">
				
			<i class="fa fa-star"></i>
			</span>
		</section>
		<section class="section2 clearfix">
			<div class="grid">
				<div class="col3 first">
					<div class="postcont"><img src="http://www.ohmyindia.com/wp-content/uploads/2017/09/dhoni8.jpg" alt="" />
					</div>
					<div class="profileinfo">
						<img src="http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg" alt="" />
						<p>MS Dhoni has hit most sixes for India in international cricket</p>
						<span>Read more <i class="fa fa-angle-right"></i></span>
					</div>
				</div>
				<div class="col3 center">
					<div class="postcont"><img src="https://d1u4oo4rb13yy8.cloudfront.net/article/67350-wcbqbtpugy-1504272183.jpg" alt="" />
					</div>
					<div class="profileinfo">
						<img src="https://d1u4oo4rb13yy8.cloudfront.net/article/67350-wcbqbtpugy-1504272183.jpg" alt="" />
						<p>MS Dhoni has been involved in most T20 wins</p>
						<span>Read more <i class="fa fa-angle-right"></i></span>
					</div>
				</div>
				<div class="col3 last">
					<div class="postcont"><img src="http://ste.india.com/sites/default/files/2017/07/06/607698-ms-dhoni-pc-pti4.jpg" alt="" />
					</div>
					<div class="profileinfo">
						<img src="http://images.contactmusic.com/newsimages/david_beckham_1133321.jpg" alt="" />
						<p>MS Dhoni has captained most number of intl. matches</p>
						<span>Read more <i class="fa fa-angle-right"></i></span>
					</div>
				</div>
			</div>
		</section>
	</div>
</div>	


   </div>
    )}
}
export default Profile;