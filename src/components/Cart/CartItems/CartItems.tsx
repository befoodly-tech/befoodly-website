import { Box, Grid } from '@mui/material';
import styles from './CartItems.module.css';
import CartButton from '../../Common/CartButton';
import { CartItem } from '../../../types/CommonType';

interface CartItemsProp {
  cartItems: CartItem[];
  handleAddToCart: (data: CartItem) => void;
  handleRemoveFromCart: (data: CartItem) => void;
}

const CartItems = (props: CartItemsProp) => {
  const { cartItems, handleAddToCart, handleRemoveFromCart } = props;

  return (
    <Box className={styles.cartList}>
      {cartItems?.map(cartItem => (
        <Grid container spacing={2} key={cartItem.productId} className={styles.cartListItem}>
          <Grid item xs={6}>
            {cartItem.productName}
          </Grid>
          <Grid item xs={3}>
            <CartButton
              cartData={cartItem}
              handleAddToCart={() => handleAddToCart(cartItem)}
              handleRemoveFromCart={() => handleRemoveFromCart(cartItem)}
            />
          </Grid>
          <Grid item xs={3} textAlign={'right'}>
            ₹ {cartItem.cost * cartItem.orderCount}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
};

export default CartItems;
