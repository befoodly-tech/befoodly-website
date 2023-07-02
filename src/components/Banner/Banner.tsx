import { Container, Box, Button, Typography } from '@mui/material';
import styles from './Banner.module.css';
import SvgDeliveryScooter from '../../ui/Icon/DeliveryScooter';
import SvgChefCap from '../../ui/Icon/ChefCap';

const Banner = () => {
  return (
    <Box className={styles.bar}>
      <Box>
        <Box className={styles.delivery}>
          <Button startIcon={<SvgDeliveryScooter />}>
            <Typography className={styles.deliveryText}>Delivery</Typography>
          </Button>
          <Box className={styles.divider} />
        </Box>
        <Box className={styles.bookCook}>
          <Button startIcon={<SvgChefCap />}>
            <Typography className={styles.bookCookText}>Book a Cook</Typography>
          </Button>
        </Box>
      </Box>
      <Button variant="contained" className={styles.cart}>
        View Cart
      </Button>
    </Box>
  );
};

export default Banner;
