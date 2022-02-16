import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from './AppBar.module.css';

export default function AppBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className={styles.Header}>
      <nav className={styles.Nav}>
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
        <button
          type="button"
          onClick={() => {
            navigate(location.state || '/');
          }}
          className={styles.Link_back}
        >
          Go back
        </button>
      </nav>
    </header>
  );
}
