import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleAppbar } from './Style';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.Userwraper}>
        <Paper className={classes.PaperUser}>
          <center>
            <Typography className={classes.userBodyImg}>
              <Link to="/users">
                <img className={classes.userImg} alt="telkom university logo" src={require('../../image/user.svg')} />
              </Link>
            </Typography>
          </center>
          <Container>
            <center>
              <Typography component="h6" variant="h6" className={classes.userTxt}>
                Sadjimin Surya
              </Typography>
              <Typography component="p" variant="p" className={classes.userTxt}>
                12.1222.1231.22
              </Typography>
            </center>
          </Container>
        </Paper>
      </div >
    );
  }
}

export default withStyles(styleAppbar)(Navbar);