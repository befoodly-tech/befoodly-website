import { Paper, Typography } from '@mui/material';
import styles from './Common.module.css';
import { CartItem } from '../../types/CommonType';

interface CartButtonProps {
  cartData: CartItem;
  handleAddToCart: () => void;
  handleRemoveFromCart: () => void;
}

const CartButton = (props: CartButtonProps) => {
  const { cartData, handleAddToCart, handleRemoveFromCart } = props;

  return (
    <Paper className={styles.cartBtn}>
      <Typography className={styles.addition} onClick={handleRemoveFromCart}>
        -
      </Typography>
      <Typography>{cartData.orderCount}</Typography>
      <Typography className={styles.addition} onClick={handleAddToCart}>
        +
      </Typography>
    </Paper>
  );
};

export default CartButton;
