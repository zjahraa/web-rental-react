import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
// import { getStorage, ref, uploadBytes } from "firebase/storage";
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  
  const createUser = async (email, password, displayName, photoURL, phoneNumber) => {
    try {
      // Buat pengguna dengan email dan kata sandi
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, { displayName: displayName, photoURL: photoURL, phoneNumber: phoneNumber});
      navigate('/home')
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

   const signIn = (email, password) =>  {
    return signInWithEmailAndPassword(auth, email, password)
   }

  const logout = () => {
      return signOut(auth)
  }

  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    // <UserContext.Provider value={{ createUser, user, logout, signIn }}>
    <UserContext.Provider value={{createUser, user, logout, signIn}}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};