import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Navbar */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">FutsalTournament</div>
          <div className="flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600">About Us</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            <a href="/register" className="text-gray-700 hover:text-blue-600">Register</a>
            <a href="/login" className="text-gray-700 hover:text-blue-600">Login</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center text-center p-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            Welcome to Futsal Tournament!
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join the most exciting futsal tournament in town. Showcase your skills and be part of the action!
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default Home;