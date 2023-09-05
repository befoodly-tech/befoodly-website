import { Box, Button, FormControl, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MuiOtpInput } from 'mui-one-time-password-input';
import styles from './EmailLoginForm.module.css';
import { GenericApiResponse, OtpRequest } from '../../../../types/ApiActions';
import { useAppDispatch } from '../../../../store/hooks';
import { removeLoginErrorData } from '../../../../features/loginSlice';
import { isValidEmail } from '../../../../utils/Validation';
import { ChevronRight } from '@mui/icons-material';

interface EmailLoginFormProps {
  sessionData: GenericApiResponse;
  loginData: GenericApiResponse;
  handleOnSendOtp: (email: string) => void;
  handleOnVerify: (data: OtpRequest) => void;
}

const EmailLoginForm = (props: EmailLoginFormProps) => {
  const form = useForm<OtpRequest>();
  const { setError, control, handleSubmit } = form;
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useAppDispatch();

  const handleOnChangeEmail = (data: string) => {
    setEmail(data);
    if (!data) {
      setEmailError('Email is required');
    } else if (!isValidEmail(data)) {
      setEmailError('Invalid Email entered');
    } else {
      setEmailError('');
    }
  };

  useEffect(() => {
    if (props.loginData?.errorMessage) {
      setError('otp', {
        type: 'manual',
        message: props.loginData?.errorMessage
      });
      dispatch(removeLoginErrorData());
    }
  }, [props.loginData]);

  return (
    <form onSubmit={handleSubmit(props.handleOnVerify)} className={styles.loginForm}>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography className={styles.inputLabel}>Enter Your Email</Typography>
        <Box className={styles.phoneInputArea}>
          <TextField
            id="standard-start-adornment"
            sx={{ m: 1, width: '25ch' }}
            className={styles.enterNo}
            value={email}
            onChange={e => handleOnChangeEmail(e.target.value)}
            error={!!emailError}
            helperText={emailError}
            required
          />
          <Button
            className={styles.sendOtp}
            disabled={!email}
            onClick={() => props.handleOnSendOtp(email)}
          >
            Send OTP
            <ChevronRight sx={{ color: '#191919' }} />
          </Button>
        </Box>
      </FormControl>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography className={styles.inputLabel}>Enter OTP</Typography>
        <Box className={styles.phoneInputArea}>
          <Controller
            name="otp"
            control={control}
            rules={{ validate: value => value.length === 4 }}
            render={({ field, fieldState }) => (
              <Box>
                <MuiOtpInput id="otp" length={4} className={styles.otpInput} {...field} />
                {fieldState.invalid ? (
                  <Typography className={styles.errors}>Invalid OTP</Typography>
                ) : null}
              </Box>
            )}
          />
          <Button type="submit" className={styles.sendOtp}>
            Verify
            <ChevronRight sx={{ color: '#191919' }} />
          </Button>
        </Box>
      </FormControl>
    </form>
  );
};

export default EmailLoginForm;
