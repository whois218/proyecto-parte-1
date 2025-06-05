import { type ReactNode } from 'react';
import styles from './ProductCardContainerStyles.module.css';

type ProductCardContainerProps = {
  title: string;
  description: string;
  children: ReactNode;
};

function ProductCardContainer(props: ProductCardContainerProps) {
  const { title, description, children } = props;
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.productCardDiv}>{children}</div>
    </section>
  );
}

export default ProductCardContainer;
