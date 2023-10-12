import React from 'react';
// import '/Footer.css'; 
import '../styling/Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <p>Alamat: Jl.Merdeka No. 123, Kota Demak</p>
          <p>Email: info@demakrental.com</p>
          <p>Telepon: 08976543121 </p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rental Mobil. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;
