import {
  Box,
  Button,
  Typography,
  ButtonGroup,
  Container,
  useMediaQuery,
  Badge
} from '@mui/material';
import styles from './HeaderTabs.module.css';
import { useNavigate } from 'react-router-dom';
import { theme } from '../../ui/theme';
import ShoppingCart from '../../assets/svgs/shopping_cart.svg';
import DeliveryScotter from '../../assets/svgs/DeliveryScooter.svg';
import ChefCap from '../../assets/svgs/ChefCap.svg';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useEffect } from 'react';
import { fetchActiveCartData } from '../../actions/CartActions';
import { ShareLocation } from '@mui/icons-material';
import { fetchPendingDeliveryData } from '../../actions/DeliveryActions';

interface HeaderTabsProps {
  customerId: string;
}

const headerTabsOptions = [
  {
    optionName: 'Delivery',
    svgImg: DeliveryScotter,
    active: true
  },
  {
    optionName: 'Register as Chef',
    svgImg: ChefCap,
    active: false
  }
];

const HeaderTabs = (props: HeaderTabsProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { cartData } = useAppSelector(state => state.cart);
  const { deliveryDetails } = useAppSelector(state => state.delivery);

  useEffect(() => {
    if (props.customerId) {
      dispatch(fetchActiveCartData(props.customerId));
      dispatch(fetchPendingDeliveryData(props.customerId));
    }
  }, [dispatch]);

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Container>
      <Box className={styles.bar}>
        <ButtonGroup>
          {headerTabsOptions.map(option => (
            <Button
              key={option.optionName}
              variant="text"
              disabled={!option.active}
              className={styles.optionMain}
            >
              <Box className={styles.option}>
                <img src={option.svgImg}></img>
                {!isMobile && (
                  <Typography className={option.active ? styles.optionText : styles.inactivetext}>
                    {option.optionName}
                  </Typography>
                )}
              </Box>
            </Button>
          ))}
        </ButtonGroup>
        <div className={styles.orderButtons}>
          {deliveryDetails?.data && (
            <Button onClick={() => navigate('/app/track-order')} className={styles.trackOrderBtn}>
              <ShareLocation sx={{ color: 'rgb(20, 174, 92)' }} />
              {!isMobile && <>Track Order</>}
            </Button>
          )}
          <Button
            variant="contained"
            onClick={() => navigate('/app/checkout')}
            className={styles.cart}
          >
            <Badge badgeContent={cartData?.data?.productList?.length || 0} color="secondary">
              <img src={ShoppingCart}></img>
            </Badge>
            {!isMobile && <span className={styles.cartText}>View Cart</span>}
          </Button>
        </div>
      </Box>
    </Container>
  );
};

export default HeaderTabs;
