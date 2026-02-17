import { useState } from "react";

import { Routes, Route } from 'react-router-dom';

import GetStarted from './pages/GetStarted';
import CreateAccount from './pages/CreateAccount';
import FieldSetup from "./pages/FieldSetup";
import FieldStatus from "./pages/FieldStatus";

function App() {
  return (
    
      <Routes>
        {/* This is your first/landing page */}
        <Route path="/" element={<GetStarted />} />
        
        {/* This is your registration page */}
        <Route path="/register" element={<CreateAccount />} />
        {/* Field Configuration */}
        <Route path="/field-setup" element={<FieldSetup />} />
        {/* Dashboard / Live Status */}
        <Route path="/field-status" element={<FieldStatus />} />
      </Routes>
    
  );

}

export default App;