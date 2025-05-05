import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { 
  addItemToCart, 
  removeItemFromCart, 
  deleteItemFromCart 
} from '../redux/cartSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';
import './styles.css';

const ShoppingCart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    dispatch(addItemToCart(item));
  };

  const removeItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const deleteItemHandler = (id) => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <div className="shopping-cart">
      <h2>Your Shopping Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>
      
      {cart.items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="cart-items">
          {cart.items.map(item => (
            <CartItem
              key={item.id}
              item={item}
              onAdd={addItemHandler}
              onRemove={removeItemHandler}
              onDelete={deleteItemHandler}
            />
          ))}
        </div>
      )}
      
      <div className="cart-summary">
        <h3>Total: ${cart.totalAmount.toFixed(2)}</h3>
        <button className="checkout-btn" onClick={() => alert('Coming Soon!')}>
          Checkout
        </button>
        <Link to="/products" className="continue-shopping">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCart;
