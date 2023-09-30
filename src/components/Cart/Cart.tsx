import { Button, Container, MenuItem, TextField, Typography, useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import CartItems from './CartItems/CartItems';
import styles from './Cart.module.css';
import {
  addItemToCart,
  confirmOrderForDelivery,
  fetchActiveCartData,
  removeItemFromCart
} from '../../actions/CartActions';
import EmptyDataCard from '../Common/EmptyDataCard';
import { RemoveShoppingCart } from '@mui/icons-material';
import CouponCard from '../Common/CouponCard';
import { offerCards } from '../../utils/Coupons';
import { AddressData, CartItem, DiscountType } from '../../types/CommonType';
import CartTotal from './CartTotal/CartTotal';
import { fetchAllAddressesApi } from '../../actions/CustomerActions';
import { addToCart, removeFromCart } from '../../features/cartSlice';
import LoadingCircle from '../Common/LoadingCircle';
import ConfirmationDialog from '../Common/ConfirmationDialog';
import ApiStatusDialog from '../Common/ApiStatusDialog';
import { theme } from '../../ui/theme';

interface CartProps {
  customerId: string;
}

const Cart = (props: CartProps) => {
  const { isLoading, cartData, totalCost, orderConfirmData, isError } = useAppSelector(
    state => state.cart
  );
  const { addressData } = useAppSelector(state => state.user);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState<AddressData>();
  const [openConfirmDialog, setOpenConfirmDialog] = useState(false);
  const deliveryAmount = 20;
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    if (!cartData?.data && props.customerId) {
      dispatch(fetchActiveCartData(props.customerId));
    }
    if (!addressData?.data && props.customerId) {
      dispatch(fetchAllAddressesApi(props.customerId));
    }
  }, [dispatch]);

  useEffect(() => {
    setDiscountAmount(0);
  }, [totalCost]);

  useEffect(() => {
    if (addressData?.data) {
      setDeliveryAddress(addressData?.data[0]);
    }
  }, [addressData]);

  const handleAddToCart = (cartItem: CartItem) => {
    dispatch(addToCart(cartItem));
    if (props.customerId) {
      dispatch(
        addItemToCart({
          customerId: props.customerId,
          body: {
            productId: cartItem.productId,
            productName: cartItem.productName,
            cost: cartItem.cost
          }
        })
      );
    }
  };

  const handleRemoveFromCart = (cartItem: CartItem) => {
    dispatch(removeFromCart(cartItem));
    if (props.customerId) {
      dispatch(
        removeItemFromCart({
          customerId: props.customerId,
          body: {
            productId: cartItem.productId,
            productName: cartItem.productName,
            cost: cartItem.cost
          }
        })
      );
    }
  };

  const handleSelectCoupon = (discount: number) => {
    setDiscountAmount(discount);
  };

  const handleAddressChange = (title: string) => {
    setDeliveryAddress(
      addressData?.data?.find((address: AddressData) => address.title == title) as AddressData
    );
  };

  const handlePlaceOrder = () => {
    if (deliveryAddress) {
      setOpenConfirmDialog(true);
    }
  };

  const handleOrderConfirmation = () => {
    setOpenConfirmDialog(false);
    dispatch(
      confirmOrderForDelivery({
        customerId: props.customerId,
        body: {
          finalCost: Math.abs(totalCost + deliveryAmount - discountAmount),
          deliveryCost: deliveryAmount,
          discountAmount: discountAmount,
          addressId: deliveryAddress?.id
        }
      })
    );
  };

  return (
    <Container className={styles.cartContainer}>
      <Typography className={styles.cartTitle}>Cart</Typography>
      <LoadingCircle isLoading={isLoading} />
      {cartData?.data?.productList?.length > 0 ? (
        <div className={styles.cartBox}>
          <div className={styles.cartSummary}>
            <Typography className={styles.itemsTitle}>Items</Typography>
            <CartItems
              cartItems={cartData?.data?.productList}
              handleAddToCart={handleAddToCart}
              handleRemoveFromCart={handleRemoveFromCart}
            />
            {isMobile && <hr />}
            {!isMobile && (
              <CartTotal
                totalCost={totalCost}
                discountCost={discountAmount}
                deliveryCost={deliveryAmount}
                handlePlaceOrder={handlePlaceOrder}
              />
            )}
          </div>
          <div className={styles.otherSection}>
            <Typography className={styles.headingStyle}>Active Offer</Typography>
            <div className={styles.couponSection}>
              <CouponCard
                discount={offerCards[0].disRupee || 0}
                discountType={DiscountType.AMOUNT}
                description={offerCards[0].disRule}
                background={offerCards[0].background}
                applyCoupon={handleSelectCoupon}
                totalAmount={totalCost}
              />
              <CouponCard
                discount={offerCards[1].disPercentage || 0}
                discountType={DiscountType.PERCENTAGE}
                description={offerCards[1].disRule}
                background={offerCards[1].background}
                applyCoupon={handleSelectCoupon}
                totalAmount={totalCost}
              />
            </div>
            <Typography className={styles.headingStyle}>Delivery Address</Typography>
            {addressData?.data && (
              <TextField
                select
                className={styles.addressSection}
                defaultValue={addressData?.data[0]?.title || ''}
                helperText="*Please select your delivery address"
                onChange={e => handleAddressChange(e.target.value)}
              >
                {addressData?.data.map((address: AddressData) => (
                  <MenuItem key={address.id} value={address.title}>
                    {address.title},{address.addressFirst}
                  </MenuItem>
                ))}
              </TextField>
            )}
            {!addressData?.data && (
              <>
                <Typography color="red" fontSize={12}>
                  Address is required!
                </Typography>
                <Button
                  variant="contained"
                  color="warning"
                  onClick={() => navigate('/app/profile')}
                >
                  Add Address
                </Button>
              </>
            )}
            {isMobile && (
              <CartTotal
                totalCost={totalCost}
                discountCost={discountAmount}
                deliveryCost={deliveryAmount}
                handlePlaceOrder={handlePlaceOrder}
              />
            )}
          </div>
        </div>
      ) : (
        <EmptyDataCard
          message={'Oops! Your Cart is Empty.'}
          icon={<RemoveShoppingCart sx={{ color: 'rgb(112, 112, 112)' }} />}
        />
      )}
      <ConfirmationDialog
        open={openConfirmDialog}
        handleClose={() => setOpenConfirmDialog(false)}
        title={'Confirm Your Order?'}
        description={
          'Estimated Delivery time slot will be alotted to you once your order is placed! Payment will be collected at time of delivery only.'
        }
        handleConfirm={handleOrderConfirmation}
      />
      {orderConfirmData?.data && (
        <ApiStatusDialog isApiResponse message={'Order placed successfully!'} />
      )}
      {orderConfirmData?.errorMessage && (
        <ApiStatusDialog isApiResponse isSuccess={false} message={'Order failed :('} />
      )}
    </Container>
  );
};

export default Cart;
