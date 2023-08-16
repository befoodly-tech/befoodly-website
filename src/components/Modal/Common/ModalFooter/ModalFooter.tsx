import { Box, Typography } from '@mui/material';
import styles from './ModalFooter.module.css';
const ModalFooter = () => {
  return (
    <Box className={styles.slogan}>
      <Box>
        <Typography className={styles.letsEat}>Let&#39;s Eat</Typography>
      </Box>
      <Box className={styles.homely}>
        <Typography className={styles.sloganColored}>Homely</Typography>
        <Typography className={styles.letsEat}>Food</Typography>
      </Box>
    </Box>
  );
};

export default ModalFooter;
