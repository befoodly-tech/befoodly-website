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
import { addToCart, removeFromCart } from '../../../features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CartButton from '../../Common/CartButton';
import { Cart } from '../../Cart/Cart';
import { ProductData } from '../../../types/CommonType';
import {
  combineTwoStrings,
  formatStringToDate,
  formatStringToTime
} from '../../../utils/CommonUtils';

export interface DishProp {
  itemData: ProductData;
  bucketUrl: string;
}

const Dish = (props: DishProp) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart);
  const { itemData, bucketUrl } = props;
  const quantity = cartItems.find(x => x.id === itemData?.id)?.quantity;

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
    <Card>
      <CardActionArea>
        <CardMedia
          component="img"
          height="350"
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
    </Card>
  );
};

export default Dish;
