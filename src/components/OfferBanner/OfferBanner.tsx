import { Box, Grid, Pagination, useMediaQuery } from '@mui/material';
import styles from './OfferBanner.module.css';
import OfferCard from './OfferCard/OfferCard';
import { theme } from '../../ui/theme';
import { useState } from 'react';
import { Container } from '@mui/system';
import { offerCards } from '../../utils/Coupons';

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
