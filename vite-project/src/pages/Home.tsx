import { Link } from 'react-router-dom';
import styles from './Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <div>
        <h1>Welcome to 3tour</h1>
        <Link to="/inicio">
          <button className={styles.button}>View New Drop</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
