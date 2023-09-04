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
  convertBigNumbers,
  formatStringToDate,
  formatStringToTime
} from '../../../utils/CommonUtils';
import DetailModal from '../../Modal/DetailModal/DetailModal';
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
        <CardContent className={styles.cardContentArea}>
          {isMobile ? (
            <Box className={styles.cardContentLeft}>
              <Box>
                <Typography noWrap className={styles.cardFood}>
                  {itemData?.title}
                </Typography>
                <Typography className={styles.cardAddress}>
                  {itemData?.providerData.providerName}
                </Typography>
              </Box>
              <Box>
                <Typography className={styles.unitsLeft}>
                  {itemData?.orderNo} units left!
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <img src={Star}></img>
                <Typography className={styles.cardRating}>
                  {Math.abs(itemData?.feedback.rating).toFixed(1)} (
                  {convertBigNumbers(itemData?.feedback?.reviews)})
                </Typography>
              </Box>
              <Box className={styles.cardTiming}>
                <Box className={styles.timing}>
                  <img src={Clock}></img>
                  <Typography className={styles.cardClock}>
                    Accepting Till {itemData?.acceptingTime}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ) : (
            <Box className={styles.cardContentLeft}>
              <Box>
                <Typography className={styles.cardAddress}>
                  {itemData?.providerData?.providerName}
                </Typography>
              </Box>
              <Box className={styles.cardItem}>
                <Typography className={styles.cardFood}>{itemData?.title}</Typography>
                <Typography className={styles.cardRating}>
                  <img src={Star}></img>
                  {Math.abs(itemData?.feedback.rating).toFixed(1)} (
                  {convertBigNumbers(itemData?.feedback?.reviews)})
                </Typography>
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
          )}
          <Box className={styles.cardContentRight}>
            <Box className={styles.cardValue}>
              <Typography className={styles.cardPrice}>
                <CurrencyRupee />
                {itemData?.price}
              </Typography>
            </Box>
            {quantity ? (
              <CartButton {...cart} />
            ) : (
              <Button
                onClick={() => handleAddCart(itemData?.id, itemData?.title, itemData?.price)}
                className={styles.cardButton}
              >
                {isMobile ? '+Add' : 'Add to cart'}
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
