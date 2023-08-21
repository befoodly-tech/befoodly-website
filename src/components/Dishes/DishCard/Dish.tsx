import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button
} from '@mui/material';
import FoodPlate from '../../../assets/images/FoodPlate.png';
import Star from '../../../ui/Icon/Star';
import styles from './Dish.module.css';
import Clock from '../../../ui/Icon/Clock';
import Calendar from '../../../ui/Icon/Calendar';
import { CurrencyRupee } from '@mui/icons-material';
import { addToCart, removeFromCart } from '../../../features/cart/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CartButton from '../../Common/CartButton';
import { Cart } from '../../Cart/Cart';

export interface DishProp {
  id: number;
  kitchen: string;
  dishName: string;
  rating: number;
  closeTime: string;
  date: string;
  dishCost: number;
}

const Dish = (props: DishProp) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart);
  const quantity = cartItems.find(x => x.id === props.id)?.quantity;

  function handleAddCart(id: number, dishName: string, price: number): void {
    dispatch(addToCart({ id, dishName, price }));
  }

  const cart: Cart = {
    id: props.id,
    dishName: props.dishName,
    price: props.dishCost,
    quantity: quantity || 0
  };

  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="350" src={FoodPlate}></CardMedia>
      </CardActionArea>
      <CardContent className={styles.CardContentArea}>
        <Box className={styles.CardContentLeft}>
          <Box>
            <Typography className={styles.CardAddress}>{props.kitchen}</Typography>
          </Box>
          <Box className={styles.CardItem}>
            <Typography className={styles.CardFood}>{props.dishName}</Typography>
            <Typography className={styles.CardRating}>
              <Star />
              {props.rating} (10)
            </Typography>
          </Box>
          <Box className={styles.CardTiming}>
            <Typography className={styles.CardClock}>
              <Clock />
              Accepting Till {props.closeTime}
            </Typography>
            <Typography className={styles.CardClock}>
              <Calendar />
              {props.date}
            </Typography>
          </Box>
        </Box>
        <Box className={styles.CardContentRight}>
          <Box className={styles.CardValue}>
            <Typography className={styles.CardPrice}>
              <CurrencyRupee />
              {props.dishCost}Rs
            </Typography>
            <Typography className={styles.CardAverage}>avg. meal price</Typography>
          </Box>
          {quantity ? (
            <CartButton {...cart} />
          ) : (
            <Button
              onClick={() => handleAddCart(props.id, props.dishName, props.dishCost)}
              className={styles.CardButton}
            >
              Add to Cart
            </Button>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

export default Dish;
