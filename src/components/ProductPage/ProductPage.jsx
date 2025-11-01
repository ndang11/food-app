
import { useParams, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { FoodContext } from '../../context/FoodContext';

const ProductPage = () => {
  const { id } = useParams();
  const { foods, addToCart } = useContext(FoodContext);
  const navigate = useNavigate();

  const food = foods.find((f) => f.id === id);

  const handleBuy = () => {
    addToCart(food);
    navigate('/purchase');
  };

  if (!food) return <p>Food not found.</p>;

  return (
    <div className="ProductPagee">
      <h2>{food.name}</h2>

      {/* ✅ Display food image */}
      {food.image && (
        <div className="imageContainer">
          <img
            src={food.image}
            alt={food.name}
            className="productImage"
          />
        </div>
      )}

      <p>Calories: {food.calories}</p>
      <p>Price: ${food.price}</p>
      <p>{food.description}</p>

      <button onClick={handleBuy}>Buy Now</button>

      <div className="cart-wrapper"></div>
    </div>
  );
};

export default ProductPage;
