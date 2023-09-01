import { Box } from '@mui/material';
import styles from './OfferBanner.module.css';
import OfferCard, { OfferCardProps } from './OfferCard/OfferCard';
import { DeliveryDiningTwoTone } from '@mui/icons-material';
import SvgDiet from '../../ui/Icon/Diet';

const offerCards: OfferCardProps[] = [
  {
    disRupee: 50,
    disDescription: 'Flat Discount',
    disIcon: <SvgDiet />,
    disRule: 'On order above ₹ 199',
    background:
      'linear-gradient(136deg, #15ca6a 0%, #14ae5c 88.81%),linear-gradient(140deg, #4fa0ff 0%, #434bff 100%)'
  },
  {
    disPercentage: 25,
    disDescription: 'Flat Discount',
    disIcon: <SvgDiet />,
    disRule: 'On order above ₹ 299',
    background: 'linear-gradient(140deg, #4FA0FF 0%, #434BFF 100%)'
  },
  {
    disRupee: 20,
    disDescription: 'Only For Delivery',
    disIcon: <DeliveryDiningTwoTone sx={{ width: 60, height: 60, color: '#4c2614' }} />,
    disRule: 'On every order, COD :)',
    background:
      'linear-gradient(136deg, #C94217 0%, #EE682F 88.81%), linear-gradient(140deg, #4FA0FF 0%, #434BFF 100%)'
  }
];

const Offer = () => {
  return (
    <Box className={styles.outerBox}>
      {offerCards.map((offerCard, index) => (
        <OfferCard key={index} {...offerCard} />
      ))}
    </Box>
  );
};

export default Offer;
