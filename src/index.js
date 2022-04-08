import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import App from './tutorial-7/App';

//import 'bootstrap/dist/css/bootstrap.min.css';
//import "./tutorial-6/index.scss";
import "./tutorial-7/index.scss";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
