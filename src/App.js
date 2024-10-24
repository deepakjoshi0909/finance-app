import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Budgeting from './components/Budgeting';
import ExpenseTracking from './components/ExpenseTracking';
import SavingsGoals from './components/SavingsGoals';
import Reports from './components/Reports';
import SignUp from './components/SignUp';  // Add SignUp page
import Login from './components/Login';    // Add Login page
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/budgeting" element={<Budgeting />} />
          <Route path="/expense-tracking" element={<ExpenseTracking />} />
          <Route path="/savings-goals" element={<SavingsGoals />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/sign-up" element={<SignUp />} /> {/* Route for SignUp */}
          <Route path="/login" element={<Login />} />     {/* Route for Login */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
