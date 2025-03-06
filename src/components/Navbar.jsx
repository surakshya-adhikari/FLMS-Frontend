import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold">⚽ FutsalTourney</Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-green-400">Home</Link>
          <Link to="/about" className="hover:text-green-400">About Us</Link>
          <Link to="/contact" className="hover:text-green-400">Contact</Link>
          <Link to="/register" className="hover:text-green-400">Register</Link>
          <Link to="/login" className="hover:text-green-400">Login</Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? 'X' : '≡'}
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isOpen && (
        <div className="bg-gray-800 py-4 md:hidden">
          <Link to="/" className="block py-2 px-4">Home</Link>
          <Link to="/about" className="block py-2 px-4">About Us</Link>
          <Link to="/contact" className="block py-2 px-4">Contact</Link>
          <Link to="/register" className="block py-2 px-4">Register</Link>
          <Link to="/login" className="block py-2 px-4">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
