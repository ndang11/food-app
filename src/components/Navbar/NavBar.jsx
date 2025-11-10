
import { useContext, useState } from "react";
import { FoodContext } from "../../context/FoodContext";
import Header from "../header/Header";
import Styles from "./NavBar.module.css";

const Navbar = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(FoodContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <nav>
      <div className={Styles.til}>
        <Header />
        <div className={Styles.label}>
        <div>
          <button onClick={() => setShowCart(!showCart)}>
            🛒({cart.reduce((sum, item) => sum + item.quantity, 0)})
          </button>
        </div>
          <div className={Styles.admin1}>
            <a href="/admin">Admin</a>
          </div>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className={Styles.cartSidebar}>
          <div className={Styles.cartHeader}>
            <h3>Your Cart</h3>
            <button className={Styles.close} onClick={() => setShowCart(false)}>Close </button>
          </div>

          {cart.length === 0 ? (
            <p>No items in cart.</p>
          ) : (
            <ul className={Styles.cartList}>
              {cart.map((item) => (
                <li key={item.id} className={Styles.cartItem}>
                  <div className={Styles.cartItemImage}>
                    <img
                      src={item.image}
                      alt={item.name}
                      width="100"
                      height="100"
                    />
                  </div>

                  <div className={Styles.cartItemDetails}>
                    <strong>{item.name}</strong>
                    <p className={Styles.para}>${item.price}</p>
                    <div className={Styles.cartItemControls}>
                      <button className={Styles.decrease} onClick={() => decreaseQuantity(item.id)}>-</button>
                      <span className={Styles.quality}>{item.quantity}</span>
                      <button className={Styles.increase} onClick={() => increaseQuantity(item.id)}>+</button>
                      <button className={Styles.del} onClick={() => removeFromCart(item.id)}>Remove</button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

