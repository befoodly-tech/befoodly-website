import React, { ReactComponentElement } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { useOutlet } from 'react-router-dom';
import Home from '../../pages/Home';
import styles from './Layout.module.css';

const Layout = () => {
  const outlet = useOutlet();

  return (
    <div className={styles.container}>
      <Navbar />
      {outlet || <Home />}
      <Footer />
    </div>
  );
};

export default Layout;
