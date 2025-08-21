<<<<<<< HEAD
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import About from "./pages/About";
import Recipes from "./pages/Recipes";
import RecipeDetails from "./pages/RecipeDetails";
import IngredientsFinder from "./pages/IngredientsFinder";
import FAQ from "./pages/faq"; 
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PageWrapper from "./components/PageWrapper";
=======
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import IngredientsFinder from './pages/IngredientsFinder';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649

function App() {
  const location = useLocation();

  return (
<<<<<<< HEAD
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ flex: 1 }}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/recipes" element={<PageWrapper><Recipes /></PageWrapper>} />
            <Route path="/recipe-details" element={<PageWrapper><RecipeDetails /></PageWrapper>} />
            <Route path="/ingredients" element={<PageWrapper><IngredientsFinder /></PageWrapper>} />
            <Route path="/faq" element={<PageWrapper><FAQ /></PageWrapper>} /> 
          </Routes>
        </AnimatePresence>
      </div>
=======
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
>>>>>>> 42ab9b41837636ca11bbbf1e673c8fa16cc5c649
      <Footer />
    </div>
  );
}

export default App;
