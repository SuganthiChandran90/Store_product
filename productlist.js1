import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import './styles.css';

const ProductList = () => {
  const products = useSelector(state => state.products.items);
  const categories = useSelector(state => state.products.categories);

  return (
    <div className="product-list">
      {categories.map(category => (
        <div key={category} className="category-section">
          <h2>{category}</h2>
          <div className="products-grid">
            {products
              .filter(product => product.category === category)
              .map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
