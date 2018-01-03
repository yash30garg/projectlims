import React, {Component} from 'react';
import Details from './details.jsx';
import Rx from 'rxjs';
import Header from '../header-component/header';
export class BookDetails extends Component{
    constructor(){
        super();
        this.state={
            book:''
        }
        Rx.Observable.fromPromise(fetch('https://api.myjson.com/bins/19krvn'))
            .flatMap((response) => response.json())
            .subscribe(values => {
                this.setState({book:values.booksArray[0]})
                // console.log(book);
                // this.state={ book: values }
            })
    }
    render(){
        let a=null;
        if(this.state.book!=''){
            a=<Details data={this.state.book}/>
        //console.log(this.state.book)
        }
        // if(book!==''){
        //     console.log("not")
        // }
        return(
            <div>
            <Header/>
            {a}
            </div>
        )
    }
}