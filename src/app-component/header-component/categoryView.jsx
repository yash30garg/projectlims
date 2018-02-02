import React,{Component} from 'react';
import './bootheader.css';
import EachCategoryCard from './eachCategoryCard'
// import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {controller,handleController} from './bootheader';
var route;
// eslint-disable-next-line
var oldURL = "", currentURL = window.location.href;
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
        display:''
    }
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
     this.setState({cb:filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
        return(
            <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

        )

    })
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
    if(this.state.b<filteredArray.length)
    {
        this.setState({a:this.state.a+17});
        this.setState({b:this.state.b+17});
        this.changeInHash();
    }  
    }
    previous_click_handler=()=>
    {
    if(this.state.a>=17)
    {
        this.setState({a:this.state.a-17});
        this.setState({b:this.state.b-17});
        this.changeInHash();
    }
}  
changeInHash = () => {
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
     this.setState({cb:filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
        return(
            <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

        )

    })
     })
          })
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
if(route[1]==="category"){
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

checkURLchange();

return(
    <div id={`i${this.state.category.toLowerCase()}`} className="mainDiv">
        <br/>
    <div className="contained mainDiv">
        <ol className="breadcrumb" style={{backgroundColor : "#614126", color : "white", height:"45px" , fontSize : "15px"}}  >
        <h5 >{this.state.category.toUpperCase()} <span style={{float:'right',cursor:'pointer',paddingLeft:'85px'}} id="openHome" onClick={(e)=> {e.preventDefault(); window.location='/#/'}}>x</span></h5>
        </ol>
    <div className="row ml-1 mr-1">
     {this.state.cb}
    </div>
    <div className="row ml-1 mr-1" style={{paddingLeft:"40%"}}>
     <button onClick={this.previous_click_handler} className="btn-primary" style={{backgroundColor:"#614126"}}>Previous</button>
      <button onClick={this.next_click_handler} className="btn-primary" style={{backgroundColor:"#614126"}}>Next</button>
    </div>
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