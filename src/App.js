import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import BlogPage from './pages/BlogPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pagina1" element={<Page1 />} />
        <Route path="/pagina2" element={<Page2 />} />
        <Route path="/pagina3" element={<Page3 />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </Router>
  );
}

export default App;

