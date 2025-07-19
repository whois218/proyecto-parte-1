import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Product } from '../data/Product';

type CartItem = { product: Product; quantity: number };

type CartContextType = {
  cart: Record<string, CartItem>;
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Record<string, CartItem>>({});

  const addToCart = (product: Product) => {
    setCart((prev) => {
      const item = prev[product.id];
      if (item) {
        return {
          ...prev,
          [product.id]: { product, quantity: item.quantity + 1 },
        };
      }
      return { ...prev, [product.id]: { product, quantity: 1 } };
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  const increaseQuantity = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: { ...prev[id], quantity: prev[id].quantity + 1 },
    }));
  };

  const decreaseQuantity = (id: string) => {
    setCart((prev) => {
      const item = prev[id];
      if (!item) return prev;
      if (item.quantity === 1) {
        const copy = { ...prev };
        delete copy[id];
        return copy;
      }
      return { ...prev, [id]: { ...item, quantity: item.quantity - 1 } };
    });
  };

  const clearCart = () => setCart({});

  const totalItems = Object.values(cart).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  const totalPrice = Object.values(cart).reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export { CartContext };
export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
}
