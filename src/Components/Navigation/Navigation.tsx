import React from 'react';
import {navigationStyle} from "./navigation-style";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


function Navigation() {
  
  const classes = navigationStyle();

  return (
    <div className={classes.navContainer}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
           Plush Quiz
          </Typography>
          <Button color="inherit">Dark Mode</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navigation;
