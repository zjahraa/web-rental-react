import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import DetailMobil from './components/DetailMobil';
import Pemesanan from './components/Pemesanan';
import Kontak from './components/Kontak';
import Footer from './components/Footer';
import Login from './components/Login';


function App() {
  return (
    <Router>
      <div className="App">
        {/* if (user berhasil login) then */}
        <Header />
        {/* end if */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/mobil/:id" element={<DetailMobil />} />
          <Route path="/pemesanan" element={<Pemesanan />} />
          <Route path="/kontak" element={<Kontak />} />
        </Routes>
        {/* if (user berhasil login) then */}
        <Footer />
        {/* end if */}
      </div>
    </Router>
  );
}

export default App;
