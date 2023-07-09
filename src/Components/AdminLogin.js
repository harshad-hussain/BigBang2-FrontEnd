import React from 'react';
import './AdminLogin.css';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRoutes } from 'react-router-dom';
import { Toaster, toast } from 'react-hot-toast';

<div><Toaster/></div>
const AdminLogin = () => {
 
  const api_url = "https://localhost:7033/api/Login/Admin";

  const [adminName, setEmailOrPhone] = useState('');
  const [adminPassword, setPassword] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Create a payload object with the user input
    const payload = {
        adminName,
        adminPassword
    };
 

    console.log(payload);

    axios
      .post(api_url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((response) => {
        console.log('New item added:', response.data);
        localStorage.setItem('token', response.data);
        toast.success('Successfully Logged in!')
        navigate('/D');
        // Perform any necessary actions after successful POST request
      })
      .catch((error) => {
        console.error('Error adding new item:', error);
        // Perform any necessary actions for error handling

      });
      
    };

  const routes = useRoutes([
    {
      path: '/',
      element: (
        <div>
          <Toaster
  position="top-center"
  reverseOrder={false}
/>
          <img src="https://i.pinimg.com/564x/67/dd/22/67dd227c069c17b83d8dbaa991d9a35e.jpg" alt="Background" className='image' style={{ marginTop: '1%', marginLeft: '10%', width: '50%' }} />
          <div className="container">
            <div className="form login">
              <header>Admin Login</header>
              <form>
                <input
                  type="text"
                  value={adminName}
                  onChange={(e) => setEmailOrPhone(e.target.value)}
                  required
                  placeholder="Enter your Name"
                />
                <input
                  type="password"
                  value={adminPassword}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="Enter your password"
                />
                <a href="#">Forgot password?</a>
                <input
                  type="button"
                  className="button"
                  onClick={handleFormSubmit}
                  value="Login"
                />
              </form>
              <div className="signup">
                <span className="signup">Don't have an account? <label htmlFor="check">Signup</label></span>
              </div>
            </div>
            <div className="form registration">
              {/* Add your registration form here */}
            </div>
          </div>
        </div>
      )
    }
  ]);

  return routes;
};

export default AdminLogin;
