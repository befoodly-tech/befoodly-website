import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import Logo from '../../assets/svgs/LogoBlack.svg';
import styles from './NavbarApp.module.css';
import Menu, { MenuProps } from '@mui/material/Menu';
import { styled, alpha } from '@mui/material/styles';
import { useState } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import HomeIcon from '../../ui/Icon/Home';
import InputAdornment from '@mui/material/InputAdornment';
import Search from '../../ui/Icon/Search';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  //   textAlign: 'center',
  //color: theme.palette.text.secondary,
  height: 60,
  lineHeight: '60px',
  paddingLeft: '16px',
  paddingRight: '16px'
}));

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
    // borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    //color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    // boxShadow:
    //   'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0'
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 16,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5)
      },
      '&:active': {
        // backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity)
      }
    }
  }
}));

const NavbarApp = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box className={styles.nav}>
        <Box component="img" className={styles.logo} alt="The house from the offer." src={Logo} />
        <Box>
          <Item elevation={2}>
            <Button
              id="options-button"
              aria-controls={open ? 'demo-customized-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              variant="text"
              color="primary"
              disableElevation
              onClick={handleClick}
              startIcon={<HomeIcon />}
              endIcon={<KeyboardArrowDownIcon />}
            >
              <Box className={styles.place}>
                <Box>
                  <Typography>Home</Typography>
                </Box>
                <Box>
                  <Typography>Bellandur, Bangalore</Typography>
                </Box>
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
              <MenuItem onClick={handleClose} disableRipple>
                <EditIcon />
                Edit
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <FileCopyIcon />
                Duplicate
              </MenuItem>
              <Divider sx={{ my: 0.5 }} />
              <MenuItem onClick={handleClose} disableRipple>
                <ArchiveIcon />
                Archive
              </MenuItem>
              <MenuItem onClick={handleClose} disableRipple>
                <MoreHorizIcon />
                More
              </MenuItem>
            </StyledMenu>
            <TextField
              variant="standard"
              className={styles.inputField}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
                disableUnderline: true
              }}
              placeholder="Search for home cooked food"
            ></TextField>
          </Item>
        </Box>
      </Box>
    </>
  );
};

export default NavbarApp;
