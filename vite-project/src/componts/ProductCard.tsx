import styles from './ProductCardStyles.module.css';

type ProductCardProps = {
  src: string;
  titulo: string;
  descripcion: string;
  price?: number;
};

function ProductCard(props: ProductCardProps) {
  const { src, titulo, descripcion, price } = props;

  return (
    <article className={styles.container}>
      <img className={styles.img} src={src} />
      <div className={styles.content}>
        <h2 className={styles.title}>{titulo}</h2>
        <p className={styles.description}>{descripcion}</p>
        <p className={styles.price}>${price}</p>
        <button className={styles.button}>Comprar</button>
      </div>
    </article>
  );
}

export default ProductCard;
