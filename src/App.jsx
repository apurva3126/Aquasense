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
}

export default App;



