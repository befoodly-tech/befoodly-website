import Cart from '../../components/Cart/Cart';
import Dishes from '../../components/Dishes/Dishes';
import Footer from '../../components/Footer/Footer';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import styles from './Checkout.module.css';

const Checkout = () => {
  const S3_URL = window.config?.S3_URL;
  return (
    <>
      <NavbarApp customerId="" session="" />
      <Cart />
      <Dishes bucketUrl={S3_URL} />
      <Footer />
    </>
  );
};

export default Checkout;
