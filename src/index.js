import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter } from 'react-router-dom';

//เพิ่ม
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import {browserHistory} from 'react-router'
// import ReactDom, {render} from 'react-dom';
// render(
//   <BrowserRouter>
//   <App/>
//   </BrowserRouter>,
//   document.querySelector('#root')
// )


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// const AppWithRouter = () => (
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// ReactDOM.render(<AppWithRouter />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
