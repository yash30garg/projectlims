import React, {Component} from 'react';
import $ from 'jquery';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {storeReviews} from '../../state/action/reviewAction';
import {css} from 'glamor'
import {borrowDate} from '../dates'
import {toast} from 'react-toastify';
import {addReview} from '.././mongo/addReview'
// import {getReview} from '.././mongo/getReview'
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
    // eslint-disable-next-line
        var item = new Object();
        item.mid = window.user;
        // var name=localStorage.getItem('user-name');
        // var names=name.split("")
        item.name=localStorage.getItem('user-name').split('"')[1]
        item.rating=ratingValue;
        item.date=borrowDate;
        item.description = document
            .getElementById("desc")
            .value;

            var review;
            (async function () {
                review = await addReview(this.props.data.isbn, item);
                this
                .props
                .storeReviews(review)
            })
            .bind(this)();
              
        document.getElementById("desc").value="";
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
        if(this.props.reviews===null){
            reviewData=(<h5 className="text-left ml-4">This Book Has not been reviewd yet. Add a Review Now</h5>)
        }
        else{
            var values=this.props.reviews.map((res)=>{
                return(
                    <div className="card review-card ml-3 mb-4">
                    <div className="text-left ml-3 mt-3 mb-0">
                    <ul>
                    <li><b style={{fontSize:"24px"}}>{res.name} says:</b>
                    </li>
                    <br/>
                    <li style={{fontSize:"18px"}}>{res.description}</li>
                    <li className="mt-2 mb-0">
                    {//eslint-disable-next-line
                                            [1, 2, 3, 4, 5].map(d => {

                                                if (res.rating >= d) 
                                                    return <span
                                                        key={`review${this.props.data.isbn}`}
                                                        className="fa fa-star"
                                                        style={{
                                                        color: '#ffd700',
                                                        fontSize: '16px'
                                                    }}></span>
                                            })}
                   <span className="mr-3" style={{color:"rgb(169,169,169)", float:"left",fontSize:"16px",position:"absolute",right:"1%", bottom:"2%"}}>{res.date}</span>
                   </li>
                    </ul>
                    </div>
                    </div>
                )
            })
            reviewData=(<div className="text-left ml-4 mr-4">
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
        var cardReview=(<div className="card review-card ml-5" style={{backgroundColor:"rgb(255, 248, 220)", marginRight:"5%"}}>  
        <h5 className="text-left mt-4 mb-2 ml-3"><b><u>Description</u></b></h5>
                            <textarea rows="2" cols="50" className="review-input mt-3 ml-3 mr-3" style={{backgroundColor:"rgb(255, 248, 220)", width:"95%"}} placeholder="Description" id="desc"/>   
                            <div class='rating-widget ml-4 mt-3'>
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
                            <div className="text-right">
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
                            {reviewData}
                            <div className="text-right">
                            {this.state.review?cardReview:<button className="btn  details-btn col-md-3 col-xs-3 col-sm-3 col-lg-3 mt-2 ml-2 mr-2" style={{borderColor: "rgb(205,133,63)", width:"95%",overflow:"hidden"}} onClick={this.leaveReview}><div className="fa fa-pencil fa-lg"></div><b>Leave A Review</b> </button>}
                            </div>
                            </div> 
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {bbooks: state.bbooks, wbooks: state.wbooks,reviews:state.reviews};
}
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        storeReviews:storeReviews
    }, dispatch);
}
export default connect(mapStateToProps,matchDispatchToProps)(Reviews);