import Cart from '../../components/Cart/Cart';
import Dishes from '../../components/Dishes/Dishes';
import Footer from '../../components/Footer/Footer';
import NavbarApp from '../../components/NavbarApp/NavbarApp';
import styles from './Checkout.module.css';

const Checkout = () => {
  return (
    <>
      <NavbarApp />
      <Cart />
      <Dishes />
      <Footer />
    </>
  );
};

export default Checkout;
