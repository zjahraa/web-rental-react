import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./component/Signin";
import Account from "./component/Account";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./component/ProtectedRoute";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Pemesanan from "./component/Pemesanan";
import Signup from "./component/Signup";
import DaftarMobil from "./component/DaftarMobil";
import TambahMobil from "./component/TambahMobil";
import DetailMobil from "./component/DetilMobil";
import DeleteMobil from "./component/DeleteMobil";


function App() {
  return (
    // className="text-center text-3xl font-bold"
    <div >
      <h1 >Rental Mobil</h1>
      <AuthContextProvider>
        <Header/>
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
          <Route path='/account' element={<ProtectedRoute><Account /></ProtectedRoute>}/>
          <Route path='/' element={<DaftarMobil />}/>
          <Route path='/home' element={<DaftarMobil />}/>
          <Route path='/pemesanan' element={<ProtectedRoute><Pemesanan /></ProtectedRoute>}/>
          <Route path='/tambahmobil' element={<ProtectedRoute><TambahMobil /></ProtectedRoute>}/>
          <Route path='/deletemobil/:id' element={<ProtectedRoute><DeleteMobil /></ProtectedRoute>}/>
          <Route path='/detilmobil/:id' element={<DetailMobil />}/>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/daftarmobil" element={<DaftarMobil />}></Route>
          
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
