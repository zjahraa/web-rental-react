import React from 'react';
import '../styling/Header.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = UserAuth([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    const confirmLogout = window.confirm('Apakah Anda yakin ingin logout?');

    if (confirmLogout) {
      try {
        await logout();
        console.log('You are logged out');
        navigate('/');
      } catch (e) {
        console.log(e.message);
      }
    }
  };


  return (
    <>
      <div className="appbar">
        <div className="profile-icon">
          {user && user.photoURL !== '' ? (
              <>
                <img src={user.photoURL} alt={user.email} className="rounded-image" />
                <span className="profile-name">{user.displayName}</span>
              </>
            ) : null
          }
        </div>
        <ul className="navbar">
        <li><Link to='/home'>Home</Link></li>
              {user && user.email === 'admin@admin.com' ? (
                <>
                  <li><Link to="/pemesanan">Daftar Order</Link></li>
                  <li><Link to="/tambahmobil">Tambah Mobil</Link></li>
                </>
              ) : null}
              {user && user.email !== 'admin@admin.com' ? (
                <li><Link to="/account">User</Link></li>
              ) : null}
              {user ? (
                <Link onClick={handleLogout}>Logout</Link>
              ) : (
                <li><Link to="/signin">Login</Link></li>
              )}
        </ul>
      </div>

    
</>
  );
}

export default Header;
