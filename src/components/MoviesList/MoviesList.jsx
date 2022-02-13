import MovieCard from 'components/MovieCard';
import styles from './MoviesList.module.css';

export default function MoviesList({ media }) {
  return (
    <ul className={styles.List}>
      {media &&
        media.map(el => (
          <li className={styles.Item} key={el.id}>
            <MovieCard movie={el} />
          </li>
        ))}
    </ul>
  );
}
