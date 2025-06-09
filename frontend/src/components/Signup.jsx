import React, { useState } from "react";
import axios from "axios";
// import "./css/style.css"; // Use your existing styles
const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      return setError("Passwords do not match");
    }

    try {
      // await axios.post("/api/auth/register", formData);
      await axios.post("http://localhost:5000/api/auth/register", formData);
      setSuccess("Account created! You can log in now.");
      setError("");
    } catch (err) {
      setError("Failed to register: " + (err.response?.data || err.message));
    }
  };

  return (
    <div className="wrapper">
      <div className="form-holder">
        <h2>Create New Account</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <img src="/img/user.png" alt="" />
            <input type="text" name="username" placeholder="Username" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <img src="/img/user.png" alt="" />
            <input type="text" name="firstname" placeholder="First Name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <img src="/img/user.png" alt="" />
            <input type="text" name="lastname" placeholder="Last Name" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <img src="/img/email.png" alt="" />
            <input type="email" name="email" placeholder="Email" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <img src="/img/lock.png" alt="" />
            <input type="password" name="password" placeholder="Password" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <img src="/img/lock.png" alt="" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" required onChange={handleChange} />
          </div>
          <div className="form-group">
            <button type="submit">Sign Up</button>
          </div>
          <div className="form-group">
            <a href="/login" className="right-link">Sign In</a>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {success && <p style={{ color: "green" }}>{success}</p>}
        </form>
      </div>
    </div>
  );
};

export default Signup;
