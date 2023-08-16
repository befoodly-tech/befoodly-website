import { Box, Button, Modal, Typography } from '@mui/material';
import Cancle from '../../../ui/Icon/Cancle';
import styles from './LoginModal.module.css';
import ModalFooter from '../Common/ModalFooter/ModalFooter';
import ModalForm from '../Common/ModalForm/ModalForm';

interface LoginModalProps {
  open: boolean;
  handleClose: () => void;
}

interface LoginFieldValues {
  phoneNumber: string;
  otp: string;
}

const LoginModal = (props: LoginModalProps) => {
  function handleOnVerify(data: LoginFieldValues): void {
    // console.log(data);
  }

  function handleOnSendOtp(): void {}

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
          <ModalForm handleOnVerify={handleOnVerify} handleOnSendOtp={handleOnSendOtp} />
        </Box>
        <ModalFooter />
      </Box>
    </Modal>
  );
};

export default LoginModal;
