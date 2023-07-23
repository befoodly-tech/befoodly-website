import { Box, Typography } from '@mui/material';
import styles from './Chefs.module.css';
import ChefsList from './ChefsList/ChefsList';

const allChefs = [
  {
    imgsrc: 'https://chefs-pictures-befoodly.s3.ap-south-1.amazonaws.com/ExamplChefImage.jpg',
    name: 'Mahthma Shetty',
    rating: 4.5,
    reviews: 12
  },
  {
    imgsrc: 'https://chefs-pictures-befoodly.s3.ap-south-1.amazonaws.com/ExamplChefImage.jpg',
    name: 'Mahthma Shetty',
    rating: 4.5,
    reviews: 12
  },
  {
    imgsrc: 'https://chefs-pictures-befoodly.s3.ap-south-1.amazonaws.com/ExamplChefImage.jpg',
    name: 'Mahthma Shetty',
    rating: 4.5,
    reviews: 12
  },
  {
    imgsrc: 'https://chefs-pictures-befoodly.s3.ap-south-1.amazonaws.com/ExamplChefImage.jpg',
    name: 'Mahthma Shetty',
    rating: 4.5,
    reviews: 12
  },
  {
    imgsrc: 'https://chefs-pictures-befoodly.s3.ap-south-1.amazonaws.com/ExamplChefImage.jpg',
    name: 'Mahthma Shetty',
    rating: 4.5,
    reviews: 12
  }
];

const Chefs = () => {
  return (
    <Box className={styles.mainSection}>
      <Box className={styles.chefsBox}>
        <Typography className={styles.popular}>Popular Cooks near you!</Typography>
        <Box>
          <ChefsList chefs={allChefs} />
        </Box>
      </Box>
    </Box>
  );
};

export default Chefs;
