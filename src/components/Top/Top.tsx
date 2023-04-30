import { Button, Typography } from '@mui/material';
import { Box } from '@mui/system';
import styles from './Top.module.css';

const Top = () => {
  return (
    <Box className={styles.topImage}>
      <Box className={styles.intro}>
        <Typography className={styles.headingMain}>Eat Homely, Healthy Food</Typography>
        <Typography className={styles.detailsMain}>
          Join us in our love for homemade food & drink
        </Typography>
        <Button variant="contained" href="/comingsoon" className={styles.exploreBtn}>
          Explore Menu
        </Button>
      </Box>
    </Box>
  );
};

export default Top;
