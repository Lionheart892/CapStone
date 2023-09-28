import { useState, useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import CartContext from './CartContext';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  const handleAddToCart = () => {
    // Add the selected product to the cart using a context or state management system
    addToCart(product);
  };

  return (
    <div>
      <h2>Product Detail</h2>
      <div>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        <Link to="/checkout">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
}

export default ProductDetail;