import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
function App() {
  return (
    <div>
      <h1>TimeLog</h1>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
