// const CheckoutSuccess = () => (
//   <div>
//     <h2>Checkout Successful!</h2>
//     <p>Thank you for your purchase.</p>
//   </div>
// );

// export default CheckoutSuccess;

import { useNavigate } from "react-router-dom";
import styles from "./Purchase.module.css";

const PurchasePage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h2>Your order has been placed successfully.</h2>
      <p>Thank you for your purchase.</p>

      <button className={styles.backButton} onClick={() => navigate("/")}>
         Back to Home
      </button>
    </div>
  );
};

export default PurchasePage;
