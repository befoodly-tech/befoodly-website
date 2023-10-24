import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import styles from './ComingSoon.module.css';
import WhatsAppQR from '../../assets/images/BefoodlyWhatsapp.jpeg';

const ComingSoon = () => {
  return (
    <>
      <AppBar sx={{ zIndex: 1, backgroundColor: 'black', padding: '16px 0', position: 'relative' }}>
        <Toolbar />
      </AppBar>
      <Container className={styles.comingSoonContainer}>
        <Typography variant="h6" className={styles.mainText}>
          We are launching our web app soon. Currently, we are taking orders from WhatsApp and we
          are doing deliveries in Bellandur, Koramangala and HSR Layout.
        </Typography>
        <Typography variant="h5" className={styles.secondaryText}>
          Scan the QR code to order food or have any query.
        </Typography>
        <img src={WhatsAppQR} width={'200px'}></img>
        <Typography className={styles.secondaryText}>
          Drop a mail at <a href="mailto: admin@befoodly.com">admin@befoodly.com</a>
          <br /> if you want to be the part of our founding team.
        </Typography>
      </Container>
    </>
  );
};

export default ComingSoon;
