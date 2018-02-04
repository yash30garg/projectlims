import React,{Component} from 'react';
import './bootheader.css';
import EachCategoryCard from './eachCategoryCard'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import LoadingEffect from '../loading-component/loading'
import $ from 'jquery'
// import {controller,handleController} from './bootheader';
var route;
// eslint-disable-next-line
var oldURL = "", currentURL = window.location.href, flag=0;;
// let handle=(data)=>{
// window.selected=data;
// }
let filteredArray=[];
 class Category extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
        wishlistIcon:true,
        requestIcon:true,
        a:0,
        b:17,
        cb:'',
        showButton:false,
        category:'',
        display:'',
        catLength:'',
        pageNo:1
    }
    flag=0;
    route = window.location.hash.split('/')
    if(route[1]==="category") {
    this.setState({category:route[2]})
    fetch('https://limsreactapi.azurewebsites.net/books/getBooks',
        // fetch('http://localhost:3005/books/getBooks',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then((response) => response.json())
          .then((response) => {
              window.dispay=response
            //console.log(("booksssssss");
            //console.log((response);
            localStorage.setItem('books',JSON.stringify(response))
            this.setState({
              display: response,
              flag:true
            })
    
    filteredArray=[];
    //console.log((route[2])
    //console.log((response)
    if(route[2]==="all")
    {
          filteredArray=window.display.sort((a, b) => {
              //console.log((a)
                if (a.category.toUpperCase() > b.category.toUpperCase()) {
                    return 1;
                } else if (a.category.toUpperCase() < b.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
    }
    else
    {
    filteredArray=window.display.filter(r=>r.category.toLowerCase()===this.state.category.toLowerCase()).sort((a,b)=>{return(b.rating-a.rating)})
    }
    //console.log((filteredArray)
    //  this.setState({cb:filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{
     this.setState({cb:filteredArray
     })
          })
    }
} 
componentWillMount() {
    if(route[1]==="category")
    this.setState({category:route[2]})
}
    next_click_handler=()=>
    {
    if(this.state.b<=this.state.cb.length)
    {
        this.setState({a:this.state.a+18});
        this.setState({b:this.state.b+18,
        pageNo:this.state.pageNo+1});
        // this.paginationCat()
    }  
    }
    previous_click_handler=()=>
    {
    if(this.state.a>0)
    {
        this.setState({a:this.state.a-18});
        this.setState({b:this.state.b-18,
        pageNo:this.state.pageNo-1});
        // this.paginationCat();
    }
}  
changeInHash = () => {
    this.setState({a:0,b:17})
    route = window.location.hash.split('/')
    this.setState({category:route[2]})
    fetch('https://limsreactapi.azurewebsites.net/books/getBooks',
        // fetch('http://localhost:3005/books/getBooks',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then((response) => response.json())
          .then((response) => {
              window.dispay=response
            localStorage.setItem('books',JSON.stringify(response))
            this.setState({
              display: response,
              category:route[2],
              flag:true
            })
    
    filteredArray=[];
    if(route[2]==="all")
    {
          filteredArray=window.display.sort((a, b) => {
              //console.log((a)
                if (a.category.toUpperCase() > b.category.toUpperCase()) {
                    return 1;
                } else if (a.category.toUpperCase() < b.category.toUpperCase()) {
                    return -1;
                } else {
                    return 0;
                }
            });
    }
    else
    {
    filteredArray=window.display.filter(r=>r.category.toLowerCase()===this.state.category.toLowerCase()).sort((a,b)=>{return(b.rating-a.rating)})
    }
     this.setState({cb:filteredArray
     })
          })
}

paginationCat = () => {
    this.setState({cb:filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
        return(
            <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

        )

    })
     })
}

componentDidMount() {
    flag=1;
}

    sortTitle = () => {
        this.flag = !this.flag;
    let i = this.flag;
    filteredArray=this.state.cb.sort(function (a, b) {
        if (a.title < b.title) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.title > b.title) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    this.setState({cb:filteredArray})
}

    sortAuthor = () => {
    this.flag = !this.flag;
    let i = this.flag;
    filteredArray=this.state.cb.sort(function (a, b) {
        if (a.author < b.author) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.author > b.author) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    this.setState({cb:filteredArray})    
}
    sortPublish = () => {
    this.flag = !this.flag;
    let i = this.flag;
    filteredArray=this.state.cb.sort(function (a, b) {
        if (a.publisher < b.publisher) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.publisher > b.publisher) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
        this.setState({cb:filteredArray})
}
    sortRating = () => {
    this.flag = !this.flag;
    let i = this.flag;
    filteredArray = this.state.cb.sort(function (a, b) {
        if (a.rating > b.rating) {
            if (i)
                return -1;
            else
                return 1;
        }
        if (a.rating < b.rating) {
            if (i)
                return 1;
            else
                return -1;
        }
        return 0;
    }
    )
    this.setState({cb:filteredArray})    
}

    


    render()
    {
//     if(route[2]==="all")
//     {
//           filteredArray=this.props.data.sort((a, b) => {
//                 if (a.category.toUpperCase() > b.category.toUpperCase()) {
//                     return 1;
//                 } else if (a.category.toUpperCase() < b.category.toUpperCase()) {
//                     return -1;
//                 } else {
//                     return 0;
//                 }
//             });
//     }
//     else
//     {
//     filteredArray=this.props.data.filter(r=>r.category.toLowerCase()===this.state.category.toLowerCase()).sort((a,b)=>{return(b.rating-a.rating)});
// }
// if(controller===0) {
//     handleController();
//     if(filteredArray.length>18)
//         {
//           this.setState({showButton:true});
//         }
//         if(filteredArray.length<18)
//         {
//             this.setState({showButton:false})
//         }
//     this.setState({a:0,b:17})
    
// }

    // const b=filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
    //     return(
    //         <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

    //     )

    // })
if(route[1]==="category"&&route[2]!==undefined){
var checkURLchange = (currentURL) =>{
    if(window.location.href !== oldURL){
        oldURL = window.location.href;
        this.changeInHash()
    }

    oldURL = window.location.href;
    setInterval(function() {
        checkURLchange(window.location.href);
    }, 1000);
}
if(flag===1)
checkURLchange();

$(document).ready(function () {
            $('.contained section .sortTypes li a').click(function (e) {
                e.preventDefault();
                $('.contained section .sortTypes li.activeSortElement').removeClass('activeSortElement');

                var $parent = $(this).parent();
                $parent.addClass('activeSortElement');
                e.preventDefault();
            });
        });

return(
    <div id={`i${this.state.category.toLowerCase()}`}>
        <br/>
    <div className="contained">
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white", height:"45px" , fontSize : "15px"}}  >
        <h5 >{this.state.category.toUpperCase()} <span style={{float:'right',cursor:'pointer',paddingLeft:'85px'}} id="openHome" onClick={(e)=> {e.preventDefault(); window.location='/#/'}}>x</span></h5>
        </ol>
        {this.state.cb.length>1?<div>
                            <section className="sortInline form-group">
                                <span className="sortName">
                                    <span>Sort By</span>
                                </span>
                                <ul className="sortTypes">
                                    <li className="sortElement activeSortElement" onClick={(event) => {
                                        event.preventDefault();
                                        this.changeInHash();
                                    }}><a id="defaultSearchResults">Default</a></li>
                                    <li className="sortElement" onClick={(event) => {
                                        event.preventDefault();
                                        this.sortTitle();
                                        {/*this.notifySort();*/}
                                    }}><a>Title</a></li>
                                    <li className="sortElement" onClick={(event) => {
                                        event.preventDefault()
                                        this.sortAuthor();
                                        {/*this.notifySort();*/}
                                    }}><a>Author</a></li>
                                    <li className="sortElement" onClick={(event) => {
                                        event.preventDefault();
                                        this.sortPublish();
                                        {/*this.notifySort();*/}
                                    }}><a>Publisher</a></li>
                                    <li className="sortElement" onClick={(event) => {
                                        event.preventDefault();
                                        this.sortRating();
                                        {/*this.notifySort();*/}
                                    }}><a>Rating</a></li>
                                </ul>

                            </section>
                            <div className="btn-group setDropdown">

                                <select className="form-control" id="filterCat" onChange={(e) => {
                                    e.preventDefault();
                                    {/*this.notifyFilter();*/}
                                }} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="dropdown-toggle"></span>
                                    <option className="dropdown-item" >Filter By</option>
                                    <option className="dropdown-item">Filter By 5 Rated</option>
                                    <option className="dropdown-item">Filter By 4 and above</option>
                                    <option className="dropdown-item" >Filter by 3 and above</option>
                                    <option className="dropdown-item">Filter by 2 and above</option>
                                </select>
                            </div>
                        </div>:null}
    <div className="row ml-1 mr-1">
     {this.state.cb!==null&&this.state.cb!==undefined&&this.state.cb!==""?this.state.cb.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{        
        return(
            <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

        )

    }):<LoadingEffect/>}
    </div>
    {this.state.cb.length>18?<div className="row col-md-12">
     <div className="col-md-4">{this.state.a>0?<button onClick={this.previous_click_handler} className="btn-primary" style={{backgroundColor:"#614126"}}>Previous</button>:null}</div>
     <div className="col-md-4">{this.state.cb.length>18?<div>{this.state.pageNo}</div>:null}</div>
      <div className="offset-md-3 col-md-1">{this.state.b<this.state.cb.length-1?<button onClick={this.next_click_handler} className="btn-primary" style={{backgroundColor:"#614126"}}>Next</button>:null}</div>
    </div>:null}
    </div>
    </div>
)
}
else {
    return(
        <div>{window.locatio="/#/"}</div>
    )
}
    }
}
function mapStateToProps(state) {
    return {
        books: state.books
    };
}
export default connect(mapStateToProps)(Category);
// export default Category;