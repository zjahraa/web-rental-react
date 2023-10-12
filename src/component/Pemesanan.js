import React, { useState, useEffect } from 'react';
import '../styling/Table.css';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase';


function Pemesanan() {
  const [dataPesanan, setDatapesanan] = useState([]);
  const getDatamobil = async () => {
    const querySnapshot = await getDocs(collection(db, "rental"));
    const dataPesanan = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data()}))
    dataPesanan.sort((b, a) => new Date(a.Tgl_mulai) - new Date(b.Tgl_mulai));
    setDatapesanan(dataPesanan);
  }

  useEffect(() => {
    getDatamobil()
  }, []);

  return (
    <div className='table-container'>
      <h1>Daftar Pesanan Mobil</h1>
      <table className='table'>
        <thead>
          <tr>
            <th>Pemesan</th>
            <th>Nama Mobil</th>
            <th>Tanggal Mulai</th>
            <th>Harga Sewa</th>
            <th>Jumlah Hari</th>
            <th>Total Biaya</th>
            <th>No Telp</th>
          </tr>
        </thead>
        <tbody>
          {dataPesanan.map((mobil, index) => (
            <tr key={index}>
              <td>{mobil.Pemesan}</td>
              <td>{mobil.Nama_mobil}</td>
              <td>{mobil.Tgl_mulai}</td>
              <td>{mobil.Harga_sewa}</td>
              <td>{mobil.Jumlah_hari}</td>
              <td>{mobil.totalBiaya}</td>
              <td>{mobil.No_tlp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
    
}

export default Pemesanan;
