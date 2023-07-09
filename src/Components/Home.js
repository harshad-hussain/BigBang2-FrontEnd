import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


const ChooseLogin = ({ adminImageUrl, doctorImageUrl, patientImageUrl }) => {
  return (
    <div className="choose-login-container">
      <div className="dashboard-container">
        
      </div>
      <div className="choose-login-content">
        <h2>Login as:</h2>
        <div className="card-container">
          <div className="card">
          <img src={'https://i.pinimg.com/564x/f9/17/f1/f917f16642667b8d7115fe96d489355c.jpg'} alt="Admin" />
            <h3>Admin</h3>
            <Link to="/Admin">Login</Link>
          </div>
          <div className="card">
           <img src={'https://i.pinimg.com/236x/e3/5d/19/e35d191a414645f5ef13de6026ba3f80.jpg'} alt="Doctor" /> <h3>Doctor</h3>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
          <div className="card">
          <img src={'https://i.pinimg.com/236x/a5/cf/5e/a5cf5e49a8fbe09bdef03968b1911a06.jpg'} alt="Patient" />
            <h3>Patient</h3>
            <Link to="/patientlog">Login</Link>
            <Link to="/Patientreg">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;