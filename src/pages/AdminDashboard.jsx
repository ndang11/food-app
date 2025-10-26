import { useContext, useState } from 'react';
import Navbar from '../components/Navbar/NavBar';
import { FoodContext } from '../context/FoodContext';


const AdminDashboard = () => {
  const { foods, addFood, deleteFood } = useContext(FoodContext);
  const [form, setForm] = useState({ id: '', name: '', calories: '', price: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood({ ...form, id: Date.now().toString() });
    setForm({ id: '', name: '', calories: '', price: '', description: '' });
  };

  return (
    <div>
      <Navbar />
      <h2>Admin Dashboard</h2>

      <form onSubmit={handleSubmit}>
        <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Name" required />
        <input value={form.calories} onChange={(e) => setForm({ ...form, calories: e.target.value })} placeholder="Calories" required />
        <input value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} placeholder="Price" required />
        <textarea value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Description" />
        <button type="submit">Add Food</button>
      </form>

      <ul>
        {foods.map(food => (
          <li key={food.id}>
            {food.name} - ${food.price}
            <button onClick={() => deleteFood(food.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminDashboard;

