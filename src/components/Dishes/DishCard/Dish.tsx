import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Button,
  useMediaQuery
} from '@mui/material';
import Star from '../../../assets/svgs/star.svg';
import styles from './Dish.module.css';
import Clock from '../../../assets/svgs/clock.svg';
import Calendar from '../../../assets/svgs/Calendar.svg';
import { CurrencyRupee } from '@mui/icons-material';
import { addToCart, removeFromCart } from '../../../features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CartButton from '../../Common/CartButton';
import { CartItem, ProductData } from '../../../types/CommonType';
import {
  combineTwoStrings,
  convertBigNumbers,
  formatStringToDate,
  formatStringToTime
} from '../../../utils/CommonUtils';
import DetailModal from '../../Modal/DetailModal/DetailModal';
import { useState } from 'react';
import { theme } from '../../../ui/theme';
import { addItemToCart, removeItemFromCart } from '../../../actions/CartActions';
import { getCookie } from '../../../utils/CookieHelper';

export interface DishProp {
  itemData: ProductData;
  bucketUrl: string;
}

const Dish = (props: DishProp) => {
  const { itemData, bucketUrl } = props;
  const [modalOpen, setModalOpen] = useState(false);
  const dispatch = useAppDispatch();
  const customerId = getCookie('customerId');
  const { cartData } = useAppSelector(state => state.cart);

  const quantity = cartData?.data?.productList?.find(
    (x: CartItem) => x.productId === itemData?.id
  )?.orderCount;

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  function handleModalClose() {
    setModalOpen(false);
  }

  const handleAddToCart = () => {
    dispatch(addToCart(cartItem));
    if (customerId) {
      dispatch(
        addItemToCart({
          customerId: customerId,
          body: {
            productId: cartItem.productId,
            productName: cartItem.productName,
            cost: cartItem.cost
          }
        })
      );
    }
  };

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(cartItem));
    if (customerId) {
      dispatch(
        removeItemFromCart({
          customerId: customerId,
          body: {
            productId: cartItem.productId,
            productName: cartItem.productName,
            cost: cartItem.cost
          }
        })
      );
    }
  };

  const cartItem: CartItem = {
    productId: itemData?.id,
    productName: itemData?.title,
    cost: itemData?.price,
    orderCount: quantity || 0
  };

  return (
    <>
      <Card className={styles.dishCard}>
        <CardActionArea onClick={() => setModalOpen(true)}>
          <CardMedia
            component="img"
            className={styles.cardMedia}
            src={combineTwoStrings(bucketUrl, itemData?.imgUrl)}
          ></CardMedia>
        </CardActionArea>
        <CardContent className={styles.cardContentArea}>
          <Box className={styles.cardContentLeft}>
            <Box>
              <Typography className={styles.cardAddress}>
                {itemData?.providerData?.providerName}
              </Typography>
            </Box>
            <Box className={styles.cardItem}>
              <Typography className={styles.cardFood}>{itemData?.title}</Typography>
              {!isMobile && (
                <Typography className={styles.cardRating}>
                  <img src={Star}></img>
                  {Math.abs(itemData?.feedback.rating).toFixed(1)} (
                  {convertBigNumbers(itemData?.feedback?.reviews)})
                </Typography>
              )}
            </Box>
            <Box>
              <Typography className={styles.unitsLeft}>{itemData.orderNo} units left!</Typography>
            </Box>
            <Box className={styles.cardTiming}>
              <Box className={styles.timing}>
                <img src={Clock}></img>
                <Typography className={styles.cardClock}>
                  Accepting Till {formatStringToTime(itemData?.acceptingTime)}
                </Typography>
              </Box>
              <Box className={styles.timing}>
                <img src={Calendar}></img>
                <Typography className={styles.cardClock}>
                  {formatStringToDate(itemData?.acceptingTime)}
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box className={styles.cardContentRight}>
            {isMobile && (
              <Typography className={styles.cardRating}>
                <img src={Star}></img>
                {Math.abs(itemData?.feedback.rating).toFixed(1)} (
                {convertBigNumbers(itemData?.feedback?.reviews)})
              </Typography>
            )}
            <Box className={styles.cardValue}>
              <Typography className={styles.cardPrice}>₹ {itemData?.price}</Typography>
            </Box>
            {quantity ? (
              <CartButton
                cartData={cartItem}
                handleAddToCart={handleAddToCart}
                handleRemoveFromCart={handleRemoveFromCart}
              />
            ) : (
              <Button onClick={handleAddToCart} className={styles.cardButton}>
                {isMobile ? '+ Add' : 'Add to cart'}
              </Button>
            )}
          </Box>
        </CardContent>
        <DetailModal
          name={itemData?.title}
          description={itemData?.description}
          category={'Veg'}
          tags={[`${itemData?.orderNo} units left!`]}
          open={modalOpen}
          onClose={handleModalClose}
        />
      </Card>
    </>
  );
};

export default Dish;
