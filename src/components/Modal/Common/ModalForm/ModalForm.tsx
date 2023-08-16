import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import SvgPencilEdit from '../../../../ui/Icon/PencilEdit';
import { MuiOtpInput } from 'mui-one-time-password-input';
import styles from './ModalForm.module.css';

interface ModalFormFieldProps {
  phoneNumber: string;
  otp: string;
}

interface ModalFormProps {
  handleOnSendOtp: () => void;
  handleOnVerify: (data: ModalFormFieldProps) => void;
}

const ModalForm = (props: ModalFormProps) => {
  const form = useForm<ModalFormFieldProps>();
  const { register, control, formState, handleSubmit } = form;
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(props.handleOnVerify)} className={styles.loginForm}>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography>
          Enter Mobile Number
          <SvgPencilEdit />
        </Typography>
        <Box className={styles.phoneInputArea}>
          <TextField
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            className={styles.enterNo}
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>
            }}
            inputProps={{ maxLength: 10, type: 'tel' }}
            {...register('phoneNumber', {
              required: {
                value: true,
                message: 'Phone Number is required'
              },
              validate: {
                minLength: v => v.length >= 10 || 'Min 10 digits are required',
                matchPattern: v => /^\d+$/.test(v) || 'Invalid Phone Number'
              }
            })}
          />
          <Button className={styles.sendOtp} onClick={props.handleOnSendOtp}>
            Send OTP
          </Button>
        </Box>
        <Typography className={styles.errors}>{errors.phoneNumber?.message}</Typography>
      </FormControl>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography>Enter OTP</Typography>
        <Box className={styles.phoneInputArea}>
          <Controller
            name="otp"
            control={control}
            rules={{ validate: value => value.length === 4 }}
            render={({ field, fieldState }) => (
              <Box>
                <MuiOtpInput id="otp" length={4} className={styles.otpInput} {...field} />
                {fieldState.invalid ? (
                  <Typography className={styles.errors}>OTP invalid</Typography>
                ) : null}
              </Box>
            )}
          />
          <Button type="submit" className={styles.sendOtp}>
            Verify
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default ModalForm;
