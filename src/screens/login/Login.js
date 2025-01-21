import React, { useState, useEffect } from "react";
import "./Login.css";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { loginUser } from "../../services/apiEndpoints";
import { CircularProgress } from "@mui/material";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false); // Remember me state
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  // Load email and password from localStorage if "Remember me" was checked
  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberedEmail");
    const savedPassword = localStorage.getItem("rememberedPassword");
    if (savedEmail && savedPassword) {
      setEmail(savedEmail);
      setPassword(savedPassword);
      setRememberMe(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors
    setLoading(true); // Set loading to true before API call

    try {
      const data = await loginUser(email, password);
      console.log("Login successful:", data);

      // Save token to localStorage or context
      localStorage.setItem("token", data.token);
      localStorage.setItem("user",JSON.stringify(data))

      // Save email and password if "Remember me" is checked
      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedPassword", password);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedPassword");
      }

      // Redirect to the home page or dashboard
      window.location.href = "/home";
    } catch (err) {
      console.error(err);
      setError("Login failed. Please check your email and password.");
    } finally {
      setLoading(false); // Set loading to false after API call completes
    }
  };

  const handleRememberMe = () => {
    setRememberMe(!rememberMe);
  };

  return (
    <div className="login-container">
      <div className="login-left">
        <div className="illustration">
          <img
            src="assets/loginframe.png"
            alt="Doctors Illustration"
            className="illustration-image"
          />
        </div>
      </div>
      <div className="login-right">
        <div className="login-form">
          <img src="assets/logo.png" alt="Logo" className="logo" />
          <h2>Sign In to your Account</h2>
          <p>Welcome back! Please enter your details</p>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword(!showPassword);
                  }}
                  className="show-password"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </button>
              </div>
            </div>
            <div className="form-group remember-me">
              <label className="custom-checkbox">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={handleRememberMe}
                />
                <span className="checkmark"></span>
                Remember me
              </label>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <button
              type="submit"
              className="login-button"
              disabled={loading} // Disable button while loading
            >
              {loading ? <CircularProgress size={20} color="inherit" /> : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
