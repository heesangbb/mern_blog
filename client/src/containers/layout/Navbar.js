import React from 'react';
import NavigationBar from './../../components/layout/NavigationBar';

function Navbar() {
  const handleLogout = e => {
    e.preventDefault();
    console.log('logoutUser');
  };
  return <NavigationBar logout={handleLogout} />;
}

export default Navbar;
