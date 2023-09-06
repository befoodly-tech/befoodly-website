import { Box, Grid, Pagination, useMediaQuery } from '@mui/material';
import styles from './OfferBanner.module.css';
import OfferCard, { OfferCardProps } from './OfferCard/OfferCard';
import SvgDiet from '../../assets/svgs/Diet.svg';
import { theme } from '../../ui/theme';
import { useState } from 'react';
import { Container } from '@mui/system';

const offerCards: OfferCardProps[] = [
  {
    disRupee: 50,
    disDescription: 'Flat Discount',
    disIcon: SvgDiet,
    disRule: 'On order above ₹ 199',
    background:
      'linear-gradient(136deg, #15ca6a 0%, #14ae5c 88.81%),linear-gradient(140deg, #4fa0ff 0%, #434bff 100%)'
  },
  {
    disPercentage: 30,
    disDescription: 'Flat Discount',
    disIcon: SvgDiet,
    disRule: 'On order above ₹ 299',
    background: 'linear-gradient(140deg, #4FA0FF 0%, #434BFF 100%)'
  },
  {
    disRupee: 20,
    disDescription: 'Only For Delivery',
    disIcon: SvgDiet,
    disRule: 'On every order, COD :)',
    background:
      'linear-gradient(136deg, #C94217 0%, #EE682F 88.81%), linear-gradient(140deg, #4FA0FF 0%, #434BFF 100%)'
  }
];

const Offer = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [page, setPage] = useState(0);

  const handleOnChange = (event: React.ChangeEvent<unknown>, value: number) => {
    value = value - 1;
    setPage(value);
  };

  return (
    <Box className={styles.bannerContainer}>
      {isMobile ? (
        <Box className={styles.outerBox}>
          <OfferCard {...offerCards[page]} />
          <Pagination count={offerCards.length} page={page + 1} onChange={handleOnChange} />
        </Box>
      ) : (
        <Container>
          <Grid container className={styles.outerBox}>
            {offerCards.map((offerCard, index) => (
              <Grid item key={index}>
                <OfferCard {...offerCard} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </Box>
  );
};

export default Offer;
