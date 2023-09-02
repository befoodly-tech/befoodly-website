import Cart from '../../components/Cart/Cart';
import Dishes from '../../components/Dishes/Dishes';
import styles from './Checkout.module.css';

const Checkout = () => {
  const S3_URL = window.config?.S3_URL;
  return (
    <>
      <Cart />
      <Dishes bucketUrl={S3_URL} />
    </>
  );
};

export default Checkout;
