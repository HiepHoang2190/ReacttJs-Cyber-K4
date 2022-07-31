import React from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'
import TodolistRFC from './pages/Todolist/TodolistRFC';
import Todolist from './pages/Todolist/Todolist';
import ToDoListRedux from './pages/Todolist/ToDoListRedux';
import ToDoListReduxSaga from './pages/BaiTapToDoListSaga/BaiTapToDoListSaga';
import LoadingComponent from './components/GlobalSetting/LoadingComponent/LoadingComponent'
import DemoHOCModal from './pages/DemoHOCModal/DemoHOCModal';
import Modal from './HOC/Modal/Modal';

function App() {
  return (
    <div>
    
      <Router>
      <Header />
      <Modal/>
      <LoadingComponent/>
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
        <Route path='/todolistrcc' element={<Todolist/>} />
        <Route path='/todolistrfc' element={<TodolistRFC/>} />
        <Route path='/todolistredux' element={<ToDoListRedux/>} />
        <Route path='/todolistreduxsaga' element={<ToDoListReduxSaga/>} />
        <Route path='/demohocmodal' element={<DemoHOCModal/>} />
      </Routes>
  </Router>
    </div>


  );
}

export default App;
