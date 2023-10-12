import React, { useState, useEffect } from 'react';
import '../styling/Home.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';
import { Link } from 'react-router-dom'; 
import { UserAuth } from '../context/AuthContext';

function DaftarMobil() {
  const [datamobil, setDatamobil] = useState([]);
  const { user } = UserAuth([]);
  const getDatamobil = async () => {
    const querySnapshot = await getDocs(collection(db, "daftarMobil"));
    const datamobil = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    setDatamobil(datamobil);
  }

  useEffect(() => {
    getDatamobil()
  }, []);

  return (
    
    <div className="home">
      <h1>Selamat datang di Rental Mobil</h1>
      <p>Tersedia berbagai macam mobil berkualitas untuk Anda</p>

      <div className="daftar-mobil">
        {datamobil.map((mobil, index) => (
          <div key={index} className="mobil-card">
              <img src={mobil.Gambar_mobil} alt={mobil.Nama_mobil} />
              <h2>{mobil.Nama_mobil} - {mobil.No_mobil}</h2>
              <p>{mobil.Harga_mobil}</p>
              <a href={`/detilmobil/${mobil.id}`}>Lihat Detail</a>
              <br/>
              {user && user.email === 'admin@admin.com' ? ( 
                // <button onClick={() => handleDeleteClick(mobil.id)} type="submit">Hapus</button> 
                <Link to={`/deletemobil/${mobil.id}`}>Hapus Mobil</Link> 
              ) : null}
              {/* Nama Mobil: {mobil.Nama_mobil}, Harga: {mobil.Jumlah_penumpang} */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DaftarMobil;
