// components/Login.jsx
import React, { useState } from "react";
import axios from "axios";
import "../css/login/style.css";
import { useNavigate } from "react-router-dom";     // ← add this

const Login = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();    

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      // Save token or session data here
      // console.log("Login success", res.data);
       navigate("/dashboard");
      // redirect to dashboard/inventory
    } catch (err) {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form-holder">
        <img src="/img/user.png" className="logo" alt="User" />
        <h2>Login</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <img src="/img/user.png" alt="" />
            <input
              type="text"
              name="username"
              className="input-field"
              placeholder="Username"
              required
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <img src="/img/lock.png" alt="" />
            <input
              type="password"
              name="password"
              className="input-field"
              placeholder="Enter Password"
              required
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <button type="submit">Sign In</button>
          </div>
          <div className="form-group">
            <a href="/signup" className="right-link">Sign Up</a>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login;
