import { useCart } from './CartContext';
import Navbar from '../componts/Navbar';
import styles from './CartPage.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';



export default function CartPage() {
  const navigate = useNavigate();
  const {
    cart,
    totalItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    totalPrice,
    clearCart,
  } = useCart();

  const [email, setEmail] = useState('usuario@example.com');
  const [paymentMethod, setPaymentMethod] = useState('Tarjeta de crédito');

  if (Object.keys(cart).length === 0) {
    return (
      <>
        <Navbar cartItemCount={totalItems} hideCart />
        <div className={styles.emptyCartContainer}>
          <h2 className={styles.emptyCart}>El carrito está vacío</h2>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar cartItemCount={totalItems} hideCart />
      <div className={styles.cartPageWrapper}>
        <div className={styles.cartContainer}>
          <div className={styles.cartItems}>
            <h1>Tu carrito</h1>
            <button className={styles.clearButton} onClick={clearCart}>
              Vaciar carrito
            </button>
            <ul className={styles.cartList}>
              {Object.values(cart).map(({ product, quantity }) => (
                <li key={product.id} className={styles.cartItem}>
                  <img
                    src={product.src}
                    alt={product.titulo}
                    className={styles.productImage}
                  />
                  <div className={styles.productDetails}>
                    <h3>{product.titulo}</h3>
                    <p>Precio: ${product.price}</p>
                    <div className={styles.quantityControls}>
                      <button onClick={() => decreaseQuantity(product.id)}>
                        -
                      </button>
                      <span>{quantity}</span>
                      <button onClick={() => increaseQuantity(product.id)}>
                        +
                      </button>
                    </div>
                    <button
                      className={styles.removeButton}
                      onClick={() => removeFromCart(product.id)}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.summaryBox}>
            <h2>Resumen</h2>
            <p>
              <strong>Total:</strong> ${totalPrice.toFixed(2)}
            </p>
            <p>
              <strong>Método de envío:</strong> Envío estándar (3-5 días)
            </p>

            <label className={styles.label}>
              <span>Correo:</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </label>

            <label className={styles.label}>
              <span>Método de pago:</span>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                className={styles.input}
              >
                <option>Tarjeta de crédito</option>
                <option>Débito</option>
                <option>Mercado Pago</option>
                <option>Transferencia</option>
              </select>
            </label>

            <button
              className={styles.checkoutButton}
              onClick={() => navigate('/checkout')}
            >
              Ir a pagar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
