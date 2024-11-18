import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import cx from 'classnames';
import styles from './Top.module.css';

const Top = () => {
  return (
    <Box className={styles.topImage}>
      <Box className={styles.intro}>
        <Typography className={styles.headingMain}>Eat Homely, Healthy Food</Typography>
        <Typography className={styles.detailsMain}>
          Join us in our love for homemade food & munchies
        </Typography>
        <div className={styles.homeButton}>
          <Button variant="contained" href="/ourkitchen" className={styles.exploreBtn}>
            Visit Our Kitchen
          </Button>
          <Button
            variant="contained"
            // href="/comingsoon"
            href="https://wa.me/c/918755509017"
            target="_blank"
            className={cx(styles.exploreBtn, styles.kitchenBtn)}
          >
            Place Order
          </Button>
        </div>
        <div className={styles.homeButton}>
          <Button
            variant="contained"
            href="https://www.swiggy.com/direct/brand/493424?source=swiggy-direct&subSource=google"
            target="_blank"
            className={cx(styles.exploreBtn, styles.swiggyBtn)}
          >
            Swiggy
          </Button>
          <Button
            variant="contained"
            href="https://link.zomato.com/xqzv/rshare?id=80506174305630da"
            target="_blank"
            className={cx(styles.exploreBtn, styles.zomatoBtn)}
          >
            Zomato
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Top;
