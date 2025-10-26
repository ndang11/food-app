import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FoodProvider from './context/FoodContext';
import LandingPage from './components/LandingPage/LandingPage';
import ProductPage from './components/ProductPage/ProductPage';
import CheckoutSuccess from './components/CheckoutSuccesPage/CheckoutSuccesPage';
import AdminDashboard from './pages/AdminDashboard';
import Navbar from './components/Navbar/NavBar';

const App = () => {
  return (
    <FoodProvider>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/checkout-success" element={<CheckoutSuccess />} />
          <Route path="/admin" element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </FoodProvider>
  );
};

export default App;
