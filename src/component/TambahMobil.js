import React, { useState } from 'react';
import '../styling/Home.css';
// import DaftarMobil from './DaftarMobil';
import { collection, addDoc } from "firebase/firestore"; 
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

function TambahMobil({ tambahMobil }) {

  const [Nama_mobil, setNama_mobil] = useState('');
  const [No_mobil, setNo_mobil] = useState('');
  const [Jumlah_penumpang, setJumlah_penumpang] = useState('')
  const [Bahan_bakar, setBahan_bakar] = useState('')
  const [Harga_sewa, setHarga_sewa] = useState('')
  const [Gambar_mobil, setGambar_mobil] = useState('')
  // const { createUser } = UserAuth();
  const navigate = useNavigate()

  const handleTambahMobil = async (e) => {
    e.preventDefault();

    const mobilBaru = {
      Nama_mobil,
      No_mobil,
      Jumlah_penumpang,
      Bahan_bakar,
      Harga_sewa,
      Gambar_mobil,
    };

    try {
      await addDoc(collection(db, "daftarMobil"), {
        ...mobilBaru
      });
      Swal.fire(`${mobilBaru.Nama_mobil} : ${mobilBaru.No_mobil} berhasil ditambahkan`, '', 'success');
      navigate('/daftarmobil');
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      <h2>Tambah Mobil Baru</h2>
      <input
        type="text"
        placeholder="Nama Mobil"
        onChange={(e) => setNama_mobil(e.target.value)}
      />
      <input
        type="text"
        placeholder="Nomor Mobil"
        onChange={(e) => setNo_mobil(e.target.value)}
      />
      <input
        type="text"
        placeholder="Jumlah penumpang"
        onChange={(e) => setJumlah_penumpang(e.target.value)}
      />
      <input
        type="text"
        placeholder="Bahan bakar"
        onChange={(e) => setBahan_bakar(e.target.value)}
      />
      <input
        type="text"
        placeholder="Harga per Hari"
        onChange={(e) => setHarga_sewa(e.target.value)}
      />
      <input
        type="text"
        placeholder="foto mobil"
        onChange={(e) => setGambar_mobil(e.target.value)}
      />
      <button onClick={handleTambahMobil}>Tambah</button>
    </div>
  );
}

export default TambahMobil;
