import { Alert, AlertTitle } from '@mui/material';
import styles from './Common.module.css';

const SuccessAlert = (props: { message: string }) => {
  return (
    <Alert severity="success">
      <AlertTitle>Success</AlertTitle>
      {props.message}
    </Alert>
  );
};

export default SuccessAlert;
