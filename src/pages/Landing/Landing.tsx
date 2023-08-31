import { Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import Banner from '../../components/Banner/Banner';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Chefs from '../../components/Chefs/Chefs';
import Filters from '../../components/Filters/Filters';
import Dishes from '../../components/Dishes/Dishes';
import Footer from '../../components/Footer/Footer';
import { getCookie } from '../../utils/CookieHelper';

const Landing = () => {
  const phoneNumber = getCookie('phone');
  const sessionToken = getCookie('session');
  const customerId = getCookie('customerId');

  return (
    <Box className={styles.main}>
      <NavbarApp customerId={customerId} session={sessionToken} />
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
