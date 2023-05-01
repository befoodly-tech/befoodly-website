import { AppBar, Toolbar, Typography, Box, Button, useTheme, useMediaQuery } from '@mui/material';
import { Container } from '@mui/system';
import styles from './Navbar.module.css';
import NavDrawer from '../Common/NavDrawer';

const options = ['Home', 'About', 'Blog'];

interface NavbarProps {
  bgColor?: string;
}

//Handle Scroll
window.addEventListener('scroll', function (event) {
  event.preventDefault();
  const scr = this.scrollY;
  const appBar = this.document.getElementById('appbar');
  if (appBar) {
    if (scr > 5) {
      {
        appBar.style.backgroundColor = 'black';
        appBar.style.opacity = '80%';
      }
    } else {
      appBar.style.backgroundColor = 'transparent';
      appBar.style.opacity = '';
    }
  }
});

const Navbar = (props: NavbarProps) => {
  const { bgColor = 'transparent' } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      id="appbar"
      sx={{
        backgroundColor: `${bgColor}`,
        boxShadow: 'none',
        opacity: '100%'
      }}
    >
      <Container className={styles.navContainer}>
        <Toolbar className={styles.toolbar}>
          <Box>
            <Button variant="text" className={styles.logo} href="\">
              BeFoodly
            </Button>
          </Box>
          {isMobile ? (
            <Box>
              <NavDrawer options={options} />
            </Box>
          ) : (
            <Box>
              {options.map((option, index) => {
                return (
                  <Button className={styles.navButtom} href={option} key={index}>
                    {option}
                  </Button>
                );
              })}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
