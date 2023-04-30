import { Box, Typography } from '@mui/material';
import styles from './Contact.module.css';
import Separator from '../Common/Separator';

const Contact = () => {
  return (
    <Box className={styles.contact}>
      <Box className={styles.contactIntro}>
        <Typography variant="h3" className={styles.contactUs}>
          Contact Us
        </Typography>
        <Separator />
      </Box>
      <Box>
        <Typography variant="h6">It&#39;s always nice hearing from you</Typography>
        <Typography className={styles.description}>
          We love our customers, so feel free to contact us 24 hours.
          <br />
          Drop an e-mail at: <a href="mailto: admin@befoodly.com">admin@befoodly.com</a>
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
