import React from 'react';
import { Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import styles from './Bottom.module.css';
import Separator from '../Common/Separator';

const Bottom = () => (
  <Box className={styles.intro}>
    <Typography className={styles.heading} variant="h3">
      Want To Cook With Us?
    </Typography>
    <Separator updatedClass={styles.separator} />
    <Box className={styles.mid}>
      <Box className={styles.midblock}>
        <Typography variant="h5">Every Sunday</Typography>
      </Box>
      <Box className={styles.midblock}>
        <Typography variant="h6">
          Our Kitchen is an open platform, where you can book a slot with us and can cook your
          favorite dish with us.
        </Typography>
        <Typography variant="subtitle1" className={styles.subtext}>
          Our Team will help you in this process, you can also do the blogging videos within our
          kitchen. We support people who dream about running cloud kitchen :).
        </Typography>
        <Button
          variant="contained"
          href="https://forms.gle/UWwNzyJSN5TZRLZr6"
          target="_blank"
          className={styles.bookSlotBtn}
        >
          Book Slot
        </Button>
      </Box>
      <Box className={styles.midblock}>
        <Typography variant="h5">3 PM to 6 PM</Typography>
        <Typography className={styles.subtext}>Green Glen Layout, Bellandur</Typography>
      </Box>
    </Box>
  </Box>
);

export default Bottom;
