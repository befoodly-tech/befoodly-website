import { useForm } from 'react-hook-form';
import { CustomerFieldValues } from '../../../../types/ApiActions';
import { Box, Button, TextField } from '@mui/material';
import styles from './CustomerModalForm.module.css';
import { isValidEmail } from '../../../../utils/Validation';

interface CustomerModalFormProps {
  handleOnSignUp: (data: CustomerFieldValues) => void;
}

const CustomerModalForm = (props: CustomerModalFormProps) => {
  const { handleOnSignUp } = props;
  const form = useForm<CustomerFieldValues>();
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;

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
          error={!!errors?.name}
          helperText={errors?.name?.message}
        ></TextField>
      </Box>
      <Box className={styles.enterTitle}>
        <label htmlFor="enterEmail" className={styles.enterLabel}>
          Enter Email (Required for login)
        </label>
        <TextField
          className={styles.enterInput}
          id="enterEmail"
          {...register('email', {
            required: {
              value: true,
              message: 'Email is required'
            },
            validate: v => isValidEmail(v) || 'Invalid Email entered'
          })}
          error={!!errors?.email}
          helperText={errors?.email?.message}
        ></TextField>
      </Box>
      <Box className={styles.btnContainer}>
        <Button type="submit" className={styles.createBtn}>
          Create Account
        </Button>
      </Box>
    </form>
  );
};

export default CustomerModalForm;
