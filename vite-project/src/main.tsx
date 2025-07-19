import { createRoot } from 'react-dom/client';
import './index.css';
import Inicio from './pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import { products } from './data/Product';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import {
  productosHotSale,
  prendas2025,
  pantalonesoff,
  conjuntos2025,
  shorts2025,
  prendasinsanas,
} from './data/Product';
import { CartProvider } from './pages/CartContext';
import NotFound from './pages/NotFound';

const allProducts = [
  ...products,
  ...prendas2025,
  ...productosHotSale,
  ...shorts2025,
  ...pantalonesoff,
  ...conjuntos2025,
  ...prendasinsanas,
];

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route
          path="/producto/:id"
          element={<ProductDetail allProducts={allProducts} />}
        />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
);
