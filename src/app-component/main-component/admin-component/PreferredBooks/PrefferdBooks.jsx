import React, {Component} from 'react';
import axios from 'axios';
import './PrefferedBooks.css';
import {connect} from 'react-redux';
import EachPrefferedCard from './eachPreferredBook'
// import $ from 'jquery'; var preferredBooks = [];
let bbooks;
class PBooks extends Component {

    constructor() {
        super();
        // alert("in pf")
        this.state = {
            storeId: "imga"
        }
        // this.getVal=this.getVal.bind(this);
    }

    // componentDidMount() {
    //             this.setState({display: window.display});
    // }
    // getVal=()=>{
    //     bbooks=storeBbooks.getState().bbooks;
    //     this.setState({
    //         books:bbooks
    //     })
    // }
    render()
    {
        // if(this.state.books.length===0){
        //     this.getVal();
        // }
        // window.display=this.props.books;
        bbooks=this.props.bbooks;
        // console.log(this.state.books.length)
        // alert("pf")
    //    let bbooks= storeBbooks.getState().bbooks;
    //    console.log("in")
    // //    console.log("in")
    //    console.log(storeBbooks.getState().bbooks)
        // console.log("val "+bbooks.length)
    //    alert(bbooks.length)
        // alert("pf")

        let s1,
            s2,
            s3,
            s4;
        if (window.display.length !== 0 && bbooks !== null) {
            let b = window.display
                .filter((res) => res.rating >= 1 && (res.category === "Javascript" || res.category === "javascript"));
            s1 = <div className="carousel-item mt-2">
                {b
                    .slice(0, 6)
                    .map((r) => {
                        return (<EachPrefferedCard key={`pref${r.isbn}`} item={r} data={bbooks}/>);
                    })}
            </div>
            b = window.display
                .filter((res) => res.rating >= 1 && (res.category === "Angular" || res.category === "angular"));
                if(bbooks.length!==0){
            s2 = <div className="carousel-item mt-2">
                {b
                    .slice(0, 6)
                    .map((r) => {
                        return (<EachPrefferedCard key={r.isbn} item={r} data={bbooks}/>);
                    })}
            </div>
                }
                else{
                    s2=<div></div>
                }
            b = window.display
                .filter((res) => res.rating >= 1 && 
                (res.category === "React" || res.category === "react"));
            s3 = <div className="carousel-item mt-2">
                {b
                    .slice(0, 6)
                    .map((r) => {
                        return (<EachPrefferedCard key={`book${r.isbn}`} item={r} data={bbooks}/>);
                    })}
            </div>
        }
        return (
            <div>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel">

                    <div

                        className="carousel-inner"
                        role="listbox">
                        <div className="carousel-inner" role="listbox">

                            <div className="carousel-cell">
                                <div className="carousel-item active mt-2">
                                    <img
                                        className="d-block activeImage mx-auto"

                                        alt="First slide"
                                        height="208"
                                        src={require("../../../../Assets/Images/active_whats_new.png")}/>
                                </div>
                                {s1}
                                {s2}
                                {s3}
                                {s4}

                            </div>
                            <br/> {/*<br/>*/}
                            <ol className="carousel-indicators">
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="0"
                                    className="active"
                                    style={{
                                    color: "purple"
                                }}></li>
                                <li
                                    data-target="#carouselExampleIndicators"
                                    data-slide-to="1"
                                    style={{
                                    color: "purple"
                                }}></li>

                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                        </div>
                    </div>
                    <div
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev">
                        <span className="arrowLeft" aria-hidden="true" style={{color : "#26a69a"}}></span>
                        <span className="sr-only" style={{color : "#26a69a"}}>Previous</span>
                    </div>
                    <div
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next">
                        <span className="arrowRight" aria-hidden="true"></span>
                        <span className="sr-only arrow">Next</span>
                    </div>
                </div>
                <div id="myModal" className="modal">
                    <span className="close">&times;</span>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <img alt="" className="modal-content" id="img01" height="500px" width="400px"/>
                            </div>
                            <div className="col-md-6">
                                <div id="caption"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        bbooks: state.bbooks
    };
}
export default connect(mapStateToProps)(PBooks);