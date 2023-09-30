import { Dialog, Button, Card, CardContent, CardHeader, Typography, Box } from '@mui/material';
import styles from './OrderSummary.module.css';
import { CartItem, OrderDataType } from '../../../types/CommonType';
import { addressInLine, formatStringToDateTime } from '../../../utils/CommonUtils';
import { useState } from 'react';
import CartTotal from '../../Cart/CartTotal/CartTotal';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { fetchOrderItemById } from '../../../actions/CartActions';
import { locations } from '../../NavbarApp/NavbarApp';

interface OrderSummaryType {
  orderData: OrderDataType;
}

const OrderSummary = (props: OrderSummaryType) => {
  const { orderData } = props;
  const [openItemList, setOpenItemList] = useState(false);
  const { orderItems } = useAppSelector(state => state.cart);
  const dispatch = useAppDispatch();

  const handleSeeOrderItems = () => {
    setOpenItemList(true);
    dispatch(fetchOrderItemById(orderData.orderId));
  };

  return (
    <div className={styles.orderSummary}>
      <Card className={styles.deliveryDetails}>
        <CardHeader
          title={'Order Details'}
          subheader={formatStringToDateTime(orderData?.orderTime)}
        />
        <CardContent className={styles.orderContent}>
          <Typography className={styles.dataPoint}>
            Order Id: <span>{orderData?.orderId}</span>
          </Typography>
          <Typography className={styles.dataPoint}>
            Total Amount: <span>₹ {orderData?.finalCost}</span>
          </Typography>
          <Typography className={styles.dataPoint}>
            Address: <span>{addressInLine(orderData?.deliveryAddress)}</span>
          </Typography>
          <Button className={styles.orderItemDetail} onClick={handleSeeOrderItems}>
            See Order Items
          </Button>
        </CardContent>
      </Card>
      <Card className={styles.deliveryDetails}>
        <CardHeader title={'Delivery Details'} />
        <CardContent className={styles.orderContent}>
          <Typography className={styles.dataPoint}>
            Delivery Buddy: <span>{orderData?.deliveryManData?.name || 'Searching...'}</span>
          </Typography>
          <Typography className={styles.dataPoint}>
            Estimated Time: <span>{formatStringToDateTime(orderData?.deliveryTime)}</span>
          </Typography>
          <Typography className={styles.dataPoint}>
            Contact: <span>{orderData?.deliveryManData?.phoneNumber}</span>
          </Typography>
          <Typography className={styles.dataPoint}>
            Delivery From: <span>BeFoodly, {locations[0]?.title}</span>
          </Typography>
        </CardContent>
      </Card>
      <Dialog open={openItemList} onClose={() => setOpenItemList(false)}>
        <Box className={styles.orderHistoryDialog}>
          {orderItems?.data?.productList?.map((orderItem: CartItem) => (
            <Typography key={orderItem.productId} className={styles.orderItemList}>
              {orderItem?.productName}
              <span>{orderItem.orderCount} Qty</span>
              <span>₹ {orderItem.cost}</span>
            </Typography>
          ))}
          <CartTotal
            totalCost={orderItems?.data?.totalCost}
            discountCost={orderData?.discountCost}
            deliveryCost={orderData?.deliveryCost}
          />
        </Box>
      </Dialog>
    </div>
  );
};

export default OrderSummary;
