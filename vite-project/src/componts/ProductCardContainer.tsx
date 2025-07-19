import styles from './ProductCardContainerStyles.module.css';

type ProductCardContainerProps = {
  children: React.ReactNode;
};

function ProductCardContainer({ children }: ProductCardContainerProps) {
  return <div className={styles.container}>{children}</div>;
}

export default ProductCardContainer;
