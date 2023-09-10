import { Button, Typography } from '@mui/material';
import styles from './CartTotal.module.css';

interface CartTotalProps {
  totalCost: number;
  discountCost: number;
  deliveryCost?: number;
}

const CartTotal = (props: CartTotalProps) => {
  const { totalCost, discountCost, deliveryCost = 20 } = props;

  return (
    <div className={styles.cartTotalContainer}>
      <hr />
      {/* <div className={styles.deliveryTime}>
        Select Delivery Time
        <br />
        {deliverySlot.map((slot: DeliveryTime) => {
          return (
            <Button variant="outlined" color="info" className={styles.timeButtons} key={slot.title}>
              {slot.timeInterval}
            </Button>
          );
        })}
      </div> */}
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
      <Button className={styles.checkoutBtn}>Place Order</Button>
    </div>
  );
};

export default CartTotal;
