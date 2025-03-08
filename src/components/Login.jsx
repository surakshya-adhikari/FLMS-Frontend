import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate inputs
    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    // Prepare the login data
    const loginData = {
      email,
      password,
    };

    try {
      // Send login request to the backend
      const response = await fetch("https://238ptrkf-7119.inc1.devtunnels.ms/api/userApi/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        credentials: "include",
        body: JSON.stringify(loginData),
      });

      const result = await response.json();

      if (result.status === 4) {
        // Store token and user data in sessionStorage
        sessionStorage.setItem("token", result.data.accessToken);
        sessionStorage.setItem("userName", result.data.userName);
        sessionStorage.setItem("role", result.data.role);

        // Redirect to home page or another desired page
        navigate("/");
      } else {
        // Handle login error
        setError(result.message || "Login failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during login:", error);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center p-4">
      {/* Main Content */}
      <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md w-full text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">e-Football Tournament</h1>
        <p className="text-gray-600 mb-8 text-3xl font-bold">Login to Your Account</p>

        {/* Error Message */}
        {error && <p className="text-red-500 mb-4">{error}</p>}

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 mb-4 border rounded-md"
            required
          />
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </form>
      </div>

      
    </div>
  );
};

export default Login;