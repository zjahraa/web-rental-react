import React, { useState } from 'react';
import { UserAuth } from '../context/AuthContext';
import '../styling/Register.css'; // Import file CSS untuk SignUp

function SignUp() {
  const { createUser } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, displayName, photoURL, phoneNumber);
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <div className='register-form'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className='form-group'>
          <label>Nama</label>
          <input type='text' value={displayName} onChange={(e) => setDisplayName(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>No Telp.</label>
          <input type='text' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Alamat Email</label>
          <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>Kata Sandi</label>
          <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className='form-group'>
          <label>URL Foto Profil</label>
          <input type='text' value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
        </div>
        <button type='submit'>Sign Up</button>
      </form>
    </div>
  );
}

export default SignUp;
