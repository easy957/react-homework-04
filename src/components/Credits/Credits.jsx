import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import Loader from 'components/Loader';
import { fetchCredits } from 'services/imdbAPI';
import styles from './Credits.module.css';

export default function Credits() {
  const { movieId } = useParams();
  const { data, isLoading, isSuccess } = useQuery(
    ['credits', movieId],
    fetchCredits
  );

  return (
    <>
      {isLoading && <Loader color="grey" />}
      {isSuccess && (
        <div className={styles.Wrapper}>
          <div>
            <h3 className={styles.Title}>Cast: </h3>
            <ul className={styles.List}>
              {data &&
                data.cast?.map((member, i) => (
                  <li key={i} className={styles.Item}>
                    <p>
                      {member.character} - <b>{member.name}</b>
                    </p>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3 className={styles.Title}>Crew: </h3>
            <ul className={styles.List}>
              {data &&
                data.crew
                  ?.sort((m, n) => n.popularity - m.popularity)
                  .map((member, i) => (
                    <li key={i} className={styles.Item}>
                      <p>
                        {member.job} - <b>{member.name}</b>
                      </p>
                    </li>
                  ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
