import React from 'react';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MetaTags from 'react-meta-tags';
import icon from './icons/logo.png';
import Departments from './components/Departments';
import Pieces from './components/Pieces';

const App = () => (
  <BrowserRouter>
    <MetaTags>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </MetaTags>
    <div className="Initial" data-testid="app-1">
      <div className="panel-bg">
        <h1 className="navTitle">
          <img src={icon} alt="MET logo" className="iconClass" />
          Metropolitan Museum of Art
        </h1>
      </div>
      <Routes>
        <Route path="/" element={<Departments />} />
        <Route path="/pieces/:id" element={<Pieces />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
