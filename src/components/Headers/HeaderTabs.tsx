import { Box, Button, Typography, ButtonGroup, Container } from '@mui/material';
import styles from './HeaderTabs.module.css';
import SvgDeliveryScooter from '../../ui/Icon/DeliveryScooter';
import SvgShoppingCart from '../../ui/Icon/ShoppingCart';
import { useNavigate } from 'react-router-dom';

interface HeaderTabsProps {
  customerId: string;
}

const headerTabsOptions = [
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

const HeaderTabs = (props: HeaderTabsProps) => {
  const navigate = useNavigate();
  return (
    <Container>
      <Box className={styles.bar}>
        <ButtonGroup>
          {headerTabsOptions.map(option => (
            <Button key={option.optionName} className={styles.optionMain}>
              <Box className={styles.option}>
                {option.svgImg}
                <Typography className={styles.optionText}>{option.optionName}</Typography>
              </Box>
              <Box className={styles.divider} />
            </Button>
          ))}
        </ButtonGroup>
        <Button
          variant="contained"
          onClick={() => navigate('/checkout')}
          startIcon={<SvgShoppingCart />}
          className={styles.cart}
        >
          View Cart
        </Button>
      </Box>
    </Container>
  );
};

export default HeaderTabs;
