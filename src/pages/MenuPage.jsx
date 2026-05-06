import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../context/FoodContext';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Styles from './MenuPage.module.css';

const MenuPage = () => {
  const { foods, addToCart } = useContext(FoodContext);
  const [search, setSearch] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foods);

  // Filter foods based on search
  useEffect(() => {
    const results = foods.filter(food =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredFoods(results);
  }, [foods, search]);

  return (
    <div className={Styles.menuContainer}>
      <header className={Styles.menuHeader}>
        <h1 className={Styles.menuTitle}>Our Menu</h1>
        <div className={Styles.menuSearch}>
          <FaSearch className={Styles.searchIcon} />
          <input
            type="text"
            placeholder="Search dishes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={Styles.searchInput}
          />
        </div>
      </header>

      <section className={Styles.menuGrid}>
        {filteredFoods.length === 0 ? (
          <p className={Styles.noResults}>No dishes found matching your search.</p>
        ) : (
          filteredFoods.map(food => (
            <Link to={`/product/${food.id}`} key={food.id} className={Styles.menuCard}>
              <div className={Styles.cardImage}>
                <img src={food.image} alt={food.name} />
                {food.calories && (
                  <span className={Styles.cardBadge}>{food.calories} cal</span>
                )}
              </div>
              <div className={Styles.cardContent}>
                <h3 className={Styles.cardTitle}>{food.name}</h3>
                <p className={Styles.cardDescription}>{food.description}</p>
                <div className={Styles.cardFooter}>
                  <span className={Styles.cardPrice}>${food.price.toFixed(2)}</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation(); // Prevent link navigation
                      addToCart({ ...food, quantity: 1 });
                    }}
                    className={Styles.addToCartBtn}
                  >
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))
        )}
      </section>
    </div>
  );
};

export default MenuPage;