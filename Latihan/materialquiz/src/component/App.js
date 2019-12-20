import React from 'react';
import {Route, NavLink, BrowserRouter as Router} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { CssBaseline } from '@material-ui/core';
//style
import useStyles from '../style/style';


export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <React.Fragment>
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <img src={require('../image/logo.png')} alt="logo" height="35" width="150" />
          </Typography>
         <nav>
              <NavLink to="/" exact className={classes.link}>Home</NavLink>
              <NavLink to="/Partnership" className={classes.link}>Partnership</NavLink>
              <NavLink to="/Pusat Bantuan" className={classes.link}>Pusat Bantuan</NavLink>
              <NavLink to="/News" className={classes.link}>News</NavLink>
          </nav> 
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    </React.Fragment>
    </Router>
  );
}
