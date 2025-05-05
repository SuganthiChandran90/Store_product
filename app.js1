import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import LandingPage from './components/LandingPage';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './styles.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
