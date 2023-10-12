import React from 'react';
import '../styling/Header.css'; 
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

function Header() {
  const { user, logout } = UserAuth([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      console.log('You are logged out');
      navigate('/');
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <><header>
      <nav>
        <ul>
          {/* <li><a href="/home">Home</a></li> */}
          <li><Link to='/home' >Home</Link></li>
          {/* <li><a href="/pemesanan">Daftar Order</a></li> */}
          {user ?
            (user.email === 'admin@admin.com' ? <><li><Link to="/pemesanan">Daftar Order </Link></li></> : null) : null}
          {user ?
            (user.email === 'admin@admin.com' ? <><li><Link to="/tambahmobil">TambahMobil </Link></li></> : null) : null}
          {/* <li><a href="/kontak">Kontak</a></li> */}
          {/* {user && <><li><Link to="/account">User </Link></li></>} */}
          {user ? 
            (user.email !== 'admin@admin.com' ? <><li><Link to="/account">User </Link></li></> : null) :  
            null 
          }
          {user ? 
           (user ? <><Link onClick={handleLogout} >Logout</Link></> : null) : 
            (<li><Link to="/signin">Login</Link></li>) 
          }
        </ul>
      </nav>

    </header><div>
        {user ? "Selamat datang " + user.email : ''}
        
      </div></>
  );
}

export default Header;
