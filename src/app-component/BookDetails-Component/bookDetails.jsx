import React, {Component} from 'react';
import Details from './details.jsx';
import Footer from '../footer-component/footer';
import Header from '../header-component/header';
let val;
export class BookDetails extends Component
{
    constructor()
    {
        super();
    }
    render()
    {
        val=window.selected;
        const a= <Details data={val}/>
        return
        (
            <div>
            <Header/>
            {a}
            <Footer/>
            </div>
        )
    }
}