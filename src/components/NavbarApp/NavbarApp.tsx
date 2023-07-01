import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Paper
} from '@mui/material';
import styles from './NavbarApp.module.css';
import BefoodlyLogo from '../../assets/svgs/LogoBlack.svg';
import Search from '../../ui/Icon/Search/Search';
import HomeIcon from '../../ui/Icon/Home/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  height: '3.375rem',
  width: '44rem',
  lineHeight: '60px',
  paddingLeft: '16px',
  paddingRight: '16px'
}));
const NavbarApp = () => {
  return (
    <Box className={styles.head}>
      <Container className={styles.main}>
        <Box component={'img'} src={BefoodlyLogo} alt="Befoodly Logo"></Box>
        <Item>
          <Box className={styles.find}>
            <Button
              color="primary"
              variant="text"
              aria-haspopup="true"
              className={styles.place}
              startIcon={<HomeIcon />}
              endIcon={<KeyboardArrowDownIcon color="secondary" />}
            >
              <Box>
                <Typography color={'black'}>Home</Typography>
                <Typography color={'black'}>Bellandure</Typography>
              </Box>
            </Button>
            <Box className={styles.inputField}>
              <TextField
                variant="standard"
                placeholder="Search for home cooked food"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Search />
                    </InputAdornment>
                  ),
                  disableUnderline: true
                }}
                fullWidth
              ></TextField>
            </Box>
          </Box>
        </Item>
        <Box>
          <Button variant="contained" color="secondary">
            Login
          </Button>
          <Button variant="contained" color="secondary">
            SignUp
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NavbarApp;
