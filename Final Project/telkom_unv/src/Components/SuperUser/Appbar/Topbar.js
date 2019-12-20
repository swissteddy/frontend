import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleAppbar } from './Style';

import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MenuListComposition from './Popper';

import { Link } from 'react-router-dom';

class TopBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wraper}>
        <Grid container justify="flex-end" align="center" className={classes.topBar}>
          <Grid item md={2}>

            <Grid container>
              <Grid item md={6}>
                <NotificationsIcon className={classes.icons} />
              </Grid>
              <Grid item md={6}>
                <MenuListComposition />
              </Grid>
            </Grid>

          </Grid>
        </Grid>

        {/* <div>
          <Link to="/login">Login admin</Link>
        </div>
        <div>
          ini adalah halaman admin
        </div> */}
      </div>
    );
  }
}

export default withStyles(styleAppbar)(TopBar);