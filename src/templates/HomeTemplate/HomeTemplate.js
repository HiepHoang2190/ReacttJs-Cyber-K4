import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Home/Header/Header';
import About from '../../pages/About/About';
import BaiTapToDoListSaga from '../../pages/BaiTapToDoListSaga/BaiTapToDoListSaga';
import Contact from '../../pages/Contact/Contact';
import DemoHOCModal from '../../pages/DemoHOCModal/DemoHOCModal';
import Home from '../../pages/Home/Home';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';
import Todolist from '../../pages/Todolist/Todolist';
import ToDoListRedux from '../../pages/Todolist/ToDoListRedux';
import TodolistRFC from '../../pages/Todolist/TodolistRFC';


export const HomeTemplate = (props) => {

  const { homeRoute, ...restParam } = props;
  let body
  body = (<>
    {homeRoute === 'home' && <Home />}
    {homeRoute === 'contact' && <Contact />}
    {homeRoute === 'about' && <About />}
    {homeRoute === 'todolistrcc' && <Todolist />}
    {homeRoute === 'todolistrfc' && <TodolistRFC />}
    {homeRoute === 'todolistredux' && <ToDoListRedux />}
    {homeRoute === 'todolistreduxsaga' && <BaiTapToDoListSaga />}
    {homeRoute === 'demohocmodal' && <DemoHOCModal />}
    {homeRoute === 'pagenotfound' && <PageNotFound />}
  </>
  )

  return (
    <>
      <Header />
      {body}
    </>

  )

}