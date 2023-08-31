import { Box, Button, Modal, Typography } from '@mui/material';
import Cancle from '../../../ui/Icon/Cancle';
import styles from './LoginModal.module.css';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { logInUserApi, verifyOtpApi } from '../../../actions/LoginActions';
import EmailLoginForm from '../Common/EmailLoginForm/EmailLoginForm';
import { OtpRequest } from '../../../types/ApiActions';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

const LoginModal = (props: LoginModalProps) => {
  const dispatch = useAppDispatch();
  const { isLoading, isError, loginData, sessionData } = useAppSelector(state => state.login);

  function handleOnVerify(data: OtpRequest): void {
    dispatch(verifyOtpApi({ phoneNumber: '8755509017', otp: data.otp }));
  }

  function handleOnSendOtp(email: string): void {
    dispatch(logInUserApi(email));
  }

  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
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
            <Button>
              <Typography className={styles.createAccount}>Create a account</Typography>
            </Button>
          </Box>
          <Box>
            <Button startIcon={<Cancle />} onClick={props.handleClose} />
          </Box>
        </Box>
        <Box id="login-modal-description">
          <EmailLoginForm
            sessionData={sessionData}
            loginData={loginData}
            handleOnVerify={handleOnVerify}
            handleOnSendOtp={handleOnSendOtp}
          />
        </Box>
        <ModalFooter />
      </Box>
    </Modal>
  );
};

export default LoginModal;
