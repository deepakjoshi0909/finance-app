import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-6">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo">
          <Link to="/" className="text-2xl font-bold">Finance Manager</Link>
        </div>

        {/* Navigation Menu for larger screens */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/budgeting" className="hover:underline">Budgeting</Link>
          <Link to="/expense-tracking" className="hover:underline">Expense Tracking</Link>
          <Link to="/savings-goals" className="hover:underline">Savings Goals</Link>
          <Link to="/reports" className="hover:underline">Reports</Link>
        </nav>

        {/* Call to Action Button */}
        <div className="cta hidden md:block">
          <Link to="/sign-up" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-2xl focus:outline-none">
            {isOpen ? '✖' : '☰'} {/* Toggle icon based on menu state */}
          </button>
        </div>
      </div>

      {/* Dropdown Menu for small screens */}
      {isOpen && (
        <nav className="md:hidden bg-gray-700 p-4">
          <Link to="/" className="block py-2 hover:underline" onClick={toggleMenu}>Home</Link>
          <Link to="/dashboard" className="block py-2 hover:underline" onClick={toggleMenu}>Dashboard</Link>
          <Link to="/budgeting" className="block py-2 hover:underline" onClick={toggleMenu}>Budgeting</Link>
          <Link to="/expense-tracking" className="block py-2 hover:underline" onClick={toggleMenu}>Expense Tracking</Link>
          <Link to="/savings-goals" className="block py-2 hover:underline" onClick={toggleMenu}>Savings Goals</Link>
          <Link to="/reports" className="block py-2 hover:underline" onClick={toggleMenu}>Reports</Link>
          <Link to="/sign-up" className="block  mt-2 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded" onClick={toggleMenu}>
            Get Started
          </Link>
        </nav>
      )}
    </header>
  );
};

export default Header;