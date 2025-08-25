import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contex/cart-context";
import Landing from "./pages/landingPage";
import Cart from "./pages/cart";
import { Navbar } from "./components/navbar";
import "./index.css"; // or './main.css'
import ProductDetail from "./pages/product-detail";
import ProductCard from "./components/HorizontalCard/card";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="detail-view/:pid" element={<ProductDetail />} />
          <Route path="horizontal-view" element={<ProductCard />} />
        </Routes>
        <div className="relative size-32 ...">
          <div className="absolute inset-x-0 bottom-0 h-16 ...">the end</div>
        </div>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
