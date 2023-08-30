import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MuiOtpInput } from 'mui-one-time-password-input';
import styles from './EmailLoginForm.module.css';
import { OtpRequest } from '../../../../types/ApiActions';

interface EmailLoginFormProps {
  handleOnSendOtp: (email: string) => void;
  handleOnVerify: (data: OtpRequest) => void;
}

const EmailLoginForm = (props: EmailLoginFormProps) => {
  const form = useForm<OtpRequest>();
  const { control, formState, handleSubmit } = form;
  const { errors } = formState;
  const [email, setEmail] = useState('');

  return (
    <form onSubmit={handleSubmit(props.handleOnVerify)} className={styles.loginForm}>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography>Enter Your Email</Typography>
        <Box className={styles.phoneInputArea}>
          <TextField
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            className={styles.enterNo}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Button className={styles.sendOtp} onClick={() => props.handleOnSendOtp(email)}>
            Send OTP
          </Button>
        </Box>
        {/* <Typography className={styles.errors}>{errors.phoneNumber?.message}</Typography> */}
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

export default EmailLoginForm;
