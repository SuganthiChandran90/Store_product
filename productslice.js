import { createSlice } from '@reduxjs/toolkit';

const productsSlice = createSlice({
  name: 'products',
  initialState: {
    items: [
      {
        id: 'p1',
        name: 'Monstera Deliciosa',
        price: 29.99,
        image: 'monstera.jpg',
        category: 'Popular'
      },
      {
        id: 'p2',
        name: 'Snake Plant',
        price: 24.99,
        image: 'snake-plant.jpg',
        category: 'Low Maintenance'
      },
      // Add 4 more plants with different categories
    ],
    categories: ['Popular', 'Low Maintenance', 'Pet Friendly']
  },
  reducers: {}
});

export default productsSlice.reducer;
