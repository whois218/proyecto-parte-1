import React from 'react';
import styles from './Cart.module.css';

type CartItem = {
  id: string;
  titulo: string;
  price: number;
  quantity: number;
};

type CartProps = {
  items: CartItem[];
  onRemove: (id: string) => void;
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
};

const Cart: React.FC<CartProps> = ({
  items,
  onRemove,
  onIncrease,
  onDecrease,
}) => {
  const total = items.reduce(
    (acc, item) => acc + item.price * item.quantity, 0
  );
  return (
    <div className={styles['cart']}>
      <h3>Carrito</h3>
      {items.length === 0 ? (
        <p>No hay productos en el carrito</p>
      ) : (
        items.map((item) => (
          <div key={item.id}>
            <h4>{item.titulo}</h4>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button onClick={() => onIncrease(item.id)}>+</button>
            <button onClick={() => onDecrease(item.id)}>-</button>
            <button onClick={() => onRemove(item.id)}>quitar</button>
          </div>
        ))
      )}
      <h4>Total: ${total}</h4>
      <button onClick={() => alert('aura?')}>Pagar</button>
    </div>
  );
};

export default Cart;
