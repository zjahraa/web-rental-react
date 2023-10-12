import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserAuth } from '../context/AuthContext';
import '../styling/DetilMobil.css'; 

function DeleteMobil() {
  // Gunakan useParams untuk mendapatkan id mobil dari URL
  const { id } = useParams();
  const [mobilData, setMobilData] = useState([]);
  const navigate = useNavigate();
  const { user } = UserAuth([]);
  
  const handleDeleteMobil = async (event) => {
    event.preventDefault();
    
    Swal.fire({
      title: `Data sudah benar?`,
      text: `${mobilData.Nama_mobil} : ${mobilData.No_mobil}`,
      showCancelButton: true,
      confirmButtonText: 'Hapus',
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          await deleteDoc(doc(db, "daftarMobil", id));
          console.log(`Dokumen dengan ID ${id} berhasil dihapus.`);
          Swal.fire(`${mobilData.Nama_mobil} : ${mobilData.No_mobil} sdh dihapus`, '', 'success');
          navigate('/home');
        } catch (error) {
          console.log(error)
        };
      } else {
        Swal.fire('Data tidak dihapus', '', 'info')
      }
    })

  };

  useEffect(() => {
    const fetchMobilData = async () => {
      try {
        // Dapatkan referensi dokumen berdasarkan ID dari Firestore
        const mobilDocRef = doc(db, 'daftarMobil', id);
        const mobilDocSnapshot = await getDoc(mobilDocRef);

        if (mobilDocSnapshot.exists()) {
          // Jika dokumen ditemukan, set data ke state
          setMobilData(mobilDocSnapshot.data());
        } else {
          console.log('Dokumen tidak ditemukan');
        }
      } catch (error) {
        console.error('Gagal mengambil data:', error);
      }
    };

    fetchMobilData();
  }, [id]);

  return (
    <><h1>Detail Mobil: </h1><div className="detail-mobil">
          {mobilData && (
              <><div className="gambar-mobil">
                  <img src={mobilData.Gambar_mobil} alt={mobilData.Nama_mobil} />
              </div><div className="info-mobil">
                      <h1>Detail Mobil: {mobilData.Nama_mobil}</h1>
                      <p><strong>No Mobil:</strong> {mobilData.No_mobil}</p>
                      <p><strong>Bahan Bakar:</strong> {mobilData.Bahan_bakar}</p>
                      <p><strong>Jumlah Penumpang:</strong> {mobilData.Jumlah_penumpang}</p>
                  </div></>
          )}

          <form>
              {user && user.email === 'admin@admin.com' ? (
                  <button onClick={handleDeleteMobil} type="submit">Hapus {mobilData.id}</button>
              ) : null}

          </form>

      </div></>
  );
}

export default DeleteMobil;