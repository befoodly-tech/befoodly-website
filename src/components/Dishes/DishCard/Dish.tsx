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
import { theme } from '../../../ui/theme';

export interface DishProp {
  itemData: ProductData;
  bucketUrl: string;
}

const Dish = (props: DishProp) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(state => state.cart);
  const { itemData, bucketUrl } = props;
  const quantity = cartItems.find(x => x.id === itemData?.id)?.quantity;
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
    <>
      <Card className={styles.dishCard}>
        <CardActionArea onClick={() => setModalOpen(true)}>
          <CardMedia
            component="img"
            className={styles.cardMedia}
            src={combineTwoStrings(bucketUrl, itemData?.imgUrl)}
          ></CardMedia>
        </CardActionArea>
        <CardContent className={styles.CardContentArea}>
          {isMobile ? (
            <Box className={styles.CardContentLeft}>
              <Box>
                <Typography noWrap className={styles.CardFood}>
                  {itemData?.title}
                </Typography>
                <Typography className={styles.CardAddress}>
                  {itemData?.providerData.providerName}
                </Typography>
              </Box>
              <Box>
                <Typography className={styles.UnitsLeft}>
                  {itemData?.orderNo} units left!
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <img src={Star}></img>
                <Typography className={styles.CardRating}>
                  {itemData?.feedback.rating} (10)
                </Typography>
              </Box>
              <Box className={styles.CardTiming}>
                <Box className={styles.Timing}>
                  <img src={Clock}></img>
                  <Typography className={styles.CardClock}>
                    Accepting Till {itemData?.acceptingTime}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className={styles.CardContentLeft}>
              <Box>
                <Typography className={styles.CardAddress}>
                  {itemData?.providerData?.providerName}
                </Typography>
              </Box>
              <Box className={styles.CardItem}>
                <Typography className={styles.CardFood}>{itemData?.title}</Typography>
                <Typography className={styles.CardRating}>
                  <img src={Star}></img>
                  {itemData?.feedback.rating} (5)
                </Typography>
              </Box>
              <Box>
                <Typography className={styles.UnitsLeft}>{itemData.orderNo} units left!</Typography>
              </Box>
              <Box className={styles.CardTiming}>
                <Box className={styles.Timing}>
                  <img src={Clock}></img>
                  <Typography className={styles.CardClock}>
                    Accepting Till {formatStringToTime(itemData?.acceptingTime)}
                  </Typography>
                </Box>
                <Box className={styles.Timing}>
                  <img src={Calendar}></img>
                  <Typography className={styles.CardClock}>
                    {formatStringToDate(itemData?.acceptingTime)}
                  </Typography>
                </Box>
              </Box>
            </Box>
          )}
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
                {isMobile ? 'Add' : 'Add to cart'}
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
    </>
  );
};

export default Dish;
