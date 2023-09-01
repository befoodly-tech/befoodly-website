import { Typography } from '@mui/material';
import styles from './Common.module.css';

const ApiErrorMessage = (props: { message: string }) => {
  return <Typography className={styles.errorMessage}>{props.message}</Typography>;
};

export default ApiErrorMessage;
