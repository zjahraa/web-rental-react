import React, { useState } from 'react';
import './Home.css';

function Home() {
  // Dummy data contoh daftar mobil yang tersedia
  const [mobilTersedia, setMobilTersedia] = useState([
    {
      id: 1,
      nama: 'Toyota Avanza',
      harga: 'Rp 200.000/hari',
      gambar: 'https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png',
    },
    {
      id: 2,
      nama: 'Honda Civic',
      harga: 'Rp 250.000/hari',
      gambar: 'https://i.pinimg.com/564x/cf/85/71/cf8571c1723378d13e22a3ff42c66a24.jpg',
    },
    // Tambahkan data mobil lainnya di sini
  ]);

  // State untuk menyimpan data mobil baru
  const [mobilBaru, setMobilBaru] = useState({
    id: null,
    nama: '',
    harga: '',
    gambar: '',
  });

  // Fungsi untuk menambahkan mobil baru
  const tambahMobil = () => {
    // Validasi data mobil baru
    if (mobilBaru.nama && mobilBaru.harga && mobilBaru.gambar) {
      // Menghasilkan ID unik untuk mobil baru
      const newId = Date.now();
      const mobilBaruWithId = { ...mobilBaru, id: newId };
      
      // Menambahkan mobil baru ke daftar mobil tersedia
      setMobilTersedia([...mobilTersedia, mobilBaruWithId]);

      // Mengosongkan data mobil baru
      setMobilBaru({
        id: null,
        nama: '',
        harga: '',
        gambar: '',
      });
    } else {
      alert('Harap lengkapi semua data mobil baru.');
    }
  };

  // Fungsi untuk menangani perubahan input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMobilBaru({ ...mobilBaru, [name]: value });
  };

  return (
    <div className="home">
      <h1>Selamat datang di Rental Mobil XYZ</h1>
      <p>Tersedia berbagai macam mobil berkualitas untuk Anda</p>

      {/* Tombol "Tambah Mobil" */}
      <button onClick={tambahMobil}>Tambah Mobil</button>

      {/* Form untuk mengunggah mobil baru */}
      <div className="form-mobil-baru">
        <input
          type="text"
          name="nama"
          value={mobilBaru.nama}
          placeholder="Nama Mobil"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="harga"
          value={mobilBaru.harga}
          placeholder="Harga per Hari"
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="gambar"
          value={mobilBaru.gambar}
          placeholder="URL Gambar Mobil"
          onChange={handleInputChange}
        />
      </div>

      <div className="daftar-mobil">
        {mobilTersedia.map((mobil) => (
          <div key={mobil.id} className="mobil-card">
            <img src={mobil.gambar} alt={mobil.nama} />
            <h2>{mobil.nama}</h2>
            <p>{mobil.harga}</p>
            <a href={`/mobil/${mobil.id}`}>Lihat Detail</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
