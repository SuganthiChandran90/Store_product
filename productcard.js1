import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../redux/cartSlice';
import './styles.css';

const ProductCard = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false);
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(addItemToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    }));
    setIsAdded(true);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>${product.price.toFixed(2)}</p>
      <button 
        onClick={addToCartHandler} 
        disabled={isAdded}
        className={isAdded ? 'disabled' : ''}
      >
        {isAdded ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
