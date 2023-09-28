import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart.jsx">Cart</Link>
          </li>
          <li>
            <Link to="/checkout.jsx">Checkout</Link>
          </li>
          <li>
            <Link to="/login.jsx">Login</Link>
          </li>
          <li>
            <Link to="/Signup.jsx">Sign Up</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;

