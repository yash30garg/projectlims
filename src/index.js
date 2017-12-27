import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-component/App.jsx';
import registerServiceWorker from './registerServiceWorker';


import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';




ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
