import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../../context/FoodContext';

const LandingPage = () => {
  const { foods } = useContext(FoodContext);

  return (
    <div className="landing-container">
      <section className="hero-section">
        <div className="hero-background">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80" 
            alt="Delicious food background" 
          />
        </div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Welcome to Royal Food's Paradise</h1>
          <p className="hero-subtitle">
            Discover delicious meals and order online with ease!
          </p>
          <Link to="#foods" className="hero-cta">
            Browse Menu
          </Link>
        </div>
      </section>

      <section className="foods-section" id="foods">
        <div className="section-header">
          <h2 className="section-title">Available Foods</h2>
        </div>
        {foods.length === 0 ? (
          <p className="text-center">No foods available. Go to /admin to add some.</p>
        ) : (
          <div className="food-grid">
            {foods.map(food => (
              <Link to={`/product/${food.id}`} key={food.id} className="food-card">
                <div className="food-card-image">
                  <img src={food.image} alt={food.name} />
                  {food.calories && (
                    <span className="food-card-badge">{food.calories} cal</span>
                  )}
                </div>
                <div className="food-card-body">
                  <h3 className="food-card-title">{food.name}</h3>
                  <p className="food-card-description">{food.description}</p>
                  <div className="food-card-footer">
                    <span className="food-card-price">${food.price.toFixed(2)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default LandingPage;
