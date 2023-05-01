import React from 'react';
import { Grid, Typography } from '@mui/material';
import HomeChef from '../../assets/images/home-chef.jpg';
import Vegetable from '../../assets/images/fresh-veggies.jpg';
import Delivery from '../../assets/images/delivery-partner.jpg';
import styles from './Middle.module.css';
import { Box } from '@mui/system';
import Separator from '../Common/Separator';

const Middle = () => {
  return (
    <Box className={styles.middleContainer}>
      <Box className={styles.base}>
        <Typography className={styles.baseText} variant="h3">
          Hello There!
        </Typography>
        <Separator />
      </Box>
      <Grid container className={styles.midGaurd}>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Box component="img" className={styles.frame} src={HomeChef} alt="Chef"></Box>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Typography variant="h5" className={styles.textFrame1}>
            Looking For Homemade Food?
          </Typography>
          <Typography className={styles.textFrame2}>
            Explore our food menu, all the recipes are made by our home-chefs inside their kitchen
            with the homely flavour and ingredients.
          </Typography>
        </Grid>
        {/* Part 2 */}
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 4, md: 4 }}>
          <Typography variant="h5" className={styles.textFrame1}>
            Fear Of Quality And Hygiene?
          </Typography>
          <Typography className={styles.textFrame2}>
            All the kitchens are verified as per govt. regulations, and as per our terms &
            conditions. Every home-chef cleans the kitchen before cooking any meal, we trust into
            using fresh veggies and fruits.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 3, md: 4 }}>
          <Box component="img" className={styles.frame} src={Vegetable} alt="Vegetables Img"></Box>
        </Grid>
        {/* Part 3 */}
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 5, md: 6 }}>
          <Box component="img" className={styles.frame} src={Delivery} alt="Delivery Img"></Box>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 5, md: 6 }}>
          <Typography variant="h5" className={styles.textFrame1}>
            Want Home Delivery?
          </Typography>
          <Typography className={styles.textFrame2}>
            Yes, you can place food order with your favourite home chef. Once the food is prepared,
            we will assign a delivery partner to pick your order and deliver on time at your home.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Middle;
