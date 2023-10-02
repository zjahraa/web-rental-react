import React from 'react';
import './Kontak.css';

function Kontak() {
  return (
    <div className="kontak">
      <h1>Hubungi Kami</h1>
      <p>Jika Anda memiliki pertanyaan atau memerlukan bantuan, silakan hubungi kami melalui informasi kontak berikut:</p>
      <div className="kontak-info">
        <p><strong>Alamat:</strong> Jl. Contoh No. 123, Kota Contoh</p>
        <p><strong>Email:</strong> info@contohrentalmobil.com</p>
        <p><strong>Telepon:</strong> (123) 456-7890</p>
      </div>
      <div className="kontak-form">
        <h2>Kirim Pesan</h2>
        <form>
          <div className="form-group">
            <label>Nama:</label>
            <input type="text" required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" required />
          </div>
          <div className="form-group">
            <label>Pesan:</label>
            <textarea rows="4" required></textarea>
          </div>
          <button type="submit">Kirim</button>
        </form>
      </div>
    </div>
  );
}

export default Kontak;
