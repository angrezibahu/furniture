import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "@/pages/Index";
import ProductListing from "@/pages/ProductListing";
import ProductDetail from "@/pages/ProductDetail";

function App() {
  return (
    <BrowserRouter basename="/furniture">
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
