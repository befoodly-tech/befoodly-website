import {
  Box,
  Container,
  TextField,
  Button,
  Typography,
  InputAdornment,
  Paper,
  styled,
  MenuProps,
  Menu,
  alpha,
  MenuItem,
  useTheme,
  useMediaQuery
} from '@mui/material';
import styles from './NavbarApp.module.css';
import BefoodlyLogo from '../../assets/svgs/LogoBlack.svg';
import Search from '../../ui/Icon/Search';
import HomeIcon from '../../ui/Icon/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import NavDrawer from '../Common/NavDrawer';
import LoginModal from '../Modal/LoginModal/LoginModal';

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right'
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right'
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 230,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));

interface Location {
  id: number;
  title: string;
  address: string;
}

const locations: Location[] = [
  { id: 1, title: 'Home', address: 'Bellandure, Bangalore' },
  { id: 2, title: 'Office', address: 'Manesar, Bangalore' }
];

const buttons: string[] = ['Login', 'SignUp'];

const NavbarApp = () => {
  const [activeOption, setActiveOption] = useState<Location | undefined>(locations[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  function handleOnOptionClicked(id: number): void {
    setActiveOption(locations.find(location => location.id === id));
    handleClose();
  }

  function handleLoginModalClose(): void {
    setOpenLoginModal(false);
  }

  function handleOnRegistering(button: string): void {
    if (button == 'Login') {
      setOpenLoginModal(true);
    } else if (button == 'SignUp') {
      setOpenSignUpModal(true);
    }
  }

  return (
    <Box className={styles.head}>
      <Container className={styles.main}>
        <Box component={'img'} src={BefoodlyLogo} alt="Befoodly Logo"></Box>
        <Paper className={styles.find}>
          <Button
            color="primary"
            variant="text"
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            className={styles.placeBtn}
            startIcon={<HomeIcon className={styles.placeLogo} />}
            endIcon={<KeyboardArrowDownIcon color="secondary" />}
          >
            <Box className={styles.place}>
              <Typography className={styles.placeName}>{activeOption?.title}</Typography>
              <Typography noWrap className={styles.placeArea}>
                {activeOption?.address}
              </Typography>
            </Box>
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button'
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            {locations.map(location => (
              <MenuItem
                key={location.id}
                onClick={() => handleOnOptionClicked(location.id)}
                disableRipple
              >
                {location.title}
              </MenuItem>
            ))}
          </StyledMenu>
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
        {isMobile ? (
          <Box>
            <NavDrawer options={buttons} lightTheme />
          </Box>
        ) : (
          <Box className={styles.checkin}>
            {buttons.map((button, index) => (
              <Button
                key={index}
                onClick={() => handleOnRegistering(button)}
                className={styles.checkinBtn}
                color="primary"
              >
                {button}
              </Button>
            ))}
          </Box>
        )}
      </Container>
      <LoginModal open={openLoginModal} handleClose={handleLoginModalClose} />
    </Box>
  );
};

export default NavbarApp;
