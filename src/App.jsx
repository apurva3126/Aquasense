 HEAD
import FieldSetup from "./FieldSetup";

function App() {
  return <FieldSetup />;

import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GetStarted from './pages/GetStarted';
import CreateAccount from './pages/CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        {/* This is your first/landing page */}
        <Route path="/" element={<GetStarted />} />
        
        {/* This is your registration page */}
        <Route path="/register" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
 d38ec32b754f8d3a5a0ecd8e59f6332d3a2e04b0
}

export default App;
}