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
import Search from '../../ui/Icon/Search';
import HomeIcon from '../../ui/Icon/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const NavbarApp = () => {
  return (
    <Box className={styles.head}>
      <Container className={styles.main}>
        <Box component={'img'} src={BefoodlyLogo} alt="Befoodly Logo"></Box>
        <Paper className={styles.find}>
          <Button
            color="primary"
            variant="text"
            className={styles.placeBtn}
            startIcon={<HomeIcon className={styles.placeLogo} />}
            endIcon={<KeyboardArrowDownIcon color="secondary" />}
          >
            <Box className={styles.place}>
              <Typography className={styles.placeName}>Home</Typography>
              <Typography noWrap className={styles.placeArea}>
                Bellandure, Bangalore
              </Typography>
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
        </Paper>
        <Box className={styles.checkin}>
          <Button className={styles.checkinBtn} color="primary">
            Login
          </Button>
          <Button className={styles.checkinBtn} color="primary">
            SignUp
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NavbarApp;
