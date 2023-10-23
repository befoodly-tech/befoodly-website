import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './Bottom.module.css';
import Separator from '../Common/Separator';

const Bottom = () => (
  <Box className={styles.intro}>
    <Typography className={styles.heading} variant="h3">
      Events
    </Typography>
    <Separator updatedClass={styles.separator} />
    <Box className={styles.mid}>
      <Box className={styles.midblock}>
        <Typography variant="h5">01/10/2023</Typography>
      </Box>
      <Box className={styles.midblock}>
        <Typography variant="h5">We have started our operations in Bellandur!</Typography>
        <Typography variant="subtitle1" className={styles.subtext}>
          Currently we are accepting our orders through WhatsApp.
          <br />
          You can join our community by scanning the QR code below.
        </Typography>
      </Box>
      <Box className={styles.midblock}>
        <Typography variant="h5">11am - 10pm</Typography>
        <Typography className={styles.subtext}>Bellandur</Typography>
      </Box>
    </Box>
    <Separator updatedClass={styles.endOfSection} />
  </Box>
);

export default Bottom;
