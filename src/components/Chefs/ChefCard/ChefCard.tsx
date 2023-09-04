import { Typography, Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import styles from './ChefCard.module.css';
import { ChefData } from '../../../types/CommonType';
import { combineTwoStrings, convertBigNumbers } from '../../../utils/CommonUtils';
import StringTags from '../../Common/StringTags';
import { useState } from 'react';
import DetailModal from '../../Modal/DetailModal/DetailModal';

interface ChefCardProps {
  chefData: ChefData;
  bucketUrl: string;
}

const ChefCard = ({ chefData, bucketUrl }: ChefCardProps) => {
  const [openDetailModal, setOpenDetailModal] = useState(false);

  return (
    <Box className={styles.chefCard}>
      <Box
        component={'img'}
        className={styles.chefImg}
        src={combineTwoStrings(bucketUrl, chefData.imgUrl)}
        alt={chefData.name}
        onClick={() => setOpenDetailModal(true)}
      ></Box>
      <Typography className={styles.chefName}>{chefData.name}</Typography>
      <Box className={styles.review}>
        <StarIcon sx={{ color: '#15ca6a', height: 20 }} />
        <Typography className={styles.rating}>
          {Math.abs(chefData.feedback?.rating).toFixed(1)}/5
        </Typography>
        <Typography>({convertBigNumbers(chefData.feedback?.reviews)} reviews)</Typography>
      </Box>
      {chefData?.specialities?.length > 0 && (
        <>
          <StringTags labels={chefData?.specialities} />
        </>
      )}
      <DetailModal
        name={chefData?.name}
        description={chefData?.description}
        open={openDetailModal}
        category={'Veg'}
        tags={chefData?.specialities}
        onClose={() => setOpenDetailModal(false)}
      />
    </Box>
  );
};

export default ChefCard;
