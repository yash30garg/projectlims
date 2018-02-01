import React, {Component} from 'react';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {storeReviews} from '../../state/action/reviewAction';
import {css} from 'glamor'
import {ToastContainer, toast} from 'react-toastify';
import {addReview} from '.././mongo/addReview'
import {getReview} from '.././mongo/getReview'
let ratingValue,reviewData;
class Reviews extends Component{
    constructor(){
        super();
        this.state={
            review:false
        }
    }
    leaveReview=()=>{
        this.setState({
            review:true
        })
    }

    addReview = () => {
    // alert(ratingValue)
        var item = new Object();
        item.mid = window.user;
        item.rating=ratingValue;
        alert(ratingValue)
        alert(item.rating)
        item.title=document.getElementById("title").value;
        item.description = document
            .getElementById("desc")
            .value;
            console.log(item);
            // alert(item.title);
            var review;
            // alert(item.description);
            (async function () {
                review = await addReview(this.props.data.isbn, item);
                console.log(review);
            })
            .bind(this)()
             this
                .props
                .storeReviews(review)
        document.getElementById("desc").value="";
        document.getElementById("title").value="";
        this.setState({
            review:false
        })
         toast.success("Successfully Added !!!", {
                    position: toast.POSITION.BOTTOM_CENTER,
                    className: css({background: "brown"})
                });
    }

    close=()=>{
        this.setState({
            review:false
        })
    }
    render(){
        if(this.props.revData===null){
            reviewData=(<h5 className="text-left ml-4">This Book Has not been reviewd yet. Add a Review Now</h5>)
        }
        else{
            alert()
            var values=this.props.revData.map((res)=>{
                return(
                    <li>
                    <h6>
                    {res.title}
                    </h6>
                    <div>{res.description}
                    <br/>
                    {res.rating} stars by {res.mid}
                    </div>
                    </li>
                )
            })
            reviewData=(<div className="text-left ml-4">
                        {values}
                        </div>)
        }
                let i;
        $(document).ready(function(){
  
  /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  }); 
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }   
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }  
    ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
  });
});
        var cardReview=(<div style={{backgroundColor:"rgb(255, 248, 220)", marginRight:"5%"}}>  
        <h6 className="text-left mb-1 ml-2"><b><u>Title</u></b></h6>
                            <input type="text" className="review-input ml-2 mr-3" style={{backgroundColor:"rgb(255, 248, 220)", width:"95%"}} placeholder="Title" id="title"/>   
        <h6 className="text-left mt-3 mb-2 ml-2"><b><u>Description</u></b></h6>
                            <textarea rows="1" cols="50" className="review-input ml-2 mr-3" style={{backgroundColor:"rgb(255, 248, 220)", width:"95%"}} placeholder="Description" id="desc"/>   
                            <div class='rating-widget ml-3 mt-3'>
                            <div class='rating-stars text-left'>
                                <ul id='stars'>
                                <li class='star' title='Poor' data-value='1'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='Fair' data-value='2'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='Good' data-value='3'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='Excellent' data-value='4'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                <li class='star' title='WOW!!!' data-value='5'>
                                    <i class='fa fa-star fa-fw'></i>
                                </li>
                                </ul>
                            </div>
                            </div>
                            <br/><br/>
                            <div className="text-left">
                            <button className="btn  details-btn col-md-2 col-xs-2 col-sm-2 col-lg-2 mt-1 ml-2 mr-2" style={{borderColor: "rgb(205,133,63)", width:"95%",overflow:"hidden",fontSize:"auto"}} onClick={this.addReview}><div className="fa fa-pencil fa-lg"></div><b>Add</b> </button> 
                            <button className="btn  details-btn col-md-2 col-xs-2 col-sm-2 col-lg-2 mt-1 ml-2 mr-2" style={{borderColor: "rgb(205,133,63)", width:"95%",overflow:"hidden"}} onClick={this.close}><div className="fa fa-times fa-lg"></div><b>Cancel</b> </button> 
                            </div>  
                            </div> 
                         );
        return(
            <div className="col-md-12 mt-0 mb-5">
            <div className="card review-card" style={{backgroundColor:"rgb(255, 248, 220)",marginLeft:"7%", marginRight:"5%"}}>  
                            <h3 className="col-md-6 text-left mt-2 ml-2" style={{color:"rgb(205,133,63)"}}>Reviews</h3> 
                            <br/>     
                            {reviewData}<br/>
                            {this.state.review?cardReview:<button className="btn  details-btn col-md-3 col-xs-3 col-sm-3 col-lg-3 mt-2 ml-2 mr-2" style={{borderColor: "rgb(205,133,63)", width:"95%",overflow:"hidden"}} onClick={this.leaveReview}><div className="fa fa-pencil fa-lg"></div><b>Leave A Review</b> </button>}
                            </div> 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {reviews:state.reviews};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        storeReviews:storeReviews
    }, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Reviews);