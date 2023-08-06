import { Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import Banner from '../../components/Banner/Banner';
import Offer from '../../components/Offer/Offer';
import Chefs from '../../components/Chefs/Chefs';
import Filters from '../../components/Filters/Filters';
import Dishes from '../../components/Foods/Dishes';

const Landing = () => {
  return (
    <Box className={styles.main}>
      <NavbarApp />
      <Banner />
      <Offer />
      <Chefs />
      <Filters />
      <Dishes />
    </Box>
  );
};

export default Landing;
