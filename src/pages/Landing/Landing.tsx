import { Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import HeaderTabs from '../../components/Headers/HeaderTabs';
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

  const S3_URL = window.config?.S3_URL;

  return (
    <Box className={styles.main}>
      <NavbarApp customerId={customerId} session={sessionToken} />
      <HeaderTabs customerId={customerId} />
      <OfferBanner />
      <Chefs bucketUrl={S3_URL} />
      <Filters />
      <Dishes />
      <Footer />
    </Box>
  );
};

export default Landing;
