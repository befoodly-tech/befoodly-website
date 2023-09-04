import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './Dishes.module.css';
import Dish from './DishCard/Dish';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchActiveMenuDataApi } from '../../actions/ProductItemActions';
import LoadingCircle from '../Common/LoadingCircle';
import { ProductData } from '../../types/CommonType';
import { makeYourOwnMeal } from '../../utils/CommonUtils';

interface DishesProps {
  bucketUrl: string;
}

const Dishes = (props: DishesProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, productData } = useAppSelector(state => state.product);

  useEffect(() => {
    dispatch(fetchActiveMenuDataApi());
  }, []);

  return (
    <Box className={styles.FoodGallery}>
      {isLoading && <LoadingCircle />}
      <Container>
        <Box>
          <Typography className={styles.FoodGalleryHeading}>Menu Near You!</Typography>
        </Box>
        <Box className={styles.FoodDisplay}>
          <Grid container className={styles.FoodGrid} rowSpacing={2.5} columnSpacing={2}>
            <Grid key={makeYourOwnMeal.id} item md={4} sm={6} xs={12}>
              <Dish itemData={makeYourOwnMeal} bucketUrl={props.bucketUrl} />
            </Grid>
            {productData?.data?.map((dish: ProductData) => (
              <Grid key={dish.id} item md={4} sm={6} xs={12}>
                <Dish itemData={dish} bucketUrl={props.bucketUrl} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Dishes;
