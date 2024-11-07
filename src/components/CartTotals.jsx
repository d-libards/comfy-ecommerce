import { useSelector } from 'react-redux';
import { formatPrice } from '../utils';

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cartState
  );

  return (
    <div className="card bg-base-200">
      <div className="card-body">
        {/* SUBTOTAL */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Subtotal</span>
          <span>{formatPrice(cartTotal)}</span>
        </p>
        {/* SHIPPING */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Shipping</span>
          <span>{formatPrice(shipping)}</span>
        </p>
        {/* TAX */}
        <p className="flex justify-between text-sm border-b border-base-300 pb-2">
          <span>Tax</span>
          <span>{formatPrice(tax)}</span>
        </p>
        {/* ORDER TOTAL */}
        <p className="mt-4 flex justify-between text-md pb-2">
          <span className="font-bold">Order Total</span>
          <span className="font-bold">{formatPrice(orderTotal)}</span>
        </p>
      </div>
    </div>
  );
};
export default CartTotals;
