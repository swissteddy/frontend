import React, { Component } from 'react';
import {  NavLink, BrowserRouter as Router } from "react-router-dom";
import { Button, AppBar, Toolbar, Typography, Grid, withStyles } from "@material-ui/core";
import { styleAppbar } from './Style';
import MenuListComposition from './Popper'; 

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.navBody}>
        <center>
          <AppBar position="static" className={classes.Navbar}>
            <Toolbar className={classes.navborder}>
              <Typography variant="h6">
                <NavLink to="/">
                  <img className={classes.logo} alt="telkom university logo" src={require('../image/logo.png')} />
                </NavLink>
              </Typography>
              <Grid container justify="center">
                <Grid item xs={6} md={5}>
                  <Typography variant="h6" className={classes.link} >
                     <MenuListComposition />
                  </Typography>
                  {/* <Typography variant="h6" className={classes.link}>
                    <NavLink className={classes.link} to="/materi">Materi</NavLink>
                  </Typography> */}
                  <Typography variant="h6" className={classes.link}>
                    <NavLink className={classes.linkText} to="/berita" >Berita</NavLink>
                  </Typography>
                  <Typography variant="h6" className={classes.link}>
                    <NavLink className={classes.linkText} to="/kontak" >Kontak</NavLink>
                  </Typography>
                </Grid>
              </Grid>
              <NavLink to="/Login"> <Button variant="contained" color="secondary">Login</Button> </NavLink>
            </Toolbar>
          </AppBar>
          </center>
      </div>
    );
  }
}

export default withStyles(styleAppbar)(Navbar);