// import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-component/App.jsx';
import axios from 'axios';
import React, { Component } from 'react'
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// import registerServiceWorker from './registerServiceWorker';
import { runWithAdal } from 'react-adal';
import { authContext } from './adalConfig';
import allReducers from'./state/reducer';
// import './server.js'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../node_modules/bootstrap/scss/bootstrap.scss';
const store = createStore(allReducers);
// var UserDetails = JSON.parse(localStorage.getItem('limsuser'));
// console.log(UserDetails)
// let mid=UserDetails.userName.split("@");
// let res=mid[0].split("M")
// // alert(res[1])
// window.user=res[1];
// alert(window.user);


// window.display=[];

// function getData(){
//         axios
//             .get('https://api.myjson.com/bins/1a9rkj')
//             .then(res => {
//                 window.display=res.data.booksArray});
            
// }


// getData();
const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}
class Root extends Component  {
  render () {
    return (
      <AlertProvider template={AlertTemplate} {...options}>
      <Provider store={store}>
        <App />
        </Provider>
      </AlertProvider>
    )
  }
}
runWithAdal(authContext, () => {
ReactDOM.render(
    
    <Root />, document.getElementById('root')
    );
});
// registerServiceWorker();