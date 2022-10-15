import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { PriceList } from "./components/PriceList";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="pricelist" element={<PriceList />} />
      </Routes>
    </Router>
  </StrictMode>
);
