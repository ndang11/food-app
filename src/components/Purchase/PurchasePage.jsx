import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FoodContext } from "../../context/FoodContext";
import Styles from "./Purchase.module.css";

const PurchasePage = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useContext(FoodContext);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    if (cart.length > 0 && !orderPlaced) {
      const newOrderId = `ORD-${Date.now().toString(36).toUpperCase()}`;
      setOrderId(newOrderId);
      setOrderPlaced(true);
    }
  }, [cart, orderPlaced]);

  const handleBackToHome = () => {
    clearCart();
    navigate("/");
  };

  const handlePrint = () => {
    window.print();
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const deliveryFee = subtotal > 50 ? 0 : 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + deliveryFee + tax;

  return (
    <div className={Styles.purchasePage}>
      <div className={Styles.purchaseCard}>
        <div className={Styles.successHeader}>
          <div className={Styles.successIcon}>✓</div>
          <h1 className={Styles.successTitle}>Order Placed Successfully!</h1>
          <p className={Styles.successMessage}>
            Thank you for your purchase. Your order has been confirmed.
          </p>
        </div>

        <div className={Styles.orderDetails}>
          <div className={Styles.orderSection}>
            <h3 className={Styles.sectionTitle}>Order Items</h3>
            <ul className={Styles.orderItems}>
              {cart.map((item) => (
                <li key={item.id} className={Styles.orderItem}>
                  <div className={Styles.orderItemImage}>
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className={Styles.orderItemInfo}>
                    <h4 className={Styles.orderItemName}>{item.name}</h4>
                    <p className={Styles.orderItemMeta}>
                      Qty: {item.quantity} × ${item.price.toFixed(2)}
                    </p>
                  </div>
                  <span className={Styles.orderItemPrice}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className={Styles.orderSection}>
            <h3 className={Styles.sectionTitle}>Order Summary</h3>
            <div className={Styles.orderSummary}>
              <div className={Styles.summaryRow}>
                <span className={Styles.summaryLabel}>Subtotal</span>
                <span className={Styles.summaryValue}>
                  ${subtotal.toFixed(2)}
                </span>
              </div>
              <div className={Styles.summaryRow}>
                <span className={Styles.summaryLabel}>Delivery Fee</span>
                <span className={Styles.summaryValue}>
                  {deliveryFee === 0 ? "FREE" : `$${deliveryFee.toFixed(2)}`}
                </span>
              </div>
              <div className={Styles.summaryRow}>
                <span className={Styles.summaryLabel}>Tax (8%)</span>
                <span className={Styles.summaryValue}>
                  ${tax.toFixed(2)}
                </span>
              </div>
              <div className={Styles.summaryRow}>
                <span className={`${Styles.summaryLabel} ${Styles.summaryTotal}`}>
                  Total
                </span>
                <span className={`${Styles.summaryValue} ${Styles.summaryTotalPrice}`}>
                  ${total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className={Styles.orderSection}>
            <h3 className={Styles.sectionTitle}>Delivery Information</h3>
            <div className={Styles.deliveryInfo}>
              <div className={Styles.infoGroup}>
                <span className={Styles.infoLabel}>Order ID</span>
                <span className={Styles.infoValue}>{orderId}</span>
              </div>
              <div className={Styles.infoGroup}>
                <span className={Styles.infoLabel}>Estimated Delivery</span>
                <span className={Styles.infoValue}>
                  {new Date(
                    Date.now() + 3 * 24 * 60 * 60 * 1000
                  ).toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "short",
                    day: "numeric",
                  })}
                </span>
              </div>
              <div className={Styles.infoGroup}>
                <span className={Styles.infoLabel}>Delivery Address</span>
                <span className={Styles.infoValue}>
                  Yaound/Cameroon
                </span>
              </div>
              <div className={Styles.infoGroup}>
                <span className={Styles.infoLabel}>Payment Method</span>
                <span className={Styles.infoValue}>Credit Card</span>
              </div>
            </div>
          </div>
        </div>

        <div className={Styles.orderActions}>
          <button className={Styles.homeButton} onClick={handleBackToHome}>
            ← Back to Home
          </button>
          <button className={Styles.printButton} onClick={handlePrint}>
            🖨️ Print Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

export default PurchasePage;
