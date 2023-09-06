import { Box } from '@mui/material';
import NavbarApp from '../components/NavbarApp/NavbarApp';
import Landing from './Landing/Landing';
import Footer from '../components/Footer/Footer';
import { GenericGlobalData } from '../types/CommonType';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { healthCheckApi } from '../actions/LoginActions';

const AppHome = (props: GenericGlobalData) => {
  const { isSessionExpired } = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.sessionToken) {
      dispatch(healthCheckApi(props.sessionToken));
    }
  }, [props.sessionToken]);

  return (
    <Box>
      <NavbarApp customerId={props.customerId} isLoggedOut={isSessionExpired} />
      <Landing globalData={props} isSessionExpired={isSessionExpired} />
      <Footer />
    </Box>
  );
};

export default AppHome;
