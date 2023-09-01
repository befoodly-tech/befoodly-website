import { Paper, Typography } from '@mui/material';
import { useAppDispatch } from '../../store/hooks';
import { addToCart, removeFromCart } from '../../features/cartSlice';
import { Cart } from '../Cart/Cart';
import styles from './Common.module.css';

const CartButton = (props: Cart) => {
  const dispatch = useAppDispatch();
  return (
    <Paper className={styles.cartBtn}>
      <Typography className={styles.addition} onClick={() => dispatch(removeFromCart(props.id))}>
        -
      </Typography>
      <Typography>{props.quantity}</Typography>
      <Typography
        className={styles.addition}
        onClick={() =>
          dispatch(addToCart({ id: props.id, dishName: props.dishName, price: props.price }))
        }
      >
        +
      </Typography>
    </Paper>
  );
};

export default CartButton;
