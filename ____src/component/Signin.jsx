import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import '../styling/Login.css'

const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn(email, password);
      navigate('/home')
    } catch (e) {
      setError(e.message)
      console.log(error, e.message)
    }
  };

  return (
    <div>
      <div>
        <h1 >Sign in to your account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div >
          <label>Email Address</label>
          <input onChange={(e) => setEmail(e.target.value)} type='email' />
        </div>
        <div >
          <label >Password</label>
          <input onChange={(e) => setPassword(e.target.value)}  type='password' />
        </div>
        <button>
          Sign In
        </button>
        <p >
          Belum punya akun ?{' '}
          <Link to='/signup' >
            Sign up.
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Signin;