import { Alert, AlertTitle } from '@mui/material';
import styles from './Common.module.css';

const ErrorAlert = (props: { message: string }) => {
  return (
    <Alert severity="error">
      <AlertTitle>Error</AlertTitle>
      {props.message}
    </Alert>
  );
};

export default ErrorAlert;
