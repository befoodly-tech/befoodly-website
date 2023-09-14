import { Box } from '@mui/material';
import styles from './Landing.module.css';
import HeaderTabs from '../../components/Headers/HeaderTabs';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Chefs from '../../components/Chefs/Chefs';
import Filters from '../../components/Filters/Filters';
import Dishes from '../../components/Dishes/Dishes';
import { GenericGlobalData } from '../../types/CommonType';
import { useOutlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

const MainLandingBody = (url: string, customerId: string) => {
  return (
    <>
      <HeaderTabs customerId={customerId} />
      <OfferBanner />
      <Chefs bucketUrl={url} />
      <Filters />
      <Dishes bucketUrl={url} />
    </>
  );
};

interface LandingProps {
  globalData: GenericGlobalData;
  isSessionExpired: boolean;
}

const Landing = (props: LandingProps) => {
  const outlet = useOutlet();
  const [customerId, setCustomerId] = useState(props.globalData?.customerId);

  useEffect(() => {
    if (props?.isSessionExpired) {
      setCustomerId('');
    }
  }, [props.isSessionExpired]);

  return (
    <Box className={styles.main}>
      {outlet || MainLandingBody(props.globalData?.s3Url, customerId)}
    </Box>
  );
};

export default Landing;
