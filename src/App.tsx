import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { Header } from './page/Header';
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
