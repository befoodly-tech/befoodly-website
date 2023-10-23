import Cart from '../../components/Cart/Cart';
import Dishes from '../../components/Dishes/Dishes';
import HeaderTabs from '../../components/Headers/HeaderTabs';

interface CheckoutProps {
  customerId: string;
  s3Url: string;
}

const Checkout = (props: CheckoutProps) => {
  return (
    <>
      <HeaderTabs customerId={props.customerId} />
      <Cart customerId={props.customerId} />
      <Dishes bucketUrl={props.s3Url} isTrending />
    </>
  );
};

export default Checkout;
