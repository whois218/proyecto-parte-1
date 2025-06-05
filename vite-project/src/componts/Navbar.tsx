import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.logo}>
      <div className={styles.container}>
        <h1>3tour</h1>
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
