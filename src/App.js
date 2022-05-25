import React from 'react';
import './index.css';
import {
  BrowserRouter as Router, Routes, Route, NavLink as Link,
} from 'react-router-dom';
import icon from './icons/logo.png';
import Departments from './components/Departments';
import Details from './components/Details';

const App = () => (
  <Router>
    <div className="Bookstore-CMS">
      <div className="panel-bg">
        <nav className="navHeader">
          <h1>Metropolitan Museum of Art</h1>
          <ul className="menu">
            <li><Link className="nav-link" to="/">DEPARTMENTS</Link></li>
            <li><Link className="nav-link" to="/details">DETAILS</Link></li>
            <li><Link className="nav-link" to="/details/:id">DETAILS</Link></li>
          </ul>
          <img src={icon} alt="CMS logo" className="iconClass" />
        </nav>
        <Routes>
          <Route path="/" element={<Departments />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </div>
  </Router>
);

export default App;
