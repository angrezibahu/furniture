import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ProductListing from "@/pages/ProductListing";
import ProductDetail from "@/pages/ProductDetail";
import Returns from "@/pages/Returns";

function App() {
  return (
    <BrowserRouter basename="/furniture">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/returns" element={<Returns />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
