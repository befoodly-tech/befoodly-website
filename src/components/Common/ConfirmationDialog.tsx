import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import styles from './Common.module.css';

interface ConfirmationDialogProps {
  open: boolean;
  handleClose: () => void;
  title: string;
  description: string;
  handleConfirm: () => void;
}

const ConfirmationDialog = (props: ConfirmationDialogProps) => {
  const { open, handleClose, title, description, handleConfirm } = props;

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent className={styles.dialogDescription}>{description}</DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={handleClose}>
          Go Back
        </Button>
        <Button variant="contained" color="success" onClick={handleConfirm} autoFocus>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationDialog;
