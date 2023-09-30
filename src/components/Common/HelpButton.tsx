import { Button, Typography } from '@mui/material';
import styles from './Common.module.css';

const HelpButton = (props: any) => {
  return (
    <div className={styles.helpButtonContainer}>
      <Typography color="error" className={styles.helpText}>
        *Click this button for immediate help
      </Typography>
      <Button variant="contained" color="error" className={styles.helpButton}>
        Call For Help?
      </Button>
    </div>
  );
};

export default HelpButton;
