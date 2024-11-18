import { AppBar, Container, Toolbar } from '@mui/material';
import styles from './Kitchen.module.css';

const Kitchen = () => {
  const bucketUrl = 'https://webapp-befoodly.s3.ap-south-1.amazonaws.com/kitchen-gallery/';

  const kitchenGallery = Array.from({ length: 33 }, (_, i) => i + 1);

  return (
    <>
      <AppBar sx={{ zIndex: 1, backgroundColor: 'black', padding: '16px 0', position: 'relative' }}>
        <Toolbar />
      </AppBar>
      <div className={styles.galleryContainer}>
        {kitchenGallery.map(index => (
          <img src={bucketUrl + index + '.jpg'} key={index} />
        ))}
      </div>
    </>
  );
};

export default Kitchen;
