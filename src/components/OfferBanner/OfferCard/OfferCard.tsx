import { Box, Typography } from '@mui/material';
import styles from './OfferCard.module.css';

export interface OfferCardProps {
  disPercentage?: number;
  disRupee?: number;
  disDescription: string;
  disIcon: JSX.Element;
  disRule: string;
  background: string;
}

const OfferCard = (props: OfferCardProps) => {
  const { disPercentage, disRupee, disDescription, disIcon, disRule, background } = props;

  return (
    <Box className={styles.cardOuter} style={{ background: background }}>
      <Box className={styles.cardVal}>
        <Typography className={styles.cardPer}>
          {disPercentage ? `${disPercentage}%` : `₹${disRupee}`}
        </Typography>
        <Typography className={styles.cardDesc}>{disDescription}</Typography>
        <Box className={styles.cardIcon}>{disIcon}</Box>
      </Box>
      <Typography className={styles.cardRule}>{disRule}</Typography>
    </Box>
  );
};

export default OfferCard;
