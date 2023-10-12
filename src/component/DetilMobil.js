import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, addDoc, collection } from "firebase/firestore";
import { db } from '../firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { UserAuth } from '../context/AuthContext';
import '../styling/DetilMobil.css'; 
// import ReactDatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.module.css"

function DetailMobil() {
  // Gunakan useParams untuk mendapatkan id mobil dari URL
  const { id } = useParams();
  const [mobilData, setMobilData] = useState([]);
  const [Jumlah_hari, setJmlHari] = useState('');
  const [Tgl_mulai, setTglMulai] = useState('');
  const [No_tlp, setNoTelp] = useState('');
  const totalBiaya = Jumlah_hari * mobilData.Harga_sewa;
  const navigate = useNavigate();
  const { user } = UserAuth([]);
  // const [selectedDate, setSelectedDate] = useState(null);
  
  
  const handlePesanMobil = async (e) => {
    e.preventDefault();
    const pesanMobil = {
        Jumlah_hari,
        Tgl_mulai,
        No_tlp,
        Nama_mobil: mobilData.Nama_mobil,
        Harga_sewa: mobilData.Harga_sewa,
        totalBiaya,
        Pemesan: user.displayName,
    };


    if (!Jumlah_hari || !Jumlah_hari || !No_tlp) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'Isian belum lengkap',
        showConfirmButton: true,
      });
    }

    if (Jumlah_hari < 1 || Jumlah_hari > 10) {
      return Swal.fire({
        icon: 'error',
        title: 'Error!',
        text: 'isian jumlah hari dari 1 s.d 10 ',
        showConfirmButton: true,
      });
    }


    Swal.fire({
      title: 'Data sudah benar?',
      // showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      // denyButtonText: `Don't save`,
    }).then(async (result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        try {
          await addDoc(collection(db, "rental"), {
            ...pesanMobil
          });
          navigate('/home')
        } catch (error) {
          console.log(error)
        };
        Swal.fire(`Terimakasih ${user.displayName} sudah melakukan pembayaran Rp.${totalBiaya}`, '', 'success');
      } else {
        Swal.fire('Pesanan tidak disimpan', '', 'info')
      }
    })


  };
  const handleLogin = async (e) => {
    Swal.fire({
      icon: 'info',
      title: 'Anda Belum Login !',
      text: `Silahkan login terlebih dahulu`,
      confirmButtonText: 'Oke',
      showConfirmButton: true,
      // showConfirmButton: false,
      // timer: 1500,
    });
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

    
    <div className="detail-mobil">
      {mobilData && (
      <><div className="gambar-mobil">
          <img src={mobilData.Gambar_mobil} alt={mobilData.Nama_mobil} />
        </div><div className="info-mobil">
            <h1>{mobilData.Nama_mobil}</h1>
            <p><strong>Plat Mobil :</strong> {mobilData.No_mobil}</p>
            <p><strong>Harga Sewa (per hari):</strong> {mobilData.Harga_sewa}</p>
            <p><strong>Bahan Bakar:</strong> {mobilData.Bahan_bakar}</p>
            <p><strong>Jumlah Penumpang:</strong> {mobilData.Jumlah_penumpang}</p>
          </div></>
      )}

      <form >
        <div className="form-group">
          <label>Jumlah Hari : </label>
          <input
            type="number"
            min="1"
            max="10"
            value={Jumlah_hari}
            onChange={(e) => setJmlHari(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Tanggal Mulai :</label>
          <input
            type="date"
            value={Tgl_mulai}
            onChange={(e) => setTglMulai(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>No Telpon :</label>
          <input
            type="text"
            value={No_tlp}
            onChange={(e) => setNoTelp(e.target.value)}
            required
          />
        </div>
        {user ? (
          <button onClick={handlePesanMobil} type="submit">Kirim Pemesanan</button>
        ) : <button onClick={handleLogin} type="submit">Kirim Pemesanan</button>}

        
      </form>
    </div>
  );

}

export default DetailMobil;