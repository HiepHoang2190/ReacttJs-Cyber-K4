import React from 'react';
import { BrowserRouter as Router, Outlet, Route, Routes } from 'react-router-dom';
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
import DemoHOCModal from './pages/DemoHOCModal/DemoHOCModal'
import LoginCyberBugs from './pages/CyberBugs/LoginCyberBugs/LoginCyberBugs'
import IndexCyberBugs from './redux/sagas/Cyberbugs/IndexCyberBugs'
import CreateProject from './pages/CyberBugs/CreateProject/CreateProject'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate';
import { CyberbugsTemplate } from './templates/HomeTemplate/CyberbugsTemplate';
function App() {
  return (
    <div>
      
      <LoadingComponent />
      {/* <Outlet/> */}
      <Routes >
        <Route path="/" element={<HomeTemplate homeRoute="home"/>} />
        <Route path='/home' element={<HomeTemplate homeRoute="home" />} />
        <Route path='/contact' element={<HomeTemplate homeRoute="contact" />} />
        <Route path='/about' element={<HomeTemplate homeRoute="about" />} />
        <Route path='/todolistrcc' element={<HomeTemplate homeRoute="todolistrcc" />} />
        <Route path='/todolistrfc' element={<HomeTemplate homeRoute="todolistrfc" />} />
        <Route path='/todolistredux' element={<HomeTemplate homeRoute="todolistredux" />} />
        <Route path='/todolistreduxsaga' element={<HomeTemplate homeRoute="todolistreduxsaga" />} />
        <Route path='/demohocmodal' element={<HomeTemplate homeRoute="demohocmodal" />} />
  
        <Route path='/login' element={<UserLoginTemplate userLoginRoute="login" />} />
        <Route path='/cyberbugs' element={<CyberbugsTemplate cyberRoute="cyberbugs" />} />
        <Route path='/createproject' element={<CyberbugsTemplate cyberRoute="createproject" />} />

        <Route path='*' element={<HomeTemplate homeRoute="pagenotfound" />} />
      </Routes>

    </div>


  );
}

export default App;
