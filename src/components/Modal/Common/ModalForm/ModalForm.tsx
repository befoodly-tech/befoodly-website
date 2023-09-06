import { Box, Button, FormControl, InputAdornment, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { MuiOtpInput } from 'mui-one-time-password-input';
import styles from './ModalForm.module.css';
import { GenericApiResponse, OtpRequest } from '../../../../types/ApiActions';
import { isValidPhoneNumber } from '../../../../utils/Validation';
import { ChevronRight } from '@mui/icons-material';
import { useAppDispatch } from '../../../../store/hooks';
import { removeLoginErrorData, removeSessionErrorData } from '../../../../features/loginSlice';

interface ModalFormProps {
  sessionData: GenericApiResponse;
  loginData: GenericApiResponse;
  handleOnSendOtp: (data: string) => void;
  handleOnVerify: (data: OtpRequest) => void;
}

const ModalForm = (props: ModalFormProps) => {
  const form = useForm<OtpRequest>();
  const { register, setError, control, formState, handleSubmit } = form;
  const { errors } = formState;
  const [showOtp, setShowOtp] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (props.sessionData?.errorMessage) {
      setError('phoneNumber', {
        type: 'manual',
        message: props.sessionData?.errorMessage
      });
      dispatch(removeSessionErrorData());
    }
  }, [props.sessionData]);

  useEffect(() => {
    if (props.loginData?.errorMessage) {
      setError('otp', {
        type: 'manual',
        message: props.loginData?.errorMessage
      });
      dispatch(removeLoginErrorData());
    }
  }, [props.loginData]);

  const handleOnSubmit = (data: OtpRequest) => {
    if (isValidPhoneNumber(data?.phoneNumber) && data.phoneNumber && !data?.otp) {
      props.handleOnSendOtp(data?.phoneNumber);
      setShowOtp(true);
    }
    if (data?.otp) {
      props.handleOnVerify(data);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)} className={styles.loginForm}>
      <FormControl className={styles.phoneInput} defaultValue={''} required>
        <Typography className={styles.inputLabel}>Enter Mobile Number</Typography>
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
              validate: v => isValidPhoneNumber(v) || 'Phone Number is Invalid'
            })}
            error={!!errors?.phoneNumber}
            helperText={errors?.phoneNumber?.message}
          />
          <Button type="submit" className={styles.sendOtp}>
            Send OTP
            <ChevronRight sx={{ color: '#191919' }} />
          </Button>
        </Box>
      </FormControl>
      {showOtp && props.sessionData?.data && (
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
      )}
    </form>
  );
};

export default ModalForm;
