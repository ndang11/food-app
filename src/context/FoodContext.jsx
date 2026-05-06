import { createContext, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localstorage';

export const FoodContext = createContext();

const FoodProvider = ({ children }) => {
  const storedFoods = getFromLocalStorage('foods') || [];
  const storedCart = getFromLocalStorage('cart') || [];

  const [foods, setFoods] = useState(storedFoods);
  const [cart, setCart] = useState(storedCart);
  const [favorites, setFavorites] = useState(() => getFromLocalStorage('favorites') || []);
  const loading = false;

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

  const addToCart = (food) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === food.id);

      let updatedCart;
      if (existing) {
        updatedCart = prevCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
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

  const clearCart = () => {
    setCart([]);
    saveToLocalStorage('cart', []);
  };

  const isFavorite = (id) => favorites.includes(id);

  const toggleFavorite = (id) => {
    setFavorites((prev) => {
      const updated = prev.includes(id)
        ? prev.filter((favId) => favId !== id)
        : [...prev, id];
      saveToLocalStorage('favorites', updated);
      return updated;
    });
  };

  return (
    <FoodContext.Provider
      value={{
        foods,
        loading,
        addFood,
        updateFood,
        deleteFood,
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        favorites,
        isFavorite,
        toggleFavorite,
      }}
    >
      {children}
    </FoodContext.Provider>
  );
};

export default FoodProvider;

