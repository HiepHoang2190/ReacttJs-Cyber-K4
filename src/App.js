import React from 'react';
import {BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import TodolistRFC from './pages/Todolist/TodolistRFC';
import Todolist from './pages/Todolist/Todolist';
import ToDoListRedux from './pages/Todolist/ToDoListRedux';
import ToDoListReduxSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga';
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
function App() {
  return (
    <div>
    
   
      <Header />
      <LoadingComponent/>
   <Outlet/>

    </div>


  );
}

export default App;
