import { Button, Typography } from '@mui/material';
import styles from './CartTotal.module.css';

interface CartTotalProps {
  totalCost: number;
  discountCost: number;
  deliveryCost: number;
  handlePlaceOrder?: () => void;
}

const CartTotal = (props: CartTotalProps) => {
  const { totalCost, discountCost, deliveryCost, handlePlaceOrder } = props;

  return (
    <div className={styles.cartTotalContainer}>
      <hr />
      <Typography className={styles.dataField}>
        <span className={styles.dataTitle}>Total:</span>
        <span>₹ {totalCost}</span>
      </Typography>
      {discountCost > 0 && (
        <Typography className={styles.dataField}>
          <span className={styles.dataTitle}>Discount:</span>
          <span className={styles.dataValue}>- ₹ {discountCost}</span>
        </Typography>
      )}
      <Typography className={styles.dataField}>
        <span className={styles.dataTitle}>Delivery Charge:</span>
        <span>+ ₹ {deliveryCost}</span>
      </Typography>
      <div className={styles.dataField}>
        <hr className={styles.hrLine} />
      </div>
      <Typography className={styles.dataField}>
        <span className={styles.dataFinalTitle}>Final Cost:</span>
        <span>₹ {totalCost - discountCost + deliveryCost}</span>
      </Typography>

      {handlePlaceOrder && (
        <Button className={styles.checkoutBtn} onClick={handlePlaceOrder}>
          Place Order
        </Button>
      )}
    </div>
  );
};

export default CartTotal;
