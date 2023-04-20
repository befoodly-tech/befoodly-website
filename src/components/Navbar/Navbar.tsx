import { AppBar, Toolbar, Typography, Box, Button } from '@mui/material';
import { Container } from '@mui/system';
import styles from './Navbar.module.css';

const options = ['Home', 'About', 'Blog'];

//Handle Scroll
window.addEventListener('scroll', function (event) {
  event.preventDefault();
  const scr = this.scrollY;
  const appBar = this.document.getElementById('appbar');
  if (appBar) {
    if (scr > 5) {
      {
        appBar.style.backgroundColor = 'black';
        appBar.style.opacity = '70%';
      }
    } else {
      appBar.style.backgroundColor = 'transparent';
      appBar.style.opacity = '';
    }
  }
});

const Navbar = () => {
  return (
    <AppBar
      id="appbar"
      sx={{
        backgroundColor: 'transparent',
        boxShadow: 'none',
        opacity: '100%'
      }}
    >
      <Container>
        <Toolbar className={styles.toolbar}>
          <Box>
            <Typography variant="h4" className={styles.logo}>
              BeFoodly
            </Typography>
          </Box>
          <Box className={styles.options}>
            {options.map((option, index) => {
              return (
                <Button href={option} key={index}>
                  {option}
                </Button>
              );
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
