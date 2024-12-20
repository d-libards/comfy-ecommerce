import { useSelector } from 'react-redux';
import { SectionTitle, CartTotals, CheckoutForm } from '../components';

const Checkout = () => {
  const { cartTotal } = useSelector((state) => state.cartState);

  if (cartTotal === 0) {
    return <SectionTitle text="Your cart is empty" />;
  }

  return (
    <>
      <SectionTitle text="Place your order" />
      <div className="mt-8 grid gap-8 md:grid-cols-2 items-start">
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
