import React , { Component } from 'react'
import Header from '../header-component/header'
import Footer from '../footer-component/footer'
import User from './user-component/user'
import BootHeader from '../header-component/bootheader'

export default class Main extends Component {
    render() {
        return(
            <div>
            <Header/>
            <div className="row">
                <div className="col-md-3"><BootHeader/></div>
                <div className="col-md-9">
                <User/>
                </div>
            </div>
            <Footer/>
            </div>
        )
    }
}