import React, {Component} from 'react';
import Header from '../header-component/header';
import Footer from '../footer-component/footer';
import Details from './details';
import {requireAuth} from '../isLoggedIn.js'
let val;
export class BookDetails extends Component{
    componentWillMount() {
        // requireAuth(window.location.href)
    }
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