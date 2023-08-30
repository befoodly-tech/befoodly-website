import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MuiOtpInput } from 'mui-one-time-password-input';
import styles from './ModalForm.module.css';
import { OtpRequest } from '../../../../types/ApiActions';

interface ModalFormProps {
  handleOnSendOtp: (data: string) => void;
  handleOnVerify: (data: OtpRequest) => void;
}

const ModalForm = (props: ModalFormProps) => {
  const form = useForm<OtpRequest>();
  const { register, control, formState, handleSubmit } = form;
  const { errors } = formState;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showOtp, setShowOtp] = useState(false);

  const handleOnSendOTP = () => {
    props.handleOnSendOtp(phoneNumber);
    setShowOtp(true);
  }

  return (
    <form onSubmit={handleSubmit(props.handleOnVerify)} className={styles.loginForm}>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography>Enter Mobile Number</Typography>
        <Box className={styles.phoneInputArea}>
          <TextField
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            className={styles.enterNo}
            value={phoneNumber}
            InputProps={{
              startAdornment: <InputAdornment position="start">+91</InputAdornment>
            }}
            inputProps={{ maxLength: 10, type: 'tel' }}
            {...register('phoneNumber', {
              onChange: e => setPhoneNumber(e.target.value),
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
          <Button className={styles.sendOtp} onClick={handleOnSendOTP}>
            Send OTP
          </Button>
        </Box>
        <Typography className={styles.errors}>{errors.phoneNumber?.message}</Typography>
      </FormControl>
      {showOtp && (
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
      )}
    </form>
  );
};

export default ModalForm;
