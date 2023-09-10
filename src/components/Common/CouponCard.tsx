import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import { DiscountType } from '../../types/CommonType';
import styles from './Common.module.css';
import { calcDiscountAmount, isValidCoupon } from '../../utils/Coupons';

interface CouponCardProps {
  discount: number;
  discountType: DiscountType;
  description: string;
  background: string;
  applyCoupon: (discountAmount: number) => void;
  totalAmount: number;
}

const CouponCard = (props: CouponCardProps) => {
  const { discount, discountType, description, background, applyCoupon, totalAmount } = props;
  const discountFormat = discountType == DiscountType.AMOUNT ? `₹${discount}` : `${discount}%`;

  const isCouponValid = isValidCoupon(discountType, totalAmount);

  const handleApplyCoupon = () => {
    const discountAmount =
      discountType == DiscountType.AMOUNT ? discount : calcDiscountAmount(discount, totalAmount);
    applyCoupon(discountAmount);
  };

  return (
    <Card className={styles.couponCard} style={{ background: background }}>
      <CardContent className={styles.couponContent}>
        <Typography className={styles.couponHead}>{`Flat ${discountFormat} Discount`}</Typography>
        {description}
      </CardContent>
      <CardActions>
        <Button onClick={handleApplyCoupon} disabled={!isCouponValid}>
          Apply
        </Button>
      </CardActions>
    </Card>
  );
};

export default CouponCard;
