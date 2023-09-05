import { Box } from '@mui/material';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import Landing from './Landing/Landing';
import Footer from '../components/Footer/Footer';
import { getCookie } from '../utils/CookieHelper';
import { GenericGlobalData } from '../types/CommonType';

const commonGlobalData: GenericGlobalData = {
  phoneNumber: getCookie('phone'),
  sessionToken: getCookie('session'),
  customerId: getCookie('customerId'),
  s3Url: window.config?.S3_URL
};

const AppHome = () => {
  return (
    <Box>
      <NavbarApp customerId={commonGlobalData.customerId} session={commonGlobalData.sessionToken} />
      <Landing {...commonGlobalData} />
      <Footer />
    </Box>
  );
};

export default AppHome;
