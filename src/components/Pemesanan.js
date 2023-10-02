import React, { useState } from 'react';
import './Pemesanan.css';

function Pemesanan() {
  // State untuk menyimpan data pemesanan
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [mobil, setMobil] = useState('');
  const [tanggalPemesanan, setTanggalPemesanan] = useState('');
  const [jumlahHari, setJumlahHari] = useState('');

  // Handler saat pengguna mengirimkan formulir pemesanan
  const handleSubmit = (e) => {
    e.preventDefault();
    // Kirim data pemesanan ke server atau lakukan tindakan lain yang diperlukan
    console.log('Data Pemesanan:', { nama, email, mobil, tanggalPemesanan, jumlahHari });
  };

  return (
    <div className="pemesanan">
      <h1>Formulir Pemesanan</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nama:</label>
          <input
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Mobil yang Dipilih:</label>
          <select
            value={mobil}
            onChange={(e) => setMobil(e.target.value)}
            required
          >
            <option value="">Pilih Mobil</option>
            <option value="Toyota Avanza">Toyota Avanza</option>
            <option value="Honda Civic">Honda Civic</option>
            {/* Tambahkan opsi mobil lainnya di sini */}
          </select>
        </div>
        <div className="form-group">
          <label>Tanggal Pemesanan:</label>
          <input
            type="date"
            value={tanggalPemesanan}
            onChange={(e) => setTanggalPemesanan(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Jumlah Hari:</label>
          <input
            type="number"
            value={jumlahHari}
            onChange={(e) => setJumlahHari(e.target.value)}
            required
          />
        </div>
        <button type="submit">Kirim Pemesanan</button>
      </form>
    </div>
  );
}

export default Pemesanan;
