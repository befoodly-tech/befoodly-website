import { Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import Banner from '../../components/Banner/Banner';
import Offer from '../../components/Offer/Offer';
import Chefs from '../../components/Chefs/Chefs';

const Landing = () => {
  return (
    <Box className={styles.main}>
      <NavbarApp />
      {/* <Banner /> */}
      <Offer />
      <Chefs />
    </Box>
  );
};

export default Landing;
