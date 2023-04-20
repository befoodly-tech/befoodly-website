import React, { ReactComponentElement } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useOutlet } from 'react-router-dom';
import Home from '../../pages/Home';

const Layout = () => {
  const outlet = useOutlet();

  return (
    <>
      <Navbar />
      {outlet || <Home />}
      <Footer />
    </>
  );
};

export default Layout;
