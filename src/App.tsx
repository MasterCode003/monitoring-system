import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import StaffLoginPage from './components/StaffLoginPage';
import CreateAccount from './components/CreateAccount';
import Dashboard from './components/Dashboard';
import StaffDashboard from './components/StaffDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/create-account" element={<CreateAccount />} />
        
        {/* Director routes */}
        <Route path="/director">
          <Route path="login" element={<LoginPage />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        
        {/* Staff routes */}
        <Route path="/staff">
          <Route path="login" element={<StaffLoginPage />} />
          <Route path="dashboard" element={<StaffDashboard />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;