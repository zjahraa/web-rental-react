import React from 'react';
import { useParams } from 'react-router-dom';
import './DetailMobil.css'; 

function DetailMobil() {
  // Gunakan useParams untuk mendapatkan id mobil dari URL
  const { id } = useParams();

  // Dummy data contoh mobil (biasanya data ini akan diambil dari API atau database)
  const mobil = {
    id: 1,
    nama: 'Toyota Avanza',
    jenis: 'MPV',
    tahun: 2021,
    harga: 'Rp 200.000/hari',
    deskripsi: 'Mobil keluarga yang nyaman dan irit bahan bakar.',
    gambar: 'https://www.toyota.astra.co.id/sites/default/files/2021-11/1-avanza-purplish-silver.png',
  };
  

  // Cek apakah mobil ditemukan
  if (mobil.id !== Number(id)) {
    return <p>Mobil tidak ditemukan.</p>;
  }

  return (
    <div className="detail-mobil">
      <h1>Detail Mobil: {mobil.nama}</h1>
      <img src={mobil.gambar} alt={mobil.nama} />
      <p><strong>Jenis:</strong> {mobil.jenis}</p>
      <p><strong>Tahun:</strong> {mobil.tahun}</p>
      <p><strong>Harga:</strong> {mobil.harga}</p>
      <p><strong>Deskripsi:</strong> {mobil.deskripsi}</p>
    </div>
  );
}

export default DetailMobil;
