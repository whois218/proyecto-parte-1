import styles from './Navbar.module.css';

type NavbarProps = {
  onCartToggle: () => void;
  cartItemCount: number;
};

function Navbar({ onCartToggle, cartItemCount }: NavbarProps) {
  return (
    <nav className={styles.logo}>
      <div className={styles.container}>
        <h1 className={styles.h1}>3tour</h1>
        <ul className={styles.links}>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Productos</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li>
            <button onClick={onCartToggle} className={styles.cartButton}>
              🛒
              {cartItemCount > 0 && (
                <span className={styles.badge}>{cartItemCount}</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;