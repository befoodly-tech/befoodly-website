import { NewReleases, Verified } from '@mui/icons-material';
import { Dialog, DialogContent, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './Common.module.css';

interface ApiStatusDialogProps {
  isApiResponse: boolean;
  isSuccess?: boolean;
  message: string;
}

const ApiStatusDialog = (props: ApiStatusDialogProps) => {
  const { isApiResponse, isSuccess = true, message } = props;
  const [openDialog, setOpenDialog] = useState(isApiResponse);

  return (
    <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
      <DialogContent className={styles.apiStatusDialog}>
        {isSuccess ? (
          <Verified color="success" sx={{ width: 60, height: 60 }} />
        ) : (
          <NewReleases color="error" sx={{ width: 60, height: 60 }} />
        )}
        <Typography color={isSuccess ? 'success' : 'error'}>{message}</Typography>
      </DialogContent>
    </Dialog>
  );
};

export default ApiStatusDialog;
