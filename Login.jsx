import React, { useState } from "react";

export default function LoginFormValidation() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = (e) => {
    e.preventDefault();

    let formErrors = {};
    let valid = true;

    // Required Field Validation
    if (!username.trim()) {
      formErrors.username = "Username is required.";
      valid = false;
    }

    // Regular Expression Validation — Email Pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      formErrors.email = "Enter a valid email.";
      valid = false;
    }

    // Range Validation — Password length 6–12
    if (password.length < 6 || password.length > 12) {
      formErrors.password = "Password must be 6–12 characters.";
      valid = false;
    }

    // Compare Validation
    if (password !== confirmPassword) {
      formErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(formErrors);

    if (valid) {
      alert("Login Successful!");
    }
  };

  return (
    <>
      <style>{`
        body {
          background: #eef2ff;
          font-family: Arial;
        }
        .container {
          width: 350px;
          margin: 50px auto;
          background: white;
          padding: 25px;
          border-radius: 10px;
          box-shadow: 0px 0px 10px rgba(0,0,0,0.2);
        }
        input {
          width: 100%;
          padding: 10px;
          margin: 8px 0 5px;
          border-radius: 5px;
          border: 1px solid #aaa;
        }
        button {
          width: 100%;
          padding: 10px;
          margin-top: 15px;
          background: #4a4aff;
          color: white;
          border: none;
          border-radius: 5px;
          font-size: 16px;
        }
        button:hover {
          background: #2c2cff;
        }
        .error {
          color: red;
          font-size: 14px;
          margin-bottom: 10px;
        }
      `}</style>

      <div className="container">
        <h2 style={{ textAlign: "center", color: "#4a4aff" }}>Login Form</h2>

        <form onSubmit={validateForm}>
          {/* Username */}
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <div className="error">{errors.username}</div>}

          {/* Email */}
          <label>Email:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="example@mail.com"
          />
          {errors.email && <div className="error">{errors.email}</div>}

          {/* Password */}
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <div className="error">{errors.password}</div>}

          {/* Confirm Password */}
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {errors.confirmPassword && (
            <div className="error">{errors.confirmPassword}</div>
          )}

          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
}
