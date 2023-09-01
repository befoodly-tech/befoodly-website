import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material';
import Star from '../../../ui/Icon/Star';
import styles from './Dish.module.css';
import Clock from '../../../ui/Icon/Clock';
import Calendar from '../../../ui/Icon/Calendar';
import { CurrencyRupee } from '@mui/icons-material';
import { addToCart } from '../../../features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CartButton from '../../Common/CartButton';
import { Cart } from '../../Cart/Cart';
import { ProductData } from '../../../types/CommonType';
import {
  combineTwoStrings,
  formatStringToDate,
  formatStringToTime
} from '../../../utils/CommonUtils';
import DishModal from '../../Modal/DishModal/DishModal';
import { useState } from 'react';

export interface DishProp {
  itemData: ProductData;
  bucketUrl: string;
}

const Dish = (props: DishProp) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart);
  const { itemData, bucketUrl } = props;
  const quantity = cartItems.find(x => x.id === itemData?.id)?.quantity;

  const [modalOpen, setModalOpen] = useState(false);

  function handleModalClose() {
    setModalOpen(false);
  }

  function handleAddCart(id: number, dishName: string, price: number): void {
    dispatch(addToCart({ id, dishName, price }));
  }

  const cart: Cart = {
    id: itemData?.id,
    dishName: itemData?.title,
    price: itemData?.price,
    quantity: quantity || 0
  };

  return (
    <Card className={styles.dishCard}>
      <CardActionArea onClick={() => setModalOpen(true)}>
        <CardMedia
          component="img"
          className={styles.cardMedia}
          src={combineTwoStrings(bucketUrl, itemData?.imgUrl)}
        ></CardMedia>
      </CardActionArea>
      <CardContent className={styles.CardContentArea}>
        <Box className={styles.CardContentLeft}>
          <Box>
            <Typography className={styles.CardAddress}>
              {itemData?.providerData?.providerName}
            </Typography>
          </Box>
          <Box className={styles.CardItem}>
            <Typography className={styles.CardFood}>{itemData?.title}</Typography>
            <Typography className={styles.CardRating}>
              <Star />
              {itemData?.feedback?.rating} (5)
            </Typography>
          </Box>
          <Box className={styles.CardTiming}>
            <Typography className={styles.CardClock}>
              <Clock />
              Accepting Till {formatStringToTime(itemData?.acceptingTime)}
            </Typography>
            <Typography className={styles.CardClock}>
              <Calendar />
              {formatStringToDate(itemData?.acceptingTime)}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.CardContentRight}>
          <Box className={styles.CardValue}>
            <Typography className={styles.CardPrice}>
              <CurrencyRupee />
              {itemData?.price}
            </Typography>
          </Box>
          {quantity ? (
            <CartButton {...cart} />
          ) : (
            <Button
              onClick={() => handleAddCart(itemData?.id, itemData?.title, itemData?.price)}
              className={styles.CardButton}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </CardContent>
      <DishModal
        dishName={itemData?.title}
        dishDescription={itemData?.description}
        dishCategory={'Veg'}
        open={modalOpen}
        onClose={handleModalClose}
      />
    </Card>
  );
};

export default Dish;
