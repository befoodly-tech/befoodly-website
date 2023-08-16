import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { useAppSelector } from '../../app/hooks';
import CartItems from './CartItems/CartItems';
import styles from './Cart.module.css';

export interface Cart {
  id: number;
  dishName: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const cartItems = useAppSelector(state => state.cart);
  return (
    <Container className={styles.cartContainer}>
      <Typography className={styles.cart}>Cart</Typography>
      <Typography className={styles.items}>Items</Typography>
      <CartItems cartItems={cartItems} />
      {cartItems.length > 0 ? (
        <Button className={styles.checkoutBtn}>Proceed to pay</Button>
      ) : (
        <Typography textAlign={'center'} sx={{ fontSize: '20px' }}>
          Cart is empty
        </Typography>
      )}
    </Container>
  );
};

export default Cart;
