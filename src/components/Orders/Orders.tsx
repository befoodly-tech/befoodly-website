import { OrderDataType } from '../../types/CommonType';
import OrderStatusStepper from './OrderStatusStepper/OrderStatusStepper';
import OrderSummary from './OrderSummary/OrderSummary';
import styles from './Orders.module.css';

interface OrderProps {
  orderData: OrderDataType;
}

const Orders = (props: OrderProps) => {
  const { orderData } = props;

  return (
    <div className={styles.orderContainer}>
      <OrderStatusStepper orderStatus={orderData.status} />
      <OrderSummary orderData={orderData} />
    </div>
  );
};

export default Orders;
