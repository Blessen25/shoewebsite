import React from 'react';
import './App.css';
import Main_component from './screens/main_screen.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/home.tsx';
import Header_comp from './components/header/header.tsx';
import About from './components/about/about.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <Header_comp transparent={true}/>
          <Home />
          </>} />
        <Route path='/About' element={
          <>
          <Header_comp transparent={false}/>
          <About />
          </>} />
      </Routes>
    </Router>
  )
}

export default App;
