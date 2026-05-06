import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../../context/FoodContext';
import { FaHeart, FaHeartBroken } from "react-icons/fa";
import Styles from './LandingPage.module.css';

const LandingPage = () => {
  const { foods, loading, toggleFavorite, isFavorite } = useContext(FoodContext);

  if (loading) {
    return (
      <div className={Styles.landingContainer}>
        <div className={Styles.landingContent}>
          <p className={Styles.textCenter}>Loading foods...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={Styles.landingContainer}>
      <div className={Styles.landingContent}>
        <section className={Styles.heroSection}>
          <div className={Styles.heroBackground}>
            <img 
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80" 
              alt="Delicious food background" 
            />
          </div>
          <div className={Styles.heroOverlay}></div>
          <div className={Styles.heroContent}>
            <h1 className={Styles.heroTitle}>Welcome to Royal Food's Paradise</h1>
            <p className={Styles.heroSubtitle}>
              Discover delicious meals and order online with ease!
            </p>
            <Link to="/menu" className={Styles.heroCta}>
              Browse Menu
            </Link>
          </div>
        </section>

        <section className={Styles.foodsSection} id="foods">
          <div className={Styles.sectionHeader}>
            <h2 className={Styles.sectionTitle}>Available Foods</h2>
          </div>
          {foods.length === 0 ? (
            <p className={Styles.textCenter}>No foods available. Go to /admin to add some.</p>
          ) : (
            <div className={Styles.foodGrid}>
              {foods.map(food => (
                <Link to={`/product/${food.id}`} key={food.id} className={Styles.foodCard}>
                  <div className={Styles.foodCardImage}>
                    <img src={food.image} alt={food.name} />
                    {food.calories && (
                      <span className={Styles.foodCardBadge}>{food.calories} cal</span>
                    )}
                    <button 
                      className={`${Styles.favoriteButton} ${isFavorite(food.id) ? Styles.active : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleFavorite(food.id);
                      }}
                    >
                      {isFavorite(food.id) ? <FaHeart /> : <FaHeartBroken />}
                    </button>
                  </div>
                  <div className={Styles.foodCardBody}>
                    <h3 className={Styles.foodCardTitle}>{food.name}</h3>
                    <p className={Styles.foodCardDescription}>{food.description}</p>
                    <div className={Styles.foodCardFooter}>
                      <span className={Styles.foodCardPrice}>{food.price.toFixed(2)}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default LandingPage;