import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import SvgCancleIcon from '../../../ui/Icon/Cancle';
import styles from './SignupModal.module.css';
import { useForm } from 'react-hook-form';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import ModalForm from '../Common/ModalForm/ModalForm';

interface SignupModalProps {
  open: boolean;
  handleClose: () => void;
}

interface SignUpFieldValues {
  name: string;
  email: string;
}

interface SigninFieldValues {
  phoneNumber: string;
  otp: string;
}

const SignupModal = (props: SignupModalProps) => {
  const form = useForm<SignUpFieldValues>();
  const { register, control, formState, handleSubmit } = form;
  const { errors } = formState;
  const [onSignIn, setOnSignIn] = useState(false);

  const handleOnSignUp = (data: SignUpFieldValues) => {
    // console.log(data);
    setOnSignIn(true);
  };

  function handleVerify(data: SigninFieldValues): void {
    // console.log(data);
  }

  function handleSendOtp(): void {}
  function handleSignUpClosed(): void {
    setOnSignIn(false);
    props.handleClose();
  }

  return (
    <Modal
      open={props.open}
      onClose={() => handleSignUpClosed()}
      aria-labelledby="signup-modal-title"
      aria-describedby="signup-modal-description"
    >
      <Box className={styles.signupModal}>
        <Box id="signup-modal-title" className={styles.signupTitle}>
          <Typography className={styles.signupLable}>SignUp</Typography>
          <Box>
            <Button startIcon={<SvgCancleIcon />} onClick={() => handleSignUpClosed()} />
          </Box>
        </Box>
        <Box id="signup-modal-description" className={styles.signUpDescription}>
          {onSignIn ? (
            <ModalForm handleOnSendOtp={handleSendOtp} handleOnVerify={handleVerify} />
          ) : (
            <form onSubmit={handleSubmit(handleOnSignUp)}>
              <Box className={styles.enterTitle}>
                <label htmlFor="enterName" className={styles.enterLable}>
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
                <label htmlFor="enterEmail" className={styles.enterLable}>
                  Enter email
                </label>
                <TextField
                  className={styles.enterInput}
                  id="enterEmail"
                  {...register('email')}
                ></TextField>
              </Box>
              <Button type="submit" className={styles.createBtn} fullWidth>
                Create Account
              </Button>
            </form>
          )}
        </Box>
        <ModalFooter />
      </Box>
    </Modal>
  );
};

export default SignupModal;
