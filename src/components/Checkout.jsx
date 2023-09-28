import { useContext } from 'react';
import CartContext from './CartContext';

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const handleCheckout = async () => {
    try {
      // Simulate a payment processing delay (you would use a real payment gateway)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Place the order (you would send the order data to your server)
      console.log('Order placed successfully');

      // Clear the cart after a successful order
      clearCart();
    } catch (error) {
      console.error('Checkout error:', error);
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Complete Purchase</button>
    </div>
  );
}

export default Checkout;