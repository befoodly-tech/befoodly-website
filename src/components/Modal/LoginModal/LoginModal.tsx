import { forwardRef, useRef } from 'react';

import {
  Box,
  Button,
  FormControl,
  InputAdornment,
  Modal,
  TextField,
  Typography,
  styled
} from '@mui/material';
import { MuiOtpInput, MuiOtpInputProps } from 'mui-one-time-password-input';
import Cancle from '../../../ui/Icon/Cancle';
import styles from './LoginModal.module.css';
import SvgPencilEdit from '../../../ui/Icon/PencilEdit';
import { Controller, useForm } from 'react-hook-form';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

interface FieldValues {
  phoneNumber: string;
  otp: string;
}

const LoginModal = (props: LoginModalProps) => {
  const form = useForm<FieldValues>();
  const { register, control, formState, handleSubmit } = form;
  const { errors } = formState;
  const formRef = useRef(null);

  function handleOnVerify(data: FieldValues): void {
    //console.log(data);
  }

  function handleOnSendOtp(): void {
    // if (ref.current) {
    // }
  }

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className={styles.loginModal}>
        <Box className={styles.login}>
          <Box id="modal-modal-title" className={styles.loginTitle}>
            <Typography className={styles.loginLabel}>Log in</Typography>
            <Typography>&nbsp;</Typography>
            <Typography>or</Typography>
            <Typography>&nbsp;</Typography>
            <Button>
              <Typography className={styles.createAccount}>Create a account</Typography>
            </Button>
          </Box>
          <Box>
            <Button startIcon={<Cancle />} onClick={props.handleClose} />
          </Box>
        </Box>
        <Box id="modal-modal-description">
          <form ref={formRef} onSubmit={handleSubmit(handleOnVerify)}>
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
                    disableUnderline: true,
                    startAdornment: <InputAdornment position="start">+91</InputAdornment>
                  }}
                  variant="filled"
                  InputLabelProps={{
                    style: {
                      padding: '24px',
                      color: '#696969',
                      fontFamily: 'Outfit',
                      fontSize: '16px',
                      fontStyle: 'normal',
                      fontWeight: '400',
                      lineHeight: '124%'
                    }
                  }}
                  {...register('phoneNumber', {
                    required: {
                      value: true,
                      message: 'Phone Number is required'
                    },
                    validate: {}
                  })}
                />
                <Button className={styles.sendOtp} onClick={handleOnSendOtp}>
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
        </Box>
        <Box className={styles.slogan}>
          <Box>
            <Typography className={styles.letsEat}>Let&#39;s Eat</Typography>
          </Box>
          <Box className={styles.homely}>
            <Typography className={styles.sloganColored}>Homely</Typography>
            <Typography className={styles.letsEat}>Food</Typography>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default LoginModal;
