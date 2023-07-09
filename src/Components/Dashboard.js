import React, { useState } from 'react';
import './Dashboard.css';
import Navbar from './Navbar';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Doctorcard from './Doctorcard';
import Doctortable from './Doctortable';
import ActiveDoctor from './ActiveDoctor';
import DeactiveDoctor from './DeactiveDoctor';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Patienttable from './patienttable';

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Navbar />
      <ActiveDoctor />
      <DeactiveDoctor />
      {/* <Doctorcard/> */}
      <Doctortable />
      <div className={`dashboard-navbar ${isOpen ? 'open' : ''}`}>
        <ul className="dashboard-navbar-nav">
          <li className="dashboard-nav-item">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <a href="#home" className="dashboard-nav-link">
              <i className="fas fa-home"></i> Home
            </a>
          </li>
          <br></br>
          <li className="dashboard-nav-item">
            <a href="#about" className="dashboard-nav-link">
              <i className="fas fa-info-circle"></i> About
            </a>
          </li>
          <br></br>
          <li className="dashboard-nav-item">
            <Link to="/Doctor" className="dashboard-nav-link">
              <i className="fas fa-envelope"></i> Doctor
            </Link>
          </li>
          <br></br>
        
          <br></br>
        </ul>
      </div>
    </div>
  );
}
 