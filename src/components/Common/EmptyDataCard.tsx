import { Box, Typography } from '@mui/material';
import { ReactNode } from 'react';
import styles from './Common.module.css';

interface EmptyDataCardProps {
  message: string;
  icon: ReactNode;
}

const EmptyDataCard = (props: EmptyDataCardProps) => {
  return (
    <Box className={styles.emptyCard}>
      {props.icon}
      <Typography className={styles.textMessage}>{props.message}</Typography>
    </Box>
  );
};

export default EmptyDataCard;
