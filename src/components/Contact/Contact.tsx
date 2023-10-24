import { Box, Typography } from '@mui/material';
import styles from './Contact.module.css';
import Separator from '../Common/Separator';
import WhatsAppQR from '../../assets/images/BefoodlyWhatsapp.jpeg';

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
        </Typography>
        <Typography variant="h6" padding={'20px'}>
          Scan the QR code to order food.
        </Typography>
        <img src={WhatsAppQR} width={'200px'}></img>
      </Box>
    </Box>
  );
};

export default Contact;
