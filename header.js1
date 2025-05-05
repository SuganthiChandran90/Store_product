import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './styles.css';

const Header = () => {
  const totalQuantity = useSelector(state => state.cart.totalQuantity);

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>
      </nav>
      <div className="cart-icon">
        <Link to="/cart">
          <span>🛒</span>
          <span className="cart-count">{totalQuantity}</span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
