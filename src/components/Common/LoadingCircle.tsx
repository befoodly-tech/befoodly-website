import { Box, CircularProgress } from '@mui/material';
import styles from './Common.module.css';

const LoadingCircle = () => {
  return (
    <Box className={styles.loadingBar}>
      <CircularProgress />
    </Box>
  );
};

export default LoadingCircle;
