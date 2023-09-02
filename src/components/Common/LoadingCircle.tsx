import { CircularProgress } from '@mui/material';
import styles from './Common.module.css';

const LoadingCircle = () => {
  return <CircularProgress className={styles.loadingBar} />;
};

export default LoadingCircle;
