import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './Top.module.css';
import FoodBackground from '../../assets/images/home-made-food.jpg';

const Top = () => {
  return (
    <Box>
      <Box
        component="img"
        src={FoodBackground}
        alt="Dish on display"
        className={styles.topImage}
      ></Box>
      <Box className={styles.intro}>
        <Typography variant="h2" className={styles.main}>
          Eat Homely, Healthy Food
        </Typography>
        <Typography variant="h5" className={styles.main}>
          Join us in our love for homemade food and drink
        </Typography>
        <Button variant="contained" href="/comingsoon" className={styles.exploreBtn}>
          Explore Menu
        </Button>
      </Box>
      <Box className={styles.base}>
        <Typography className={styles.baseText} variant="h3">
          Hello There!
        </Typography>
      </Box>
    </Box>
  );
};

export default Top;
