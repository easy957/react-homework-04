import { ThreeDots } from 'react-loader-spinner';
import styles from './Loader.module.css';

export default function Loader({ color = 'white' }) {
  return <ThreeDots color={color} wrapperClass={styles.Wrapper} />;
}
