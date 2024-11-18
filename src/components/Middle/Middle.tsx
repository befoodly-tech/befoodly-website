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
            Craving For Homely Food In Bangalore?
          </Typography>
          <Typography className={styles.textFrame2}>
            At BeFoodly, we believe there&#39;s nothing quite like the taste of home. Our chefs
            recreate the comforting flavours of traditional home-cooked meals, ensuring every bite
            brings back the warmth and nostalgia of a family meals. Whether you&#39;re missing your
            mom&#39;s delicacies or facing a lazy or hectic day at work, we&#39;re here to give you
            the feel of home. Be it North Indian classics or South Indian delicacies, our diverse
            menu has something special for everyone. So, order now and enjoy the wholesome goodness
            of &quot;Ghar Jaisa Khana&quot; without stepping out of your home!
          </Typography>
        </Grid>
        {/* Part 2 */}
        <Grid item xs={12} md={6} className={styles.gridItem} order={{ xs: 4, md: 4 }}>
          <Typography variant="h5" className={styles.textFrame1}>
            How Do We Ensure Quality and Hygiene?
          </Typography>
          <Typography className={styles.textFrame2}>
            We understand that when it comes to food, quality and hygiene are of utmost importance.
            Rest assured, we take your concerns seriously. We source handpicked ingredients and our
            helpers maintain clean and sanitized kitchens. Our kitchen adheres to the highest
            standards of cleanliness and food safety, adding a touch of mom&#39;s magic to ensure
            every dish is not only delicious but also safe and nutritious. If ever you&#39;re not
            completely satisfied with your order, please don&#39;t hesitate to reach out. Your
            satisfaction is our top priority.
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
            Need Convenient Home Delivery?
          </Typography>
          <Typography className={styles.textFrame2}>
            Yes, We know how busy life can get in Bangalore, which is why we offer a seamless home
            delivery service. We work on pre-order model and batching delivery model. You have to
            book your meal atleast 45 mins before your lunch/dinner time, and select your preferred
            delivery timing slot. Once the food is prepared, we will assign a delivery partner to
            pick your order and deliver on time at your doorstep. With BeFoodly, you can have your
            favorite meals delivered right to your doorstep, hassle-free. Whether it&#39;s lunch at
            the office or dinner at home, our reliable delivery ensures your food arrives fresh and
            on time. Join our membership program for even more convenience and benefits, including
            customizable meal plans and flexible scheduling.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Middle;
