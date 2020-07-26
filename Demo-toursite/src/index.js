import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import Login from './login';
import Register from './register';
import Admin from './admin';
 import Bottombar from './bottembar'
import Home from './home';
import Footerbar from './footerbar';
import ReactUploadImage from './new';
import Admincard from './admincard';
import Carddemo from './carddemo';
import Placecard from './placecard';

// import Message from './message'
//  import Messagedemo from './messegedemo'
// import Fileupload from './fileuplod';

ReactDOM.render(
  <React.StrictMode>
    <ReactUploadImage/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
