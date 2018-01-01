import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-component/App.jsx';
import registerServiceWorker from './registerServiceWorker';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import '../node_modules/bootstrap/scss/bootstrap.scss';





ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
