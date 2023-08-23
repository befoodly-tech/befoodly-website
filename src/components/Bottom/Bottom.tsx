import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './Bottom.module.css';
import Separator from '../Common/Separator';

const Bottom = () => {
  return (
    <Box className={styles.intro}>
      <Typography className={styles.heading} variant="h3">
        Events
      </Typography>
      <Separator updatedClass={styles.separator} />
      <Box className={styles.mid}>
        <Box className={styles.midblock}>
          <Typography variant="h5">31/08/2023</Typography>
        </Box>
        <Box className={styles.midblock}>
          <Typography variant="h5">We Are Launching In Bangalore!</Typography>
          <Typography variant="subtitle1" className={styles.subtext}>
            Our mobile application will be launched by last week of the August, 2023.
            <br />
            Initially we will be providing service around Iblur Lake, Bellandur.
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
};

export default Bottom;
