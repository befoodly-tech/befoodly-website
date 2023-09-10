import { Container, MenuItem, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import CartItems from './CartItems/CartItems';
import styles from './Cart.module.css';
import { addItemToCart, fetchActiveCartData, removeItemFromCart } from '../../actions/CartActions';
import EmptyDataCard from '../Common/EmptyDataCard';
import { RemoveShoppingCart } from '@mui/icons-material';
import CouponCard from '../Common/CouponCard';
import { offerCards } from '../../utils/Coupons';
import { AddressData, CartItem, DiscountType } from '../../types/CommonType';
import CartTotal from './CartTotal/CartTotal';
import { fetchAllAddressesApi } from '../../actions/CustomerActions';
import { addToCart, removeFromCart } from '../../features/cartSlice';
import LoadingCircle from '../Common/LoadingCircle';

interface CartProps {
  customerId: string;
}

const Cart = (props: CartProps) => {
  const { isLoading, cartData, totalCost } = useAppSelector(state => state.cart);
  const { addressData } = useAppSelector(state => state.user);
  const [discountAmount, setDiscountAmount] = useState(0);
  const dispatch = useAppDispatch();

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
            <CartTotal totalCost={totalCost} discountCost={discountAmount} />
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
              >
                {addressData?.data.map((address: AddressData) => (
                  <MenuItem key={address.id} value={address.title}>
                    {address.title},{address.addressFirst}
                  </MenuItem>
                ))}
                {!addressData?.data && <MenuItem>No Address</MenuItem>}
              </TextField>
            )}
          </div>
        </div>
      ) : (
        <EmptyDataCard
          message={'Oops! Your Cart is Empty.'}
          icon={<RemoveShoppingCart sx={{ color: 'rgb(112, 112, 112)' }} />}
        />
      )}
    </Container>
  );
};

export default Cart;
