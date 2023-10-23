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
            Craving Homemade Food?
          </Typography>
          <Typography className={styles.textFrame2}>
            We believe in the power of homely flavors and ingredients that make every bite a
            nostalgic journey back to your roots. From Grandma&#39;s secret recipes to innovative
            twists on classic favorites, our chefs pour their love and expertise into every dish.
            It&#39;s more than just a meal; it&#39;s a taste of home, a celebration of tradition,
            and a feast for your senses.
          </Typography>
        </Grid>
        {/* Part 2 */}
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 4, md: 4 }}>
          <Typography variant="h5" className={styles.textFrame1}>
            Worried About Quality and Hygiene?
          </Typography>
          <Typography className={styles.textFrame2}>
            We understand that when it comes to food, quality and hygiene are of utmost importance.
            Rest assured, we take your concerns seriously. We source handpicked ingredients and our
            chefs maintain clean and sanitized kitchens. If ever you&#39;re not completely satisfied
            with your order, please don&#39;t hesitate to reach out. Your satisfaction is our top
            priority.
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
            Yes, you can place food order with your favourite chef. Once the food is prepared, we
            will assign a delivery partner to pick your order and deliver on time at your home.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Middle;
