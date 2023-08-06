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

const Dish = () => {
  return (
    <Card>
      <CardActionArea>
        <CardMedia component="img" height="350" src={FoodPlate}></CardMedia>
      </CardActionArea>
      <CardContent className={styles.CardContentArea}>
        <Box className={styles.CardContentLeft}>
          <Box>
            <Typography className={styles.CardAddress}>Befoodly Kitchen</Typography>
          </Box>
          <Box className={styles.CardItem}>
            <Typography className={styles.CardFood}>Rajma Chawal</Typography>
            <Typography className={styles.CardRating}>
              <Star />
              4.3 (10)
            </Typography>
          </Box>
          <Box className={styles.CardTiming}>
            <Typography className={styles.CardClock}>
              <Clock />
              Accepting Till 11:00 AM
            </Typography>
            <Typography className={styles.CardClock}>
              <Calendar />
              29 May
            </Typography>
          </Box>
        </Box>
        <Box className={styles.CardContentRight}>
          <Box className={styles.CardValue}>
            <Typography className={styles.CardPrice}>
              <CurrencyRupee />
              129Rs
            </Typography>
            <Typography className={styles.CardAverage}>avg. meal price</Typography>
          </Box>
          <Button className={styles.CardButton}>Add to Cart</Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default Dish;
