import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, addToCart } from './Store';

const Products = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div key={product.id} className="border p-4 rounded shadow-md">
          <h2 className="text-lg font-bold">{product.title}</h2>
          <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover" />
          <p className="mt-2">${product.price}</p>
          <div className="flex justify-between mt-4">
            <button
              onClick={() => {
                console.log('Adding to favorites:', product);
                dispatch(addToFavorites(product));
              }}
              className={`p-2 rounded ${favorites.some(item => item.id === product.id) ? 'bg-gray-500 text-white' : 'bg-red-500 text-white'}`}
            >
              {favorites.some(item => item.id === product.id) ? '✅ Added to Favorites' : '❤️ Add to Favorites'}
            </button>
            <button
              onClick={() => {
                console.log('Adding to cart:', product);
                dispatch(addToCart(product));
              }}
              className={`p-2 rounded ${cart.some(item => item.id === product.id) ? 'bg-gray-500 text-white' : 'bg-blue-500 text-white'}`}
            >
              {cart.some(item => item.id === product.id) ? '✅ Added to Cart' : '🛒 Add to Cart'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;