import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app-component/App.jsx';
import registerServiceWorker from './registerServiceWorker';
// import '../node_modules/bootstrap/dist/css/bootstrap.min';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';

import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../node_modules/materialize-css/dist/js/materialize.min.js';


// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
