import React, {Component} from 'react';
import Header from '../header-component/header';
import Footer from '../footer-component/footer';
import Details from './details';
import AlternateHeader from '../../app-component/header-component/AlternateHeader/AlternateHeader.jsx';
import {requireAuth} from '../isLoggedIn.js'
// let val;
export default class BookDetails extends Component{
    componentWillMount() {
        requireAuth(window.location.href)
    }
    render(){
        // val=window.selected;
        // console.log(val);
        const a=<Details data={window.selected}/>
        return(
            <div>
            <AlternateHeader/>
            {a}
            <Footer/>
            </div>
        )
    }
}