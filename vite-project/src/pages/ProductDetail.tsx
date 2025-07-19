import { useParams } from 'react-router-dom';
import { useCart } from '../pages/CartContext';
import {  type Product } from '../data/Product';
import styles from './ProductDetail.module.css';
import { useState } from 'react';

type Props = {
  allProducts: Product[];
};

export default function ProductDetail({ allProducts }: Props) {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = allProducts.find((p) => p.id === id);
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Producto no encontrado</p>;

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img
          src={product.src}
          alt={product.titulo}
          className={styles.productImage}
        />
        <div>
          <button className={styles.closeButton} onClick={() => history.back()}>
            ×
          </button>
          <h2 className={styles.title}>{product.titulo}</h2>
          <p className={styles.description}>{product.descripcion}</p>
          <p className={styles.price}>${product.price.toLocaleString()}</p>

          <div className={styles.sizeContainer}>
            <label>Talle:</label>
            <div className={styles.sizes}>
              {['S', 'M', 'L', 'XL'].map((size) => (
                <label key={size} className={styles.sizeOption}>
                  <input
                    type="radio"
                    name="size"
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                  />
                  {size}
                </label>
              ))}
            </div>
          </div>

          <div className={styles.quantityContainer}>
            <label>Cantidad:</label>
            <select
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            >
              {[1, 2, 3, 4, 5].map((q) => (
                <option key={q} value={q}>
                  {q}
                </option>
              ))}
            </select>
          </div>

          <button className={styles.buyButton} onClick={handleAddToCart}>
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}
