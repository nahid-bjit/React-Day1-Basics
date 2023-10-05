import React, { useState } from "react";
import LoginForm from "../components/loginForm";
import Navbar from "../components/Navbar";

const UserLoginPage = () => {
  const [error, setError] = useState("");

  const handleLogin = (email, password) => {
    // Retrieve user credentials from local storage
    localStorage.setItem("login", true);
    // const storedPassword = localStorage.getItem("userPassword");

    // if (email === storedEmail && password === storedPassword) {
    //   // Authentication successful, you can redirect the user to /add or handle it as needed
    //   // For example, window.location.href = "/add";
    //   // Or use React Router's useHistory hook to programmatically navigate.
    // } else {
    //   setError("Invalid email or password. Please try again.");
    // }
  };

  return (
    <div>
      <Navbar />
      <LoginForm handleLogin={handleLogin} error={error} />
    </div>
  );
};

export default UserLoginPage;
