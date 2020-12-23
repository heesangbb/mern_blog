import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavigationBar from './../../components/layout/NavigationBar';
import { logoutUser } from '../../actions/authActions';

function Navbar() {
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleLogout = e => {
    e.preventDefault();
    dispatch(logoutUser());
  };

  return <NavigationBar auth={auth.isAuthenticated} logout={handleLogout} />;
}

export default Navbar;
