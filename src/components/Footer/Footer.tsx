import { Box, Typography } from '@mui/material';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import { Email, Instagram, LinkedIn, Phone } from '@mui/icons-material';
import { Container } from '@mui/system';

const Footer = () => {
  return (
    <Box className={styles.footer}>
      <Container className={styles.bottomNav}>
        <div className={styles.webNavConnect}>
          <Link to="../home" className={styles.navLink}>
            Web Home
          </Link>
          <Link to="../about" className={styles.navLink}>
            About Us
          </Link>
          <Link to="../blog" className={styles.navLink}>
            Blog
          </Link>
        </div>
        <div className={styles.webNavConnect}>
          <div className={styles.socialMediaConnect}>
            <Email sx={{ color: 'white', height: 32, width: 32 }} />
            <span>support@befoodly.com</span>
          </div>
          <div className={styles.socialMediaConnect}>
            <Phone sx={{ color: '#3DDC84', height: 32, width: 32 }} />
            <span>+91-8755509017</span>
          </div>
          <div className={styles.socialMediaConnect}>
            <LinkedIn
              sx={{ color: '#0072b1', height: 32, width: 32, cursor: 'pointer' }}
              onClick={() => window.open('https://www.linkedin.com/company/befoodly', '_blank')}
            />
            <span>BeFoodly</span>
          </div>
          <div className={styles.socialMediaConnect}>
            <Instagram
              sx={{ color: '#bc2a8d', height: 32, width: 32, cursor: 'pointer' }}
              onClick={() => window.open('https://www.instagram.com/befoodly.kitchen', '_blank')}
            />
            <span>befoodly.kitchen</span>
          </div>
        </div>
      </Container>
      <Typography className={styles.copyright}>
        Copyright © 2023 <span className={styles.companyName}>BeFoodly</span> - All Rights Reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
