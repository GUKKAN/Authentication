import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login'; // Create this component for the login page
import Home from './components/Home';
import "./App.css";
import Database from './components/database';
function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/db" element={<Database />} />
        <Route path="/home/:name" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
