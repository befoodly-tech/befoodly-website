import { Container, Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import Banner from '../../components/Banner/Banner';

const Landing = () => {
  return (
    <Box className={styles.main}>
      <NavbarApp />
      <Banner />
    </Box>
  );
};

export default Landing;
