import React, { useState } from "react";

const Register = () => {
  // State for form data
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create an object with the form data
    const formData = {
      username,
      email,
      password,
      confirmPassword,
    };

    // Send form data to the backend
    sendDataToBackend(formData);
  };

  const sendDataToBackend = async (formData) => {
    try {
      const response = await fetch("https://238ptrkf-7119.inc1.devtunnels.ms/api/userApi/createAccount", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      console.log(result);
      
      if (response.ok) {
        console.log("Registration successful:", result);
      } else {
        console.log("Error during registration:", result);
      }
    } catch (error) {
      console.error("Error sending data to backend:", error);
    }
  };

  return (
    <div className="container mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900">Register for Futsal Tournament</h1>

      <form onSubmit={handleSubmit} className="mt-6 max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="User Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-2 mb-4 border rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
