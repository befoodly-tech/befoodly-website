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
import Separator from '../Common/Separator';

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
        <Button
          variant="contained"
          onClick={() => navigate('/app/checkout')}
          className={styles.cart}
        >
          <Badge badgeContent={4} color="secondary">
            <img src={ShoppingCart}></img>
          </Badge>
          {!isMobile && <span className={styles.cartText}>View Cart</span>}
        </Button>
      </Box>
    </Container>
  );
};

export default HeaderTabs;
