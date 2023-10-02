import React from 'react';
import './Footer.css'; 

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* <div className="footer-logo">
          <img src="/path/to/logo.png" alt="Logo Rental Mobil" />
        </div> */}
        <div className="footer-links">
          <ul>
            <li><a href="/">Beranda</a></li>
            <li><a href="/pemesanan">Pemesanan</a></li>
            <li><a href="/kontak">Kontak</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>Alamat: Jl. Contoh No. 123, Kota Contoh</p>
          <p>Email: info@contohrentalmobil.com</p>
          <p>Telepon: (123) 456-7890</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Contoh Rental Mobil. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;
