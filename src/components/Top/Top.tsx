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
          Join us in our love for homemade food & drink
        </Typography>
        <div className={styles.homeButton}>
          <Button variant="contained" href="/ourkitchen" className={styles.exploreBtn}>
            Visit Our Kitchen
          </Button>
          <Button
            variant="contained"
            href="/comingsoon"
            className={cx(styles.exploreBtn, styles.kitchenBtn)}
          >
            Explore Menu
          </Button>
        </div>
      </Box>
    </Box>
  );
};

export default Top;
