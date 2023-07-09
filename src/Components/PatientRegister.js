import React, { useState } from 'react';
import axios from 'axios';
import './PatientRegister.css';
import { useNavigate } from 'react-router-dom';

const PatientRegister = () => {
  const [formData, setFormData] = useState({
    PatientId: null,
    PatientName: '',
    PatientAge: null,
    PatientGender: '',
    PatientDescription: '',
    PatientEmail: '',
    PatientPass: '',
    PatientImg: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData((prevState) => ({
      ...prevState,
      PatientImg: file
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('PatientName', formData.PatientName);
    payload.append('PatientAge', formData.PatientAge);
    payload.append('PatientGender', formData.PatientGender);
    payload.append('PatientDescription', formData.PatientDescription);
    payload.append('PatientEmail', formData.PatientEmail);
    payload.append('PatientPass', formData.PatientPass);
    payload.append('PatientImg', formData.PatientImg);

    try {
      const response = await axios.post('https://localhost:7033/api/Patient', payload, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log('Response:', response.data);
      // Handle success or show a success message to the user
      navigate('/patientlog');
    } catch (error) {
      console.error('Error:', error);
      // Handle error or show an error message to the user
    }
  };

  return (
    <div className="patient-register-card">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientName">Patient Name:</label>
          <input type="text" id="patientName" name="PatientName" value={formData.PatientName} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientAge">Patient Age:</label>
          <input type="number" id="patientAge" name="PatientAge" value={formData.PatientAge} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientGender">Patient Gender:</label>
          <input type="text" id="patientGender" name="PatientGender" value={formData.PatientGender} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientDescription">Patient Description:</label>
          <textarea id="patientDescription" name="PatientDescription" value={formData.PatientDescription} onChange={handleChange}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="patientEmail">Patient Email:</label>
          <input type="email" id="patientEmail" name="PatientEmail" value={formData.PatientEmail} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientPassword">Patient Password:</label>
          <input type="password" id="patientPassword" name="PatientPass" value={formData.PatientPass} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label htmlFor="patientImage">Patient Image:</label>
          <input type="file" id="patientImage" name="PatientImg" onChange={handleFileChange} />
        </div>
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default PatientRegister;
