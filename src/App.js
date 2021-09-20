import './App.css';
import Router from './router/Router';
import { CartProvider } from './context/CartContext';
// import { useState } from 'react';


function App() {

  // const [cart, setCart] = useState({});

  return (
      <CartProvider>
        <Router></Router>
      </CartProvider>
  );
}
  
export default App;
