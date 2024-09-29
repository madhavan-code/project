import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './project/navbar/home.js';
import Navigation from './project/navbar/nav.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Selected from './project/selected/Selected.js';
import Login from './project/register/login.js';
import Update from './project/update/update.js';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navigation />
          <Routes>
        <Route path='/' element={<Home/>}/>
            <Route path='/Selected' element={<Selected/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Update/:id' element={<Update />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;