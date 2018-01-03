import React, {Component} from 'react';
import axios from 'axios';
import Rx from 'rxjs';
let users,
    books,
    book;
class Details extends Component{
    constructor(){
        super();
        axios
            .get('https://api.myjson.com/bins/19krvn')
            .then(res => {
                this.state={output: res.data};
                books = this.state.output;
                book=books.booksArray[0]
                console.log(book);
                // const b = users.filter((res) => res.user.mid === "1042948")
                // console.log(b[0].userBooks);
                // books = b[0].userBooks
            });
        
    }
// componentDidMount()
//     {
        
//             //  Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/19krvn'))
//             // .flatMap((response) => response.json())
//             // .subscribe(values => {
//             //     this.setState({ data: values })
//             //     console.log(this.state.data);
//             // })
//     }
render(){
    return(
        <div className="container-fluid">
        <div className="row">
        <div className="col-md-4">
        {/*<img src={book.details.url} height="300vh"/>*/}
        </div>
        </div>
        </div>
    )
}

}
export default Details;