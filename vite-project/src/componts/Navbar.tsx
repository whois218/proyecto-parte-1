import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

type NavbarProps = {
  cartItemCount: number;
  hideCart?: boolean;
};

function Navbar({ cartItemCount, hideCart = false }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <h1 className={styles.logo}>3tour</h1>
        <ul className={styles.links}>
          <li>
            <Link to="/Home">Inicio</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          {!hideCart && (
            <li>
              <Link to="/carrito" className={styles.cartButton}>
                🛒
                {cartItemCount > 0 && (
                  <span className={styles.badge}>{cartItemCount}</span>
                )}
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
