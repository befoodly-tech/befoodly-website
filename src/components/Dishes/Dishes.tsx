import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './Dishes.module.css';
import Dish from './DishCard/Dish';
import { DishProp } from './DishCard/Dish';

const dishes: DishProp[] = [
  {
    id: 1,
    kitchen: 'Befoodly Kitchen',
    dishName: 'Rajma Chawal',
    rating: 4.3,
    closeTime: '11:00 AM',
    date: '29 May',
    dishCost: 129
  },
  {
    id: 2,
    kitchen: 'Befoodly Kitchen',
    dishName: 'Rajma Chawal',
    rating: 4.3,
    closeTime: '11:00 AM',
    date: '29 May',
    dishCost: 129
  },
  {
    id: 3,
    kitchen: 'Befoodly Kitchen',
    dishName: 'Rajma Chawal',
    rating: 4.3,
    closeTime: '11:00 AM',
    date: '29 May',
    dishCost: 129
  },
  {
    id: 4,
    kitchen: 'Befoodly Kitchen',
    dishName: 'Rajma Chawal',
    rating: 4.3,
    closeTime: '11:00 AM',
    date: '29 May',
    dishCost: 129
  }
];

const Dishes = () => {
  return (
    <Box className={styles.FoodGallery}>
      <Container>
        <Box>
          <Typography className={styles.FoodGalleryHeading}>Popular near you</Typography>
        </Box>
        <Box className={styles.FoodDisplay}>
          <Grid container className={styles.FoodGrid} rowSpacing={2.5} columnSpacing={2}>
            {dishes.map(dish => (
              <Grid key={dish.id} item xs={4}>
                <Dish {...dish} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Dishes;
