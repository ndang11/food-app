import { useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";

const Navbar = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } = useContext(FoodContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav>
      <h2>Food Admin Dashboard</h2>

      <div>
        <button onClick={() => setShowCart(!showCart)}>
          🛒 Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
        </button>

        {showCart && (
          <div>
            <h4>Cart Items</h4>
            {cart.length === 0 && <p>No items in cart.</p>}

            <ul>
              {cart.map((item) => (
                <li key={item.id}>
                  <strong>{item.name}</strong> - ${item.price}  
                  <br />
                  Quantity: {item.quantity}
                  <div>
                    <button onClick={() => decreaseQuantity(item.id)}>-</button>
                    <button onClick={() => increaseQuantity(item.id)}>+</button>
                    <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
