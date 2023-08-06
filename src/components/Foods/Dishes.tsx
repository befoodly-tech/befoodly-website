import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './Dishes.module.css';
import FoodCard from './FoodCard/Dish';

const Dishes = () => {
  return (
    <Box className={styles.FoodGallery}>
      <Container>
        <Box>
          <Typography className={styles.FoodGalleryHeading}>Popular near you</Typography>
        </Box>
        <Box className={styles.FoodDisplay}>
          <Grid container className={styles.FoodGrid} rowSpacing={2.5} columnSpacing={2}>
            <Grid item xs={4}>
              <FoodCard />
            </Grid>
            <Grid item xs={4}>
              <FoodCard />
            </Grid>
            <Grid item xs={4}>
              <FoodCard />
            </Grid>
            <Grid item xs={4}>
              <FoodCard />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Dishes;
