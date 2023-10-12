import React, { useState } from 'react';
import '../styling/Home.css';

function Home() {
  
  const [mobilTersedia] = useState([
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

  return (
    <div className="home">
      <h1>Selamat datang di Rental Mobil</h1>
      <p>Tersedia berbagai macam mobil berkualitas untuk Anda</p>


      <div className="daftar-mobil">
        {mobilTersedia.map((mobil) => (
          <div key={mobil.id}>
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
