import { Box, Button, Modal, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SvgCancleIcon from '../../../ui/Icon/Cancle';
import styles from './SignupModal.module.css';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import ModalForm from '../Common/ModalForm/ModalForm';
import { CustomerFieldValues, OtpRequest } from '../../../types/ApiActions';
import { signUpUserApi, verifyOtpApi } from '../../../actions/LoginActions';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import CustomerModalForm from '../Common/CustomerModalForm/CustomerModalForm';
import LoadingCircle from '../../Common/LoadingCircle';
import { editCustomerDataApi } from '../../../actions/CustomerActions';

interface SignupModalProps {
  open: boolean;
  handleClose: () => void;
}

const SignupModal = (props: SignupModalProps) => {
  const [onSignIn, setOnSignIn] = useState(true);
  const dispatch = useAppDispatch();
  const { isLoading, isError, loginData, sessionData } = useAppSelector(state => state.login);

  useEffect(() => {
    if (loginData?.data) {
      setOnSignIn(false);
    }
  }, [loginData]);

  const handleOnSignUp = (data: CustomerFieldValues) => {
    const customerData = loginData?.data?.customerData;
    dispatch(editCustomerDataApi({ customerId: customerData?.referenceId, body: data }));
    props.handleClose();
  };

  function handleOnVerify(data: OtpRequest): void {
    dispatch(verifyOtpApi(data));
  }

  function handleOnSendOtp(phoneNumber: string): void {
    dispatch(signUpUserApi(phoneNumber));
  }

  function handleSignUpClosed(): void {
    props.handleClose();
  }

  return (
    <>
      {isLoading && <LoadingCircle />}
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
              <ModalForm
                sessionData={sessionData}
                loginData={loginData}
                handleOnSendOtp={handleOnSendOtp}
                handleOnVerify={handleOnVerify}
              />
            ) : (
              <CustomerModalForm handleOnSignUp={handleOnSignUp} />
            )}
          </Box>
          <ModalFooter />
        </Box>
      </Modal>
    </>
  );
};

export default SignupModal;
