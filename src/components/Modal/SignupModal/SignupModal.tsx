import { Box, Button, CircularProgress, Modal, Typography } from '@mui/material';
import React, { useState } from 'react';
import SvgCancleIcon from '../../../ui/Icon/Cancle';
import styles from './SignupModal.module.css';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import ModalForm from '../Common/ModalForm/ModalForm';
import { CustomerFieldValues, OtpRequest } from '../../../types/ApiActions';
import { signUpUserApi, verifyOtpApi } from '../../../actions/LoginActions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CustomerModalForm from '../Common/CustomerModalForm/CustomerModalForm';

interface SignupModalProps {
  open: boolean;
  handleClose: () => void;
}

const SignupModal = (props: SignupModalProps) => {
  const [onSignIn, setOnSignIn] = useState(true);
  const dispatch = useAppDispatch();
  const { isLoading, isError, loginData, sessionData } = useAppSelector(state => state.login);

  const handleOnSignUp = (data: CustomerFieldValues) => {
    console.log(data);
    props.handleClose();
  };

  function handleOnVerify(data: OtpRequest): void {
    dispatch(verifyOtpApi(data));
    setOnSignIn(false);
  }

  function handleOnSendOtp(phoneNumber: string): void {
    dispatch(signUpUserApi(phoneNumber));
  }

  function handleSignUpClosed(): void {
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
          <Typography className={styles.signupLabel}>SignUp</Typography>
          <Box>
            <Button startIcon={<SvgCancleIcon />} onClick={() => handleSignUpClosed()} />
          </Box>
        </Box>
        <Box id="signup-modal-description">
          {onSignIn ? (
            <ModalForm handleOnSendOtp={handleOnSendOtp} handleOnVerify={handleOnVerify} />
          ) : (
            <CustomerModalForm handleOnSignUp={handleOnSignUp} />
          )}
        </Box>
        <ModalFooter />
      </Box>
    </Modal>
  );
};

export default SignupModal;
