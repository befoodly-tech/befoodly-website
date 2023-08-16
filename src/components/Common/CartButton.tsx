import { Button, Paper, Typography } from '@mui/material';
import { useAppDispatch } from '../../app/hooks';
import { addToCart, removeFromCart } from '../../features/cart/cartSlice';
import { Cart } from '../Cart/Cart';
import styles from './Common.module.css';

const CartButton = (props: Cart) => {
  const dispatch = useAppDispatch();
  return (
    <Paper className={styles.cartBtn}>
      <Button color="secondary" onClick={() => dispatch(removeFromCart(props.id))}>
        -
      </Button>
      <Typography>{props.quantity}</Typography>
      <Button
        color="secondary"
        onClick={() =>
          dispatch(addToCart({ id: props.id, dishName: props.dishName, price: props.price }))
        }
      >
        +
      </Button>
    </Paper>
  );
};

export default CartButton;
