import { Box, Button, List, ListItem, Paper, Typography } from '@mui/material';
import { Cart } from '../Cart';
import styles from './CartItems.module.css';
import { useAppDispatch } from '../../../app/hooks';
import { addToCart, removeFromCart } from '../../../features/cart/cartSlice';
import CartButton from '../../Common/CartButton';

interface CartItemsProp {
  cartItems: Cart[];
}

const CartItems = (props: CartItemsProp) => {
  const dispact = useAppDispatch();
  return (
    <List className={styles.cartList}>
      {props.cartItems.map(cart => (
        <ListItem key={cart.id} divider className={styles.cartListItem}>
          <Box>{cart.dishName}</Box>
          <CartButton {...cart} />
          <Typography>{cart.price * cart.quantity}</Typography>
        </ListItem>
      ))}
    </List>
  );
};

export default CartItems;
