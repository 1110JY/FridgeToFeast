import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import IngredientsFinder from './pages/IngredientsFinder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const location = useLocation();

  return (
    <div>
      <Navbar />
      {/* AnimatePresence wraps the Routes to animate the page transitions */}
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/ingredients" element={<IngredientsFinder />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
