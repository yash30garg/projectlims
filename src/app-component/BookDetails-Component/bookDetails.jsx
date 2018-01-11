import React, {Component} from 'react';
import Header from '../header-component/header';
import Footer from '../footer-component/footer';
import Details from './details';
let val;
export class BookDetails extends Component{
    render(){
        val=window.selected;
        console.log(val);
        const a=<Details data={val}/>
        return(
            <div>
            <Header/>
            {a}
            <Footer/>
            </div>
        )
    }
}