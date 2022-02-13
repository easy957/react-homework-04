import { NavLink } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AppBar() {
  return (
    <header className={styles.Header}>
      <nav>
        <ul className={styles.NavList}>
          <li className={styles.NavList_item}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? styles.Link_active : styles.Link
              }
            >
              Home
            </NavLink>
          </li>
          <li className={styles.NavList_item}>
            <NavLink
              to="/search"
              className={({ isActive }) =>
                isActive ? styles.Link_active : styles.Link
              }
            >
              Search
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
