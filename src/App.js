import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Home/Header/Header';
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Home from './pages/Home/Home'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
  
    </div>


  );
}

export default App;
