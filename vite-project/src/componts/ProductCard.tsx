import styles from './ProductCardStyles.module.css';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  src: string;
  titulo: string;
  descripcion: string;
  price?: number;
  onAddToCart: () => void;
  onRemoveFromCart?: () => void;
  isInCart?: boolean;
  id: string;
};

function ProductCard({
  src,
  titulo,
  descripcion,
  price,
  onAddToCart,
  onRemoveFromCart,
  isInCart,
  id,
}: ProductCardProps) {
  return (
    <article className={styles.container}>
      <Link to={`/producto/${id}`}>
        <img className={styles.img} src={src} />
        <div className={styles.content}>
          <h2 className={styles.title}>{titulo}</h2>
          <p className={styles.description}>{descripcion}</p>
          <p className={styles.price}>${price}</p>
        </div>
      </Link>

      {isInCart ? (
        <button onClick={onRemoveFromCart} className={styles.button}>
          Quitar compra
        </button>
      ) : (
        <button onClick={onAddToCart} className={styles.button}>
          Comprar
        </button>
      )}
    </article>
  );
}

export default ProductCard;
