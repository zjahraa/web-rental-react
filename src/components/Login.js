import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLogin = () => {
    // Anda dapat menambahkan logika autentikasi di sini.
    console.log('Username:', formData.username);
    console.log('Password:', formData.password);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <div className="form-group">
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
        />
      </div>
      <div className="form-group">
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      {/* <a href={`/login/${Login}`}>Login</a> */}
      <a href="/home">Login</a>
    </div>
  );
}

export default Login;
