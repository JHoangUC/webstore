// CartContext.js
import { useState, useEffect, useRef, createContext, useCallback, useContext } from 'react';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const loadJSON = key => key && JSON.parse(localStorage.getItem(key));
const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

const CartProvider = ({ children }) => {
  const key = `STRIPE_CART_ITEMS`;
  const firstRender = useRef(true);
  const [cartProducts, setCartProducts] = useState([]); // Change this to cartProducts

  function getProductQuantity(id) {
    const quantity = cartProducts.find(product => product.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    }

    return quantity;
  }
  const getTotalQuantity = () => {
    return cartProducts.reduce((total, product) => total + product.quantity, 0);
  };
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      const localItems = loadJSON(key);
      localItems && setCartProducts(localItems); // Change this to setCartProducts
      return;
    }
    saveJSON(key, cartProducts); // Change this to cartProducts
  }, [key, cartProducts]);

  const addItem = useCallback((price) => {
    setCartProducts((products) => {
      const existingProduct = products.find((product) => product.id === price.id);

      if (existingProduct) {
        // If the product already exists, update the quantity
        return products.map((product) =>
          product.id === price.id
            ? { ...product, quantity: product.quantity + 1 }
            : product
        );
      } else {
        // If the product doesn't exist, add a new item to the cart
        return [...products, { ...price, quantity: 1 }];
      }
    });
  }, [setCartProducts]);  const removeItem = useCallback(id => setCartProducts(products => products.filter(product => product.id !== id)), [setCartProducts]);
  const resetCart = useCallback(() => setCartProducts([]), [setCartProducts]);

  return (
    <CartContext.Provider value={{ items: cartProducts, addItem, removeItem, resetCart, getProductQuantity, getTotalQuantity  }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
