import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import QuotePage from './pages/QuotePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';
import CartPage from './pages/CartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/quote" element={<QuotePage />} />
                <Route path="/catalog" element={<CatalogPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/FAQ" element={<FAQPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/register" element={<RegisterPage />} />
              </Routes>
              <Footer />
            </Router>
      </CartProvider>
    </AuthProvider>
    
  );
}

export default App;

