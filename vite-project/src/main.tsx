import { createRoot } from 'react-dom/client';
import './index.css';
import Inicio from './pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
import Home from './pages/Home';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartProvider } from './pages/CartContext';
import NotFound from './pages/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import CreateProduct from './pages/CreateProduct'




const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
  <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/producto/:id" element={<ProductDetail />} />
        <Route path="/carrito" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFound />} /> 
        <Route path="/crear-producto" element={<CreateProduct/>} />
      </Routes>
    </BrowserRouter>
  </CartProvider>
  </QueryClientProvider>
);
