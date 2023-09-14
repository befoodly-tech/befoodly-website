import { Box, Button, Modal, Paper, Typography } from '@mui/material';
import styles from './DetailModal.module.css';
import SvgCancleIcon from '../../../ui/Icon/Cancle';
import SvgEllipse from '../../../ui/Icon/Ellipse';
import StringTags from '../../Common/StringTags';

interface DetailModalProps {
  open: boolean;
  name: string;
  description: string;
  tags?: string[];
  category: string;
  onClose: () => void;
}

const DetailModal = (props: DetailModalProps) => {
  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="food-modal-title"
      aria-describedby="food-modal-description"
    >
      <Box className={styles.modalBox}>
        <Box id="food-modal-title" className={styles.foodModalTitle}>
          <Typography className={styles.foodLable}>{props.name}</Typography>
          <Box>
            <Button startIcon={<SvgCancleIcon />} onClick={props.onClose} />
          </Box>
        </Box>
        <Box id="food-modal-description" className={styles.modalDescription}>
          <Typography className={styles.modalDescriptionTitle}>Details</Typography>
          <Typography className={styles.modalDescriptionSection}>{props.description}</Typography>
        </Box>
        {props?.tags && props?.tags?.length > 0 && (
          <>
            <StringTags labels={props?.tags} />
          </>
        )}
        <Paper className={styles.modalCategory}>
          <SvgEllipse />
          <Typography>{props.category}</Typography>
        </Paper>
      </Box>
    </Modal>
  );
};

export default DetailModal;
