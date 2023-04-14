import { Typography } from '@mui/material';
import { lime, grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import FoodBackground from '../../assets/images/home-made-food.jpg';

const greetColor = lime[800];
const whiteCol = grey[100];

const Top = () => {
  return (
    <Box>
      <img
        src={FoodBackground}
        style={{
          width: '100vw',
          height: '80vh',
          filter: 'blur(2px)'
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          top: '40%',
          width: '100%'
        }}
      >
        <Typography
          variant="h2"
          sx={{ textAlign: 'center' }}
          fontFamily="League Spartan"
          color={whiteCol}
        >
          Eat Homely, Healthy Food
        </Typography>
        <Typography variant="h5" sx={{ textAlign: 'center' }} color={whiteCol}>
          Join us in our love for homemade food and drink
        </Typography>
      </Box>
      <Box height={100} textAlign="center">
        <Typography
          sx={{
            height: '100%',
            paddingTop: '50px'
          }}
          variant="h3"
          color={greetColor}
        >
          Hello There!
        </Typography>
      </Box>
    </Box>
  );
};

export default Top;
