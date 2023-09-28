import { useContext } from 'react';
import CartContext from './CartContext';

function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      {/* Add buttons to update cart and proceed to checkout */}
    </div>
  );
}

export default Cart;