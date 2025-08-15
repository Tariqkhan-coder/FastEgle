import { BrowserRouter, Route, Routes as RouterRoutes } from "react-router-dom";
import FactoringPage from "../pages/factoring/index";
import { PricesPage } from "../pages/prices";
import NotFound from "../components/NotFound";
import ScrollToTop from "../components/ScrollToTop";
import ScrollUp from "../components/ScrollUp";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouterRoutes>
        <Route path="/" element={<FactoringPage />} />
        <Route path="/prices" element={<PricesPage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      <ScrollUp />
    </BrowserRouter>
  );
};

export default AppRoutes;
