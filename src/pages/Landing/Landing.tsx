import { Container, Box } from '@mui/material';
import styles from './Landing.module.css';
import NavbarApp from '../../components/NavbarApp/NavbarApp';

const Landing = () => {
  return (
    <Box className={styles.main}>
      <NavbarApp />
    </Box>
  );
};

export default Landing;
