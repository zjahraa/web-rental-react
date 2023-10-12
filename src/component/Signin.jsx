import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../styling/Login.css';

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await signIn(email, password);
      navigate('/home');
    } catch (e) {
      setError(e.message);
      console.log(error, e.message);
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-header">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit} className="signin-form">
        <div className="form-group">
          <label>Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className="form-control"
          />
        </div>
        <button className="btn-signin">Sign In</button>
        <p className="signup-link">
          Belum punya akun?{' '}
          <Link to="/signup" className="signup">
            Sign up.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;
