import { Typography, Box } from '@mui/material';
import styles from './ChefCard.module.css';

export interface ChefProps {
  imgsrc: string;
  name: string;
  rating: number;
  reviews: number;
}

const ChefCard = (props: ChefProps) => {
  return (
    <Box>
      <Box component={'img'} className={styles.chefImg} src={props.imgsrc} alt={props.name}></Box>
      <Box>
        <Box>
          <Typography className={styles.chefName}>{props.name}</Typography>
        </Box>
        <Box className={styles.review}>
          <Typography className={styles.rating}>{props.rating}/5</Typography>
          <Typography>({props.reviews} reviews)</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ChefCard;
