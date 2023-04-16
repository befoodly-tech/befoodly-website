import React from 'react';
import { Grid, Paper, Typography } from '@mui/material';
import KitchenChef from '../../assets/images/kitchen-chef.jpg';
import Vegetable from '../../assets/images/vegetables.jpg';
import Cook from '../../assets/images/cook.jpg';
import styles from './Middle.module.css';
import { Box } from '@mui/system';

const Middle = () => {
  return (
    <Box>
      {/* Part 1 */}
      <Grid container className={styles.midGaurd}>
        <Grid item xs={12} md={6} className={styles.gridItem}>
          <Box component="img" className={styles.frame} src={KitchenChef} alt="Chef"></Box>
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
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 4, md: 3 }}>
          <Typography variant="h5" className={styles.textFrame1}>
            Fear Of Quality And Hygiene?
          </Typography>
          <Typography className={styles.textFrame2}>
            All the kitchens are verified as per govt. regulations, and as per our terms &
            conditions. Every home-chef cleans the kitchen before cooking any meal, we trust into
            using instamart to get fresh veggies and fruits.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 3, md: 4 }}>
          <Box component="img" className={styles.frame} src={Vegetable} alt="Vegetables"></Box>
        </Grid>
        {/* Part 3 */}
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 5, md: 6 }}>
          <Box component="img" className={styles.frame} src={Cook} alt="Cook"></Box>
        </Grid>
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 5, md: 6 }}>
          <Typography variant="h5" className={styles.textFrame1}>
            Not a Great Cook?
          </Typography>
          <Typography className={styles.textFrame2}>
            It&quot;s okay, we can connect you with very talented and experienced cook. The cook
            will come to your home and cook a delicious meal for you. Must try experience.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Middle;
