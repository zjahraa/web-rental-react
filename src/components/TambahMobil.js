import React, { useState } from 'react';

function TambahMobil({ tambahMobil }) {
  const [mobilBaru, setMobilBaru] = useState({
    nama: '',
    harga: '',
    gambar: '',
  });

  const handleTambahMobil = () => {
    if (mobilBaru.nama && mobilBaru.harga && mobilBaru.gambar) {
      tambahMobil(mobilBaru);
      setMobilBaru({ nama: '', harga: '', gambar: '' });
    } else {
      alert('Harap lengkapi semua data mobil baru.');
    }
  };

  return (
    <div>
      <h2>Tambah Mobil Baru</h2>
      <input
        type="text"
        placeholder="Nama Mobil"
        value={mobilBaru.nama}
        onChange={(e) => setMobilBaru({ ...mobilBaru, nama: e.target.value })}
      />
      <input
        type="text"
        placeholder="Harga per Hari"
        value={mobilBaru.harga}
        onChange={(e) => setMobilBaru({ ...mobilBaru, harga: e.target.value })}
      />
      <input
        type="text"
        placeholder="URL Gambar Mobil"
        value={mobilBaru.gambar}
        onChange={(e) => setMobilBaru({ ...mobilBaru, gambar: e.target.value })}
      />
      <button onClick={handleTambahMobil}>Tambah</button>
    </div>
  );
}

export default TambahMobil;
