import React from 'react';
import { Provider } from 'react-redux';
import store from './Store';
import Products from './Products';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto">
        <Products />
      </div>
    </Provider>
  );
};

export default App;