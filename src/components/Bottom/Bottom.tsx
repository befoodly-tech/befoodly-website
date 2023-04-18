import React from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import styles from './Bottom.module.css';

const Bottom = () => {
  return (
    <Box className={styles.intro}>
      <Typography variant="h3">Events</Typography>
      {/* <Box className={styles.seprator}>
        <hr></hr>
      </Box> */}
      <Box className={styles.mid}>
        <Box className={styles.midblock}>
          <Typography variant="h5">01/07/2023</Typography>
        </Box>
        <Box className={styles.midblock}>
          <Box className={styles.launch}>
            <Typography variant="h5">We Are Launching In Bangalore!</Typography>
            <Typography variant="subtitle1" className={styles.subtext}>
              Our mobile application will launch by first week of the July, 2023 and initially we
              will start providing service on Suncity lane, Bellandur....
            </Typography>
          </Box>
        </Box>
        <Box className={styles.midblock}>
          <Typography variant="h5">11am- 10pm</Typography>
          <Typography>Bellandur</Typography>
        </Box>
      </Box>
      <hr></hr>
    </Box>
  );
};

export default Bottom;
