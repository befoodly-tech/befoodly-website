import { Box, CircularProgress } from '@mui/material';
import styles from './Common.module.css';

const DataLoadingCircle = ({ isLoading }: any) => {
  return (
    <Box className={styles.dataLoadingCircle}>
      {isLoading && <CircularProgress color="success" />}
    </Box>
  );
};

export default DataLoadingCircle;
