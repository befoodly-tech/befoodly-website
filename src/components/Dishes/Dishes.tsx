import { Box, Container, Grid, Typography } from '@mui/material';
import styles from './Dishes.module.css';
import Dish from './DishCard/Dish';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect, useState } from 'react';
import { fetchActiveMenuDataApi, fetchTrendingProductsApi } from '../../actions/ProductItemActions';
import { ProductData } from '../../types/CommonType';
import { makeYourOwnMeal } from '../../utils/CommonUtils';
import DataLoadingCircle from '../Common/DataLoadingCircle';
import EmptyDataCard from '../Common/EmptyDataCard';
import { NoFood } from '@mui/icons-material';

interface DishesProps {
  bucketUrl: string;
  isTrending?: boolean;
}

const Dishes = (props: DishesProps) => {
  const { bucketUrl, isTrending = false } = props;
  const dispatch = useAppDispatch();
  const { isLoading, productData, trendingProductData } = useAppSelector(state => state.product);
  const [currentProductData, setCurrentProductData] = useState(productData);

  useEffect(() => {
    if (isTrending) {
      dispatch(fetchTrendingProductsApi());
    } else {
      dispatch(fetchActiveMenuDataApi());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isTrending) {
      setCurrentProductData(trendingProductData);
    } else {
      setCurrentProductData(productData);
    }
  }, [productData, trendingProductData]);

  return (
    <Box className={styles.FoodGallery}>
      <Container>
        <Typography className={styles.FoodGalleryHeading}>
          {isTrending ? 'Trending Items' : 'Menu Near You!'}
        </Typography>
        <DataLoadingCircle isLoading={isLoading} />
        <Box className={styles.FoodDisplay}>
          {currentProductData?.data ? (
            <Grid container className={styles.FoodGrid} rowSpacing={2.5} columnSpacing={2}>
              {!isTrending && (
                <Grid key={makeYourOwnMeal.id} item md={4} sm={6} xs={12}>
                  <Dish itemData={makeYourOwnMeal} bucketUrl={bucketUrl} />
                </Grid>
              )}
              {currentProductData?.data?.map((dish: ProductData) => (
                <Grid key={dish.id} item md={4} sm={6} xs={12}>
                  <Dish itemData={dish} bucketUrl={bucketUrl} />
                </Grid>
              ))}
            </Grid>
          ) : (
            <>
              {!isLoading && (
                <EmptyDataCard
                  message="No Item Available For Now!"
                  icon={<NoFood sx={{ color: 'rgb(112, 112, 112)' }} />}
                />
              )}
            </>
          )}
        </Box>
      </Container>
    </Box>
  );
};

export default Dishes;
