import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <AppBar style={{ backgroundColor: 'black', boxShadow: 'none' }}>
      <Container>
        <Toolbar>
          <Typography className={styles.logo}>BeFoodly</Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end',
              gap: '10px'
            }}
          >
            <Button sx={{ color: 'white' }}>Home</Button>
            <Button sx={{ color: 'white' }}>About</Button>
            <Button sx={{ color: 'white' }}>Blog</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
