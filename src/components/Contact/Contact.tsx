import { Box, Typography } from '@mui/material';
import styles from './Contact.module.css';
import Separator from '../Common/Separator';
import WorkIcon from '@mui/icons-material/Work';

const Contact = () => {
  return (
    <Box className={styles.contact}>
      <Box className={styles.contactIntro}>
        <Typography variant="h3" className={styles.contactUs}>
          Contact Us
        </Typography>
        <Separator />
      </Box>
      <Box className={styles.contentBox}>
        <Typography variant="h6">It&#39;s always nice hearing from you</Typography>
        <Typography className={styles.description}>
          We love our customers, so feel free to contact us 24 hours.
          <br />
          Drop an e-mail at: <a href="mailto: admin@befoodly.com">admin@befoodly.com</a>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            color: 'white',
            backgroundColor: 'red',
            display: 'flex',
            alignItems: 'center',
            margin: 'auto',
            marginTop: '20px',
            padding: '8px'
          }}
        >
          <WorkIcon color="primary" /> Interested in joining our founding team? Send us an email
        </Typography>
      </Box>
    </Box>
  );
};

export default Contact;
