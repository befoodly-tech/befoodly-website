import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import styles from './DishModal.module.css';
import SvgCancleIcon from '../../../ui/Icon/Cancle';
import SvgEllipse from '../../../ui/Icon/Ellipse';

interface DishModalProps {
  open: boolean;
  dishName: string;
  dishDescription: string;
  dishCategory: string;
  onClose: () => void;
}

const DishModal = (props: DishModalProps) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="food-modal-title"
      aria-describedby="food-modal-description"
    >
      <Box className={styles.modalBox}>
        <Box id="food-modal-title" className={styles.foodModalTitle}>
          <Typography className={styles.foodLable}>{props.dishName}</Typography>
          <Box>
            <Button startIcon={<SvgCancleIcon />} onClick={props.onClose} />
          </Box>
        </Box>
        <Box id="food-modal-description" className={styles.modalDescription}>
          <Typography className={styles.modalDescriptionTitle}>Details</Typography>
          <Typography className={styles.modalDescriptionSection}>
            {props.dishDescription}
          </Typography>
        </Box>
        <Paper className={styles.modalCategory}>
          <SvgEllipse />
          <Typography>{props.dishCategory}</Typography>
        </Paper>
      </Box>
    </Modal>
  );
};

export default DishModal;
