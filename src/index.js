import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-component/App.jsx';
import axios from 'axios';
import registerServiceWorker from './registerServiceWorker';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
// import './server.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../node_modules/bootstrap/scss/bootstrap.scss';
window.display=[];
function getData(){
        axios
            .get('https://api.myjson.com/bins/1a9rkj')
            .then(res => {
                window.display=res.data.booksArray});
            
}


getData();

runWithAdal(authContext, () => {
ReactDOM.render(<App />, document.getElementById('root'));
});
registerServiceWorker();