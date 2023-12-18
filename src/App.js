import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import QuotePage from './pages/QuotePage';
import CatalogPage from './pages/CatalogPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import FAQPage from './pages/FAQPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

