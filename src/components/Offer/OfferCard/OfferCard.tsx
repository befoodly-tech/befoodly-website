import { Box, Typography } from '@mui/material';
import styles from './OfferCard.module.css';

export interface OfferCardProps {
  disPercentage: number;
  disDescription: string;
  disIcon: JSX.Element;
  disRule: string;
  background: string;
}

const OfferCard = (props: OfferCardProps) => {
  return (
    <Box className={styles.cardOuter} style={{ background: props.background }}>
      <Box className={styles.cardVal}>
        <Typography className={styles.cardPer}>{props.disPercentage}%</Typography>
        <Typography className={styles.cardDesc}>{props.disDescription}</Typography>
        <Box className={styles.cardIcon}>{props.disIcon}</Box>
      </Box>
      <Typography className={styles.cardRule}>{props.disRule}</Typography>
    </Box>
  );
};

export default OfferCard;
