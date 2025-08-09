import { useParams } from 'react-router-dom';
import { useCart } from '../pages/CartContext';
import styles from './ProductDetail.module.css';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState('M');
  const [quantity, setQuantity] = useState(1);

  const { data: products, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await axios.get(`http://localhost:4000/products`);
      return data;
    },
  });

  if (isLoading) return <p>Cargando producto...</p>;

  const product = products?.find((p: any) => String(p.id) === id);

  if (!product) return <p>Producto no encontrado</p>;

  const image =
    product.image || product.src || 'http://localhost:4000/products';

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <img src={image} alt={product.title} className={styles.productImage} />
        <div>
          <button className={styles.closeButton} onClick={() => history.back()}>
            ×
          </button>
          <h2 className={styles.title}>{product.title}</h2>
          <p className={styles.description}>{product.description}</p>
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
