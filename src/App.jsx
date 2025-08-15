import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Contact from "./pages/ContactUs";
import FactoringPage from "./pages/factoring/index";
import { PricesPage } from "./pages/prices";
import NotFound from "./components/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ScrollUp from "./components/ScrollUp";
import Power_Only from './pages/Power_Only';
import Hotshot from './pages/Hotshot'; 
import Privacy_Notice from './pages/Privacy_Notice';
import StepDeck from './pages/StepDeck';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import About_page from './pages/about';
import Refeer from './pages/Refeer';

import BoxTruck from './pages/Boxtruck';
import DryVan from './pages/DryVan';

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/box-truck" element={<BoxTruck />} />
        <Route path="/dry-van" element={<DryVan />} />
        <Route path="/refeer" element={<Refeer />} />
        <Route path="/factoring-services" element={<FactoringPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/power-only" element={<Power_Only />} /> 
        <Route path="/hotshot" element={<Hotshot />} /> 
        <Route path="/flat-bed-step-deck" element={<StepDeck />}/> 
        <Route path="/privacy-notice" element={<Privacy_Notice/>} />
        <Route path="/about" element={< About_page />} />

      </Routes>
      <ScrollUp />
      <Footer />
    </Router>
  );
};

export default App;
