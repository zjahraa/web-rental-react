import React from 'react';
// import '/Footer.css'; 
import '../styling/Footer.css'
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-info">
          <p>Alamat: Jl. Demak No. 123</p>
          <p>Email: info@demakrental.com</p>
          <p>Telepon: 0987654332</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Rental Mobil. Hak Cipta Dilindungi.
      </div>
    </footer>
  );
}

export default Footer;
