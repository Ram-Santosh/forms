import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import Form from './Activity-1';
import reportWebVitals from './reportWebVitals';
// import UnControlledForm from './Activity-2';
// import App from './Activity-3';
import App from './Activity-4';

//Activity 1
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <Form />
//   </React.StrictMode>
// );

//Activity 2
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <UnControlledForm />
//   </React.StrictMode>
// );

//Activity 3
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

//Activity 4
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
