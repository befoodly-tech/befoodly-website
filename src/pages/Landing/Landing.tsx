import { Box } from '@mui/material';
import styles from './Landing.module.css';
import HeaderTabs from '../../components/Headers/HeaderTabs';
import OfferBanner from '../../components/OfferBanner/OfferBanner';
import Chefs from '../../components/Chefs/Chefs';
import Filters from '../../components/Filters/Filters';
import Dishes from '../../components/Dishes/Dishes';
import { GenericGlobalData } from '../../types/CommonType';
import { useOutlet } from 'react-router-dom';

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

const Landing = (props: GenericGlobalData) => {
  const outlet = useOutlet();

  return (
    <Box className={styles.main}>{outlet || MainLandingBody(props.s3Url, props.customerId)}</Box>
  );
};

export default Landing;
