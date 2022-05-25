import React from 'react';
import './index.css';
import {
  BrowserRouter, Routes, Route, NavLink as Link,
} from 'react-router-dom';
import icon from './icons/logo.png';
import Departments from './components/Departments';
import Pieces from './components/Pieces';

const App = () => (
  <BrowserRouter>
    <div className="Bookstore-CMS">
      <div className="panel-bg">
        <nav className="navHeader">
          <h1>Metropolitan Museum of Art</h1>
          <ul className="menu">
            <li><Link className="nav-link" to="/">DEPARTMENTS</Link></li>
            <li><Link className="nav-link" to="/pieces">PIECES</Link></li>
          </ul>
          <img src={icon} alt="CMS logo" className="iconClass" />
        </nav>
        <Routes>
          <Route path="/" element={<Departments />} />
          <Route path="/pieces/:id" element={<Pieces />} />
        </Routes>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
