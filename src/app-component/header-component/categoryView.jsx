import React,{Component} from 'react';
import './bootheader.css';
// import EachCategoryCard from './eachCategoryCard'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
// import {controller,handleController} from './bootheader';
var b, route;
let handle=(data)=>{
window.selected=data;
}
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
            console.log("booksssssss");
            console.log(response);
            localStorage.setItem('books',JSON.stringify(response))
            this.setState({
              display: response,
              flag:true
            })
    
    filteredArray=[];
    console.log(route[2])
    console.log(response)
    if(route[2]==="all")
    {
          filteredArray=window.display.sort((a, b) => {
              console.log(a)
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
    console.log(filteredArray)
     this.setState({cb:filteredArray.map(res=>{   
        return(
         
                <div
                key={`filter${res.isbn}`}
                onClick={()=>handle(res)}
                className="col-lg-2 col-md-4 col-sm-4 col-xs-4 mt-2 mb-3">
            
        <div
                className="card-img particular mx-auto"
                id={res.isbn}
                style={{
                    height:"13rem", width:"160px"
            }}>
            <Link to="/details">
                <img
                    alt=""
                    className="mx-auto"
                    src={res.url}
                    height="160px"
                    width="100%"/>
                   <div className="card-block card-text" style={{width:"160px", fontSize:"14px"}}>
                    {res.title}
                    </div>
                     <div className="overlay" style={{backgroundColor: "rgba(97,65,38,0.9)"}}>
                    <div className="text container-fluid" style={{fontSize:'13px'}}>
                        <b>{res.title}</b><br/>
                        <b>Author :
                        </b>
                        {res.author}<br/>
                        {
                            //eslint-disable-next-line
                            [1, 2, 3, 4, 5].map(d => {

                            if (res.rating >= d) 
                                return <span
                                key={`category${res.isbn}`}
                                    className="fa fa-star"
                                    style={{
                                    color: '#ffd700',
                                    fontSize:'5px'
                                }}></span>
                        })}
                    </div>
                </div>
                </Link>
                </div>
</div>

        )

    })
     })
          })
} 
componentWillMount() {
    this.setState({category:route[2]})
}
    next_click_handler=()=>
    {
    if(this.state.b<filteredArray.length)
    {
        this.setState({a:this.state.a+17});
        this.setState({b:this.state.b+17});
    }  
    }
    previous_click_handler=()=>
    {
    if(this.state.a>=17)
    {
        this.setState({a:this.state.a-17});
        this.setState({b:this.state.b-17});
    }
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

//     const b=filteredArray.filter((res,index)=>(index>=this.state.a && index<=this.state.b)).map((res,index)=>{   
//         return(
//             <EachCategoryCard key={`filter${res.isbn}`} eachValue={res}/>

//         )

//     })
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
}
function mapStateToProps(state) {
    return {
        books: state.books
    };
}
export default connect(mapStateToProps)(Category);
// export default Category;