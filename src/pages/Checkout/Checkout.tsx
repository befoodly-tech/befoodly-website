import { Box } from '@mui/material';
import Cart from '../../components/Cart/Cart';
import Dishes from '../../components/Dishes/Dishes';

interface CheckoutProps {
  customerId: string;
  s3Url: string;
}

const Checkout = (props: CheckoutProps) => {
  return (
    <Box>
      <Cart customerId={props.customerId} />
      <Dishes bucketUrl={props.s3Url} isTrending />
    </Box>
  );
};

export default Checkout;
