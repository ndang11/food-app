
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FoodContext } from '../context/FoodContext';
import Styles from './AdminDashboard.module.css';

const AdminDashboard = () => {
  const { foods, addFood, deleteFood } = useContext(FoodContext);
  const [form, setForm] = useState({ id: '', name: '', rating: '', price: '', description: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({ ...form, id: Date.now().toString() });
    setForm({ id: '', name: '', rating: '', price: '', description: '' });
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className={Styles.adminContainer}>
      <div className={Styles.adminContent}>
        <h2 className={Styles.title}>Admin Dashboard</h2>

        <form onSubmit={handleSubmit} className={Styles.form}>
          <input
            className={Styles.input}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            placeholder="Name"
            required
          />
          <input
            className={Styles.input}
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
            placeholder="Rating"
            required
          />
          <input
            className={Styles.input}
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            placeholder="Price"
            required
          />
          <textarea
            className={Styles.textarea}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Description"
          />
          <button type="submit" className={Styles.btn}>Add Food</button>
        </form>

        <div className={Styles.sectionHeader}>
          <h3 className={Styles.sectionTitle}>Food Items ({foods.length})</h3>
        </div>
        <ul className={Styles.foodList}>
          {foods.map(food => (
            <li key={food.id} className={Styles.foodItem}>
              <div className={Styles.foodInfo}>
                <span className={Styles.foodName}>{food.name}</span>
                <span className={Styles.foodPrice}>${food.price}</span>
              </div>
              <button className={Styles.delBtn} onClick={() => deleteFood(food.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <button onClick={handleGoHome} className={Styles.homeBtn}>
        ←
      </button>
    </div>
  );
};

export default AdminDashboard;
