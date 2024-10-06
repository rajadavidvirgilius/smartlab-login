import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import "./SignStyles.css";
import IlustrasiImage from "./images/ilustrasi2.png"; // Path ilustrasi Anda

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isProduksi, setIsProduksi] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan login handling di sini
  };

  return (
    <div className="login-container">
      {/* Bagian Ilustrasi */}
      <div className="left-section">
        <img src={IlustrasiImage} alt="Ilustrasi" />
      </div>

      {/* Bagian Form Login */}
      <div className="right-section">
        <div className="welcome-text">
          <ReactTyped
            strings={["Selamat datang di SmartLab!"]}
            typeSpeed={60}
            loop={true}
          />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <button type="submit" className="login-btn">
            Login sebagai QA
          </button>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="produksi"
              checked={isProduksi}
              onChange={() => setIsProduksi(!isProduksi)}
            />
            <label htmlFor="produksi">Login sebagai Produksi</label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
