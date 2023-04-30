import { Divider, Drawer, IconButton, List, ListItem, ListItemText } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import styles from './Common.module.css';

interface NavDrawerProps {
  options: string[];
}

const NavDrawer = (props: NavDrawerProps) => {
  const { options } = props;
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <Drawer
        open={openDrawer}
        anchor="right"
        onClick={() => setOpenDrawer(false)}
        className={styles.drawerContainer}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: '50%',
            height: 'auto',
            padding: '24px',
            backgroundColor: 'black'
          }
        }}
      >
        <List className={styles.drawerList}>
          {options.map((option, index) => {
            return (
              <>
                <ListItem
                  onClick={() => setOpenDrawer(false)}
                  key={index}
                  className={styles.drawerListItem}
                >
                  <Link to={option} className={styles.drawerListItemLink}>
                    {option}
                  </Link>
                </ListItem>
                {index !== 2 && <Divider sx={{ borderColor: '#fafafa', borderSize: '1px' }} />}
              </>
            );
          })}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={styles.drawerMenu}>
        <MenuIcon className={styles.menuIcon} />
      </IconButton>
    </>
  );
};

export default NavDrawer;
