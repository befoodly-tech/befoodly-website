import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import styles from './Navbar.module.css';

const options = ['Home', 'About', 'Blog'];

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <Container>
        <Toolbar className={styles.toolbar}>
          <Box>
            <Typography variant="h4" className={styles.logo}>
              BeFoodly
            </Typography>
          </Box>
          <Box className={styles.options}>
            {options.map((option, index) => {
              return <Button key={index}>{option}</Button>;
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
