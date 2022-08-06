import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import TodolistRFC from './pages/Todolist/TodolistRFC';
import Todolist from './pages/Todolist/Todolist';
import ToDoListRedux from './pages/Todolist/ToDoListRedux';
import ToDoListReduxSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga';

//setup redux
import store from './redux/configStore'
import { Provider } from 'react-redux';

import { history } from './util/history'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>

    <Router history={history} >
      <App />
    </Router>


  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
