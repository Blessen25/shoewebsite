import React from 'react';
import './App.css';
import Main_component from './screens/main_screen.tsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/home.tsx';
import Header_comp from './components/header/header.tsx';
import About from './components/about/about.tsx';

const App = () => {
  return (
    <Router>
      <Header_comp />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
      </Routes>
    </Router>
  )
}

export default App;
