import React from 'react';
import './styles.css';

const CartItem = ({ item, onAdd, onRemove, onDelete }) => {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} />
      <div className="item-details">
        <h3>{item.name}</h3>
        <p>${item.price.toFixed(2)} each</p>
      </div>
      <div className="item-quantity">
        <button onClick={() => onRemove(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onAdd({
          id: item.id,
          name: item.name,
          price: item.price,
          image: item.image
        })}>+</button>
      </div>
      <div className="item-total">
        <p>${item.totalPrice.toFixed(2)}</p>
        <button 
          onClick={() => onDelete(item.id)}
          className="delete-btn"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
