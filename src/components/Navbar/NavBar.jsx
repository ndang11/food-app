import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import Header from "../header/Header";
import Styles from "./NavBar.module.css";

const Navbar = () => {
  const { cart, removeFromCart, increaseQuantity, decreaseQuantity } =
    useContext(FoodContext);
  const [showCart, setShowCart] = useState(false);
  const navigate = useNavigate();

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = () => {
    setShowCart(false);
    navigate("/purchase");
  };

  return (
    <nav className={Styles.nav}>
      <div className={Styles.navContainer}>
        <Header />
        
        <div className={Styles.navActions}>
          <button 
            className={Styles.cartButton} 
            onClick={() => setShowCart(!showCart)}
          >
            <span className={Styles.cartIcon}>🛒</span>
            <span>Cart</span>
            <span className={Styles.cartBadge}>
              {cart.reduce((sum, item) => sum + item.quantity, 0)}
            </span>
          </button>
          
          <a href="/admin" className={Styles.adminButton}>
            Admin
          </a>
        </div>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <>
          <div 
            className={Styles.cartOverlay} 
            onClick={() => setShowCart(false)}
          />
          <div className={Styles.cartSidebar}>
            <div className={Styles.cartHeader}>
              <h3 className={Styles.cartTitle}>Your Cart</h3>
              <button 
                className={Styles.closeButton} 
                onClick={() => setShowCart(false)}
              >
                Close
              </button>
            </div>

            <div className={Styles.cartContent}>
              {cart.length === 0 ? (
                <div className={Styles.cartEmpty}>
                  <p>Your cart is empty</p>
                  <p>Add some delicious food items!</p>
                </div>
              ) : (
                <ul className={Styles.cartList}>
                  {cart.map((item) => (
                    <li key={item.id} className={Styles.cartItem}>
                      <div className={Styles.cartItemImage}>
                        <img
                          src={item.image}
                          alt={item.name}
                        />
                      </div>

                      <div className={Styles.cartItemDetails}>
                        <strong className={Styles.cartItemName}>
                          {item.name}
                        </strong>
                        <p className={Styles.cartItemPrice}>
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <div className={Styles.cartItemControls}>
                          <button 
                            className={`${Styles.quantityButton} ${Styles.decrease}`}
                            onClick={() => decreaseQuantity(item.id)}
                          >
                            −
                          </button>
                          <span className={Styles.quantity}>
                            {item.quantity}
                          </span>
                          <button 
                            className={`${Styles.quantityButton} ${Styles.increase}`}
                            onClick={() => increaseQuantity(item.id)}
                          >
                            +
                          </button>
                          <button 
                            className={Styles.removeButton}
                            onClick={() => removeFromCart(item.id)}
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {cart.length > 0 && (
              <div className={Styles.cartFooter}>
                <div className={Styles.cartTotal}>
                  <span className={Styles.cartTotalLabel}>Total:</span>
                  <span className={Styles.cartTotalPrice}>
                    ${cartTotal.toFixed(2)}
                  </span>
                </div>
                <button 
                  className={Styles.checkoutButton}
                  onClick={handleCheckout}
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
