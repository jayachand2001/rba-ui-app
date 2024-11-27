import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserManagement from './components/UserManagement.js';
import RoleManagement from './components/RoleManagement.js';
import PermissionManagement from './components/PermissionManagement.js';
import Navbar from './components/Navbar.js';
import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/users" element={<UserManagement/>} />
          <Route path="/roles" element={<RoleManagement/>} />
          <Route path="/permissions" element={<PermissionManagement/>} />
          <Route path="/" element={<Dashboard/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
