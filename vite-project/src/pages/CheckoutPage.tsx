import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './CheckoutPage.module.css';

export default function CheckoutPage() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Gracias por tu compra, ${name}! Total: $${totalPrice.toFixed(2)}`);
    clearCart();
    navigate('/');
  };

  if (Object.keys(cart).length === 0) {
    return <h2>No hay productos en el carrito</h2>;
  }

  return (
    <form onSubmit={handleSubmit} className={styles.checkoutForm}>
      <h1>Checkout</h1>
      <p>Total a pagar: ${totalPrice.toFixed(2)}</p>

      <label>
        Nombre completo:
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>

      <label>
        Dirección:
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
      </label>

      <button type="submit">Finalizar compra</button>
    </form>
  );
}
