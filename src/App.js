import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/DoctorRegister';

import DoctorLogin from './Components/DoctorLogin';

import PatientRegister from './Components/PatientRegister';
import Dashboard from './Components/Dashboard';
import Navbar from './Components/Navbar';
// import Otp from './Components/Otp';
import Doctorcard from './Components/Doctorcard';
import Doctortable from './Components/Doctortable';
import ActiveDoctor from './Components/ActiveDoctor';
import DeactiveDoctor from './Components/DeactiveDoctor';
import PatientCard from './Components/patientcard';
import Billing from './Components/Billing';
import AdminLogin from './Components/AdminLogin';
import PatientLogin from './Components/PatientLogin';
import AdminRegister from './Components/AdminRegister';
import CreateDoctor from './Components/Createdoctor';
import CreatePatient from './Components/Createpatient';
import AboutPage from './Components/Aboutpage';
import ChooseLogin from './Components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/D" element={<Dashboard />} />
        <Route path="/register" element={<Login/>} />
        <Route path="/login" element={<DoctorLogin />} />
         <Route path="/Adminreg" element={<AdminRegister />}/>
         <Route path="/" element={<AboutPage />}/>
         <Route path="/chooselogin" element={<ChooseLogin/>}/>
        {/* <Route path="/OTP" element={<Otp />} /> */}
        <Route path="/Doctor" element={<Doctorcard />} />
        <Route path="/Patientreg" element={<PatientRegister/>}/>
        <Route path="/table" element={<Doctortable />} />
        <Route path="/active" element={<ActiveDoctor />} />
        <Route path="/deactive" element={<DeactiveDoctor />} />
        <Route path="/patient" element={<PatientCard />} />
        <Route path="/billing" element={<Billing />} />
        <Route path="/Admin" element ={<AdminLogin/>}/>
        <Route path="/patientlog" element={<PatientLogin/>}/>
        <Route path="/createdoctor" element={<CreateDoctor/>}/>
        <Route path="/createPatient" element={<CreatePatient/>}/>
      </Routes>
    </Router>
  );
}

export default App;
