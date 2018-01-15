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
var UserDetails = JSON.parse(localStorage.getItem('limsuser'))
let mid=UserDetails.userName.split("@");
let res=mid[0].split("M")
// alert(res[1])
window.user=res[1];
// alert(window.user);
function getData(){
    axios.get('https://api.myjson.com/bins/14x90j')
     .then(res=>{
         //output:res.data;
          window.users = res.data;
          if(window.users!==null){
                const b = window.users.filter((res) => res.user.mid === window.user)
                window.bbooks=b[0].borrowedbooks;
                console.log(window.bbooks.length)
          }
        });
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