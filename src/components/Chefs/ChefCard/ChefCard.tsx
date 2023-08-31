import { Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './ChefCard.module.css';
import { ChefData } from '../../../types/CommonType';
import { combineTwoStrings, convertBigNumbers } from '../../../utils/CommonUtils';
import StringTags from '../../Common/StringTags';

interface ChefCardProps {
  chefData: ChefData;
  bucketUrl: string;
}

const ChefCard = ({ chefData, bucketUrl }: ChefCardProps) => {
  return (
    <Box className={styles.chefCard}>
      <Box
        component={'img'}
        className={styles.chefImg}
        src={combineTwoStrings(bucketUrl, chefData.imgUrl)}
        alt={chefData.name}
      ></Box>
      <Box>
        <Typography className={styles.chefName}>{chefData.name}</Typography>
      </Box>
      <Box className={styles.review}>
        <StarIcon sx={{ color: '#feba10', height: 20 }} />
        <Typography className={styles.rating}>{chefData.feedback?.rating}/5</Typography>
        <Typography>({convertBigNumbers(chefData.feedback?.reviews)} reviews)</Typography>
      </Box>
      {chefData?.specialities?.length > 0 && (
        <Box>
          <StringTags labels={chefData?.specialities} />
        </Box>
      )}
    </Box>
  );
};

export default ChefCard;
