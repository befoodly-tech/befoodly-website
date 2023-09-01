import { Box, Button, Typography, ButtonGroup, Container, useMediaQuery } from '@mui/material';
import styles from './HeaderTabs.module.css';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../ui/theme';
import ShoppingCart from '../../assets/svgs/shopping_cart.svg';
import DeliveryScotter from '../../assets/svgs/DeliveryScooter.svg';

interface HeaderTabsProps {
  customerId: string;
}

const headerTabsOptions = [
  {
    optionName: 'Delivery',
    svgImg: DeliveryScotter,
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
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Container>
      <Box className={styles.bar}>
        <ButtonGroup>
          {headerTabsOptions.map(option => (
            <Button key={option.optionName} className={styles.optionMain}>
              <Box className={styles.option}>
                <img src={option.svgImg}></img>
                {isMobile ? (
                  ''
                ) : (
                  <Typography className={styles.optionText}>{option.optionName}</Typography>
                )}
              </Box>
              <Box className={styles.divider} />
            </Button>
          ))}
        </ButtonGroup>
        <Button variant="contained" onClick={() => navigate('/checkout')} className={styles.cart}>
          <img src={ShoppingCart}></img>
          {isMobile ? '' : 'View Cart'}
        </Button>
      </Box>
    </Container>
  );
};

export default HeaderTabs;
