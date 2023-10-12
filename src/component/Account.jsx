import React, { useState, useEffect } from 'react';
import '../styling/Table.css';
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../firebase';
import { UserAuth } from '../context/AuthContext';

function Account() {
  const [dataPesanan, setDatapesanan] = useState([]);
  const { user } = UserAuth([]);

  useEffect(() => {
    const getDatamobil = async () => {
      try {
        if (user) {
          const q = query(collection(db, "rental"), where('Pemesan', '==', user.displayName));
          const querySnapshot = await getDocs(q);
          const data = [];
          querySnapshot.forEach((doc) => {
            data.push(doc.data());
          });
          setDatapesanan(data);
        } else {
          console.log("User not authenticated.");
          // Handle the case where the user is not authenticated.
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle the error here.
      }
    };

    getDatamobil();
  }, [user]);

  return (
    <div className="table-container">
      <div className="home">
      <h1>History Pesanan Mobil</h1>
      </div>
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

export default Account;