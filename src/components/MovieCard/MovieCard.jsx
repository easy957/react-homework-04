import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  const getYear = date => {
    const dateObj = new Date(movie.first_air_date ?? movie.release_date);
    return dateObj.getFullYear();
  };
  return (
    <div className={styles.Container}>
      <img src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt="" />
      <div className={styles.Info}>
        <p className={styles.Title}>{movie.title ?? movie.original_name}</p>
        <p className={styles.Date}>{getYear()}</p>
      </div>
    </div>
  );
}
