import { Box, Button, Typography, ButtonGroup } from '@mui/material';
import styles from './Banner.module.css';
import SvgDeliveryScooter from '../../ui/Icon/DeliveryScooter';
//import SvgChefCap from '../../ui/Icon/ChefCap';
import SvgShoppingCart from '../../ui/Icon/ShoppingCart';

const bannerOptions = [
  {
    optionName: 'Delivery',
    svgImg: <SvgDeliveryScooter />,
    active: true
  }
  // {
  //   optionName: 'Book a Cook',
  //   svgImg: <SvgChefCap circleFill="#F8F8F8" logoFill="#757575" />,
  //   active: false
  // }
];

const Banner = () => {
  return (
    <Box className={styles.bar}>
      <ButtonGroup>
        {bannerOptions.map(option => (
          <Button key={option.optionName} className={styles.optionMain}>
            <Box className={styles.option}>
              {option.svgImg}
              <Typography className={styles.optionText}>{option.optionName}</Typography>
            </Box>
            <Box className={styles.divider} />
          </Button>
        ))}
      </ButtonGroup>
      <Button variant="contained" startIcon={<SvgShoppingCart />} className={styles.cart}>
        View Cart
      </Button>
    </Box>
  );
};

export default Banner;
