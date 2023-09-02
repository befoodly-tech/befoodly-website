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
  useMediaQuery
} from '@mui/material';
import styles from './NavbarApp.module.css';
import BefoodlyLogo from '../../assets/svgs/LogoBlack.svg';
import Search from '../../ui/Icon/Search';
import HomeIcon from '../../ui/Icon/Home';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useEffect, useState } from 'react';
import LoginModal from '../Modal/LoginModal/LoginModal';
import SignupModal from '../Modal/SignupModal/SignupModal';
import Panda from '../../assets/images/Panda.png';
import { useNavigate } from 'react-router-dom';
import { Location } from '../../types/CommonType';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchCustomerDataApi } from '../../actions/CustomerActions';
import LoadingCircle from '../Common/LoadingCircle';
import { theme } from '../../ui/theme';

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

interface NavbarAppProps {
  customerId: string;
  session: string;
}

const locations: Location[] = [{ id: 1, title: 'Home', address: 'Bellandur, Bangalore' }];

const buttons: string[] = ['Login', 'SignUp'];

const NavbarApp = (props: NavbarAppProps) => {
  const [activeOption, setActiveOption] = useState<Location | undefined>(locations[0]);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { isLoggedIn, customerData, isLoading, isError } = useAppSelector(state => state.user);

  useEffect(() => {
    if (props.customerId?.length > 0) {
      dispatch(fetchCustomerDataApi(props.customerId));
    }
  }, []);
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down(1400));

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

  function handleSignupModalClose(): void {
    setOpenSignUpModal(false);
  }

  function handleOnOpen(button: string): void {
    if (button == 'Login') {
      setOpenLoginModal(true);
    } else if (button == 'SignUp') {
      setOpenSignUpModal(true);
    }
  }

  function onProfileClicked(): void {
    navigate('/app/profile', { state: customerData?.data });
  }

  const forUserLoggedIn = isLoggedIn ? (
    <Button onClick={onProfileClicked}>
      <Box component={'img'} className={styles.profileImg} src={Panda} alt="Profile Image"></Box>
      <Typography color={'#696969'}>
        {customerData?.data ? customerData?.data?.name : 'Foodie'}
      </Typography>
    </Button>
  ) : (
    <Box className={styles.checkin}>
      {buttons.map(button => (
        <Button
          key={button}
          onClick={() => handleOnOpen(button)}
          className={styles.checkinBtn}
          color="primary"
        >
          {button}
        </Button>
      ))}
    </Box>
  );
  const forMobileUser = isMobile ? (
    <Box className={styles.main}>
      <Box className={styles.mobileFlex}>
        <Button onClick={() => navigate('/app')}>
          <Box component={'img'} src={BefoodlyLogo} alt="Befoodly Logo"></Box>
        </Button>
        {forUserLoggedIn}
      </Box>
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
            {isMobile ? (
              ''
            ) : (
              <Typography noWrap className={styles.placeArea}>
                {activeOption?.address}
              </Typography>
            )}
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
            placeholder={isMobile ? 'Search for food' : 'Search for home cooked meal'}
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
    </Box>
  ) : (
    <Box className={styles.main}>
      <Button onClick={() => navigate('/app')}>
        <Box component={'img'} src={BefoodlyLogo} alt="Befoodly Logo"></Box>
      </Button>
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
            {isMobile || isTablet ? (
              ''
            ) : (
              <Typography noWrap className={styles.placeArea}>
                {activeOption?.address}
              </Typography>
            )}
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
              {location?.address}
            </MenuItem>
          ))}
        </StyledMenu>
        <Box className={styles.inputField}>
          <TextField
            variant="standard"
            placeholder={isMobile ? 'Search for food' : 'Search for home cooked meal'}
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
      {forUserLoggedIn}
    </Box>
  );

  return (
    <Box className={styles.head}>
      {isLoading && <LoadingCircle />}
      <Container>{forMobileUser}</Container>
      <LoginModal open={openLoginModal} handleClose={handleLoginModalClose} />
      <SignupModal open={openSignUpModal} handleClose={handleSignupModalClose} />
    </Box>
  );
};

export default NavbarApp;
