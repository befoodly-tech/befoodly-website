import { Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import Banner from '../../components/Banner/Banner';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Chefs from '../../components/Chefs/Chefs';
import Filters from '../../components/Filters/Filters';
import Dishes from '../../components/Dishes/Dishes';
import Footer from '../../components/Footer/Footer';

const Landing = () => {
  return (
    <Box className={styles.main}>
      <NavbarApp />
      <Banner />
      <OfferBanner />
      <Chefs />
      <Filters />
      <Dishes />
      <Footer />
    </Box>
  );
};

export default Landing;
