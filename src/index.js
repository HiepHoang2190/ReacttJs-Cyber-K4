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
import DemoHOCModal from './pages/DemoHOCModal/DemoHOCModal'
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs'

//setup redux
import store from './redux/configStore'
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path='/home' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/about' element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path='/todolistrcc' element={<Todolist />} />
          <Route path='/todolistrfc' element={<TodolistRFC />} />
          <Route path='/todolistredux' element={<ToDoListRedux />} />
          <Route path='/todolistreduxsaga' element={<ToDoListReduxSaga />} />
          <Route path='/demohocmodal' element={<DemoHOCModal />} />
        </Route>
        <Route path='/login' element={<LoginCyberBugs />} />
      </Routes>
    </Router>


  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
