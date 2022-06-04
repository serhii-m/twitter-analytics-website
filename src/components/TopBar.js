import React, { useState } from 'react';

import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import topBarStyles from '../styles/topBarStyles';


const TopBar = () => {
  const [state, setState] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <Box sx={topBarStyles.list} role="presentation">
      <Typography variant="h4" align="center" sx={{ pt: 2.5, fontWeight: 700, textTransform: 'uppercase' }}>
        platform
      </Typography>
      <List>
        {['twitter'].map((text) => (
          <ListItem button key={text} sx={topBarStyles.listItem}
            onClick={toggleDrawer(!state)}
          >
            <ListItemText primaryTypographyProps={topBarStyles.listItemText} primary={text.toUpperCase()} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <AppBar>
        <Toolbar variant="dense" sx={topBarStyles.root}>
          <div>
            <IconButton edge="start" color="inherit" aria-label="menu" sx={{ ml: 0, mr: 4 }}
                        onClick={toggleDrawer(!state)}
            >
              <MenuIcon sx={{ width: 38, height: 38 }} />
            </IconButton>
            <Drawer
              open={state}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </div>
          <Typography variant="body1" color="inherit" component="div">
            <img src="images/mh-logo.svg" alt="logo"/>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;