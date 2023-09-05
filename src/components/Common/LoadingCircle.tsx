import { Backdrop, CircularProgress } from '@mui/material';
import styles from './Common.module.css';

const LoadingCircle = (props: any) => {
  return (
    <Backdrop
      open={props?.isLoading}
      sx={{ color: '#969696', zIndex: theme => theme.zIndex.drawer + 1 }}
    >
      <CircularProgress className={styles.loadingBar} />
    </Backdrop>
  );
};

export default LoadingCircle;
