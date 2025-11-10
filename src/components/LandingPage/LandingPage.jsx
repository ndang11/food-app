import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FoodContext } from '../../context/FoodContext';

const LandingPage = () => {
  const { foods } = useContext(FoodContext);

  return (
    <div className="landing-container">
      <div className="land-1">
        <div className="landing-image">
          <img src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2025/10/18/FN_Thanksgiving-Nuggets---Lifestyle_s4x3.jpg.rend.hgtvcom.1280.960.85.suffix/1760793601226.webp" alt="" />
        </div>
        <div className="landing-text">
          <h1>Welcome to Royal-Food's Paradise</h1>
          <p>Discover delicious meals and order online with ease!</p>
        </div>
      </div>

      <h1 className='head'>Available Foods</h1>
      {foods.length === 0 ? (
        <p>No foods available. Go to /admin to add some.</p>
      ) : (
        <div className="food-grid">
          {foods.map(food => (
            <Link to={`/product/${food.id}`} key={food.id} className="food-card">
              <img src={food.image} alt={food.name} />
              <div className="food-card-body">
                <h3>{food.name}</h3>
                <p className="food-card-description">{food.description}</p>
                <div className="cal">
                  <p><strong>{food.calories} cal</strong></p>
                <p className="food-card-price">${food.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default LandingPage;



// import { useContext, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FoodContext } from '../../context/FoodContext'; 

// const AdminDashboard = () => {
//   const { foods, addFood, deleteFood } = useContext(FoodContext);
//   const [form, setForm] = useState({
//     id: '',
//     name: '',
//     calories: '',
//     price: '',
//     description: '',
//     rating: 0,
//     liked: false,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     addFood({ ...form, id: Date.now().toString(), rating: 0, liked: false });
//     setForm({ id: '', name: '', calories: '', price: '', description: '', rating: 0, liked: false });
//   };

//   const handleRating = (foodId, rating) => {
//     const updatedFoods = foods.map((food) =>
//       food.id === foodId ? { ...food, rating } : food
//     );
//     localStorage.setItem('foods', JSON.stringify(updatedFoods)); // optional persistence
//   };

//   const toggleLike = (foodId) => {
//     const updatedFoods = foods.map((food) =>
//       food.id === foodId ? { ...food, liked: !food.liked } : food
//     );
//     localStorage.setItem('foods', JSON.stringify(updatedFoods));
//   };


//   return (
//     <div className={styles.dashboard}>
//       <h2 className={styles.title}>Admin Dashboard</h2>

//       <form onSubmit={handleSubmit} className={styles.form}>
//         <input
//           className={styles.input}
//           value={form.name}
//           onChange={(e) => setForm({ ...form, name: e.target.value })}
//           placeholder="Name"
//           required
//         />
//         <input
//           className={styles.input}
//           value={form.calories}
//           onChange={(e) => setForm({ ...form, calories: e.target.value })}
//           placeholder="Calories"
//           required
//         />
//         <input
//           className={styles.input}
//           value={form.price}
//           onChange={(e) => setForm({ ...form, price: e.target.value })}
//           placeholder="Price"
//           required
//         />
//         <textarea
//           className={styles.textarea}
//           value={form.description}
//           onChange={(e) => setForm({ ...form, description: e.target.value })}
//           placeholder="Description"
//         />
//         <button type="submit" className={styles.addBtn}>Add Food</button>
//       </form>

//       <ul className={styles.foodList}>
//         {foods.map((food) => (
//           <li key={food.id} className={styles.foodItem}>
//             <div className={styles.foodHeader}>
//               <strong>{food.name}</strong> - ${food.price}
//             </div>
//             <p className={styles.description}>{food.description}</p>

//             {/* Rating stars */}
//             <div className={styles.stars}>
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <span
//                   key={star}
//                   className={`${styles.star} ${star <= food.rating ? styles.filled : ''}`}
//                   onClick={() => handleRating(food.id, star)}
//                 >
//                   ★
//                 </span>
//               ))}
//             </div>

//             {/* Like / Unlike Button */}
//             <button
//               onClick={() => toggleLike(food.id)}
//               className={`${styles.likeBtn} ${food.liked ? styles.liked : ''}`}
//             >
//               {food.liked ? '❤️ Unlike' : '🤍 Like'}
//             </button>

//             <button onClick={() => deleteFood(food.id)} className={styles.deleteBtn}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminDashboard;

