import styles from './ProductCardStyles.module.css';
import { Link } from 'react-router-dom';

type ProductCardProps = {
  image: string;
  title: string;
  description: string;
  price?: number;
  onAddToCart: () => void;
  onRemoveFromCart?: () => void;
  isInCart?: boolean;
  id: string;
};

function ProductCard({
  image,
  title,
  description,
  price,
  onAddToCart,
  onRemoveFromCart,
  isInCart,
  id,
}: ProductCardProps) {
  return (
    <article className={styles.container}>
      <Link to={`/producto/${id}`}>
        <img className={styles.img} src={image} />
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.description}>{description}</p>
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