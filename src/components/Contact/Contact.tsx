import { Box, Typography } from '@mui/material';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <Box className={styles.contact}>
      <Box className={styles.contactIntro}>
        <Box>
          <Typography variant="h4" className={styles.contactUs}>
            Contact Us
          </Typography>
        </Box>
        <Box className={styles.seprator}>
          <hr></hr>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Better yet, see you in person</Typography>
        <Typography className={styles.description}>
          We love our customers, so feel free to contact us 24 hours.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h6">BeFoodly</Typography>
        <Typography className={styles.description}>
          GENESIS APARTMENT, the Main Road, Ibbaluru, Bellandur, Bengaluru, Karnataka, India
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
