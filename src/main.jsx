import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProductProvider } from "./contex/cart-context";
import Landing from "./pages/landingPage";
import Cart from "./pages/cart";
import { Navbar } from "./components/navbar";
import "./index.css"; // or './main.css'
import ProductDetail from "./pages/product-detail";
import Login from "./pages/AuthLogin";
import { AuthProvider } from "./contex/auth-context";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductProvider>
        <AuthProvider>
          <div className="flex flex-col min-h-screen">
            {/* Navbar stays on top */}
            <Navbar />

            {/* Main content grows and centers */}
            <main className="flex flex-grow justify-center items-center ">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="detail-view/:pid" element={<ProductDetail />} />
                <Route path="/auth/login" element={<Login />} />
              </Routes>
            </main>
          </div>
        </AuthProvider>
      </ProductProvider>
    </BrowserRouter>
  </StrictMode>
);
