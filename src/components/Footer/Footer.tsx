import { Box, Typography } from '@mui/material';
import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Typography className={styles.copyright}>
        Copyright © 2023 <span className={styles.companyName}>BeFoodly</span> - All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
