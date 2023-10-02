import React from 'react';
import './Header.css';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/pemesanan">Pemesanan</a></li>
          <li><a href="/kontak">Kontak</a></li>
          <li><a href="/logout">Logout</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
