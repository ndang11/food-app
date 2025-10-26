import { createContext, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localstorage';

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  // Load foods and cart from localStorage
  const storedFoods = getFromLocalStorage('foods') || [];
  const storedCart = getFromLocalStorage('cart') || [];

  const [foods, setFoods] = useState(storedFoods);
  const [cart, setCart] = useState(storedCart);

  // --- FOOD CRUD ---
  const addFood = (food) => {
    const updated = [...foods, food];
    setFoods(updated);
    saveToLocalStorage('foods', updated);
  };

  const updateFood = (updatedFood) => {
    const updated = foods.map((f) => (f.id === updatedFood.id ? updatedFood : f));
    setFoods(updated);
    saveToLocalStorage('foods', updated);
  };

  const deleteFood = (id) => {
    const updated = foods.filter((f) => f.id !== id);
    setFoods(updated);
    saveToLocalStorage('foods', updated);
  };

  // --- CART LOGIC ---
  const addToCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === food.id);

      let updatedCart;
      if (existing) {
        // If food already in cart, increment quantity
        updatedCart = prevCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        // Add new food with quantity 1
        updatedCart = [...prevCart, { ...food, quantity: 1 }];
      }

      saveToLocalStorage('cart', updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
    saveToLocalStorage('cart', updated);
  };

  const increaseQuantity = (id) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCart(updated);
    saveToLocalStorage('cart', updated);
  };

  const decreaseQuantity = (id) => {
    const updated = cart
      .map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCart(updated);
    saveToLocalStorage('cart', updated);
  };

  // --- EXPORT CONTEXT VALUES ---
  return (
    <FoodContext.Provider
      value={{
        foods,
        addFood,
        updateFood,
        deleteFood,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;

