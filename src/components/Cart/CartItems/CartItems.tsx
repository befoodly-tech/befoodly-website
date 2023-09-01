import { Box, Button, List, ListItem, Paper, Typography } from '@mui/material';
import { Cart } from '../Cart';
import styles from './CartItems.module.css';
import { useAppDispatch } from '../../../store/hooks';
import { addToCart, removeFromCart } from '../../../features/cartSlice';
import CartButton from '../../Common/CartButton';

interface CartItemsProp {
  cartItems: Cart[];
}

const CartItems = (props: CartItemsProp) => {
  return (
    <List className={styles.cartList}>
      {props.cartItems.map(cart => (
        <ListItem key={cart.id} divider className={styles.cartListItem}>
          <Box>{cart.dishName}</Box>
          <CartButton {...cart} />
          <Typography>{cart.price * cart.quantity} Rs</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default CartItems;
