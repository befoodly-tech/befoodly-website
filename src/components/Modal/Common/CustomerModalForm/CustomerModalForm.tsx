import { useForm } from 'react-hook-form';
import { CustomerFieldValues } from '../../../../types/ApiActions';
import { Box, Button, TextField } from '@mui/material';
import styles from './CustomerModalForm.module.css';

interface CustomerModalFormProps {
  handleOnSignUp: (data: CustomerFieldValues) => void;
}

const CustomerModalForm = (props: CustomerModalFormProps) => {
  const { handleOnSignUp } = props;
  const form = useForm<CustomerFieldValues>();
  const { register, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(handleOnSignUp)}>
      <Box className={styles.enterTitle}>
        <label htmlFor="enterName" className={styles.enterLabel}>
          Enter Name
        </label>
        <TextField
          className={styles.enterInput}
          id="enterName"
          {...register('name', {
            required: {
              value: true,
              message: 'Name is required'
            }
          })}
        ></TextField>
      </Box>
      <Box className={styles.enterTitle}>
        <label htmlFor="enterEmail" className={styles.enterLabel}>
          Enter email
        </label>
        <TextField className={styles.enterInput} id="enterEmail" {...register('email')}></TextField>
      </Box>
      <Button type="submit" className={styles.createBtn} fullWidth>
        Create Account
      </Button>
    </form>
  );
};

export default CustomerModalForm;
