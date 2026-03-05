import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { FoodContext } from '../../context/FoodContext';
import Styles from './ProductPage.module.css';

const ProductPage = () => {
  const { id } = useParams();
  const { foods, addToCart } = useContext(FoodContext);
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);

  const food = foods.find((f) => f.id === id);

  const handleAddToCart = () => {
    addToCart({ ...food, quantity });
    navigate('/purchase');
  };

  const handleBuyNow = () => {
    addToCart({ ...food, quantity });
    navigate('/purchase');
  };

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  if (!food) {
    return (
      <div className={Styles.productPage}>
        <div className={Styles.notFound}>
          <h2>Food not found</h2>
          <p>The item you're looking for doesn't exist.</p>
          <button 
            className={Styles.notFoundButton}
            onClick={() => navigate('/')}
          >
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={Styles.productPage}>
      <div className={Styles.productCard}>
        {/* Product Image */}
        <div className={Styles.productImageWrapper}>
          <img
            src={food.image}
            alt={food.name}
            className={Styles.productImage}
          />
          {food.calories && (
            <span className={Styles.productImageOverlay}>
              {food.calories} Calories
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className={Styles.productDetails}>
          <a href="/" className={Styles.backLink}>
            ← Back to Menu
          </a>

          <span className={Styles.productCategory}>Delicious Meal</span>
          <h1 className={Styles.productTitle}>{food.name}</h1>
          <p className={Styles.productDescription}>{food.description}</p>

          {/* Product Meta */}
          <div className={Styles.productMeta}>
            <div className={Styles.metaItem}>
              <span className={Styles.metaLabel}>Calories</span>
              <span className={`${Styles.metaValue} ${Styles.calories}`}>
                {food.calories}
              </span>
            </div>
            <div className={Styles.metaItem}>
              <span className={Styles.metaLabel}>Price</span>
              <span className={`${Styles.metaValue} ${Styles.price}`}>
                ${food.price.toFixed(2)}
              </span>
            </div>
          </div>

          {/* Quantity Selector */}
          <div className={Styles.quantitySection}>
            <span className={Styles.quantityLabel}>Quantity</span>
            <div className={Styles.quantityControls}>
              <button 
                className={Styles.quantityButton}
                onClick={decrementQuantity}
              >
                −
              </button>
              <span className={Styles.quantityValue}>{quantity}</span>
              <button 
                className={Styles.quantityButton}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className={Styles.productActions}>
            <button 
              className={Styles.addToCartButton}
              onClick={handleAddToCart}
            >
              🛒 Add to Cart
            </button>
            <button 
              className={Styles.buyNowButton}
              onClick={handleBuyNow}
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
