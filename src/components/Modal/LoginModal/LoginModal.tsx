import { Box, Button, Modal, Typography } from '@mui/material';
import Cancle from '../../../ui/Icon/Cancle';
import styles from './LoginModal.module.css';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logInUserApi, verifyOtpApi } from '../../../actions/LoginActions';
import EmailLoginForm from '../Common/EmailLoginForm/EmailLoginForm';
import { OtpRequest } from '../../../types/ApiActions';
import LoadingCircle from '../../Common/LoadingCircle';
import { isValidEmail } from '../../../utils/Validation';
import { useEffect } from 'react';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
  hadleOpenSignUp: () => void;
}

const LoginModal = (props: LoginModalProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, loginData, sessionData } = useAppSelector(state => state.login);

  useEffect(() => {
    if (loginData?.data) {
      props.handleClose();
    }
  }, [loginData]);

  function handleOnVerify(data: OtpRequest): void {
    dispatch(verifyOtpApi({ phoneNumber: sessionData?.data?.phoneNumber, otp: data.otp }));
  }

  function handleOnSendOtp(email: string): void {
    if (isValidEmail(email)) {
      dispatch(logInUserApi(email));
    }
  }

  return (
    <>
      {<LoadingCircle isLoading={isLoading} />}
      <Modal
        open={props.open}
        onClose={props.handleClose}
        sx={{ overflowY: 'scroll' }}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
      >
        <Box className={styles.loginModal}>
          <Box className={styles.login}>
            <Box id="login-modal-title" className={styles.loginTitle}>
              <Typography className={styles.loginLabel}>Log in</Typography>
              <Typography>&nbsp;</Typography>
              <Typography>or</Typography>
              <Typography>&nbsp;</Typography>
              <Button className={styles.createAccount} onClick={props.hadleOpenSignUp}>
                Create an account
              </Button>
            </Box>
            <Box>
              <Button startIcon={<Cancle />} onClick={props.handleClose} />
            </Box>
          </Box>
          <EmailLoginForm
            sessionData={sessionData}
            loginData={loginData}
            handleOnVerify={handleOnVerify}
            handleOnSendOtp={handleOnSendOtp}
          />
          <ModalFooter />
        </Box>
      </Modal>
    </>
  );
};

export default LoginModal;
