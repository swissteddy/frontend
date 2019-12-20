import React, { Component } from 'react';
import {
  withStyles,
  Container,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Button,
  Typography,
  CardContent
} from '@material-ui/core';
import { superAdmin } from './Style';

class bodyAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wraper}>

        ini adalah halaman admin
        {/* <div>
        <Card className={classes.cards}>
          <CardContent>
            <Typography>
              Papan pengumuman
            </Typography>
            <hr/>

          </CardContent>
        </Card>
        </div>
        
        <div>
        <Card className={classes.cards}>
          <CardContent>
            <Typography>
              Panel Berita
            </Typography>
            <hr/>
          </CardContent>
        </Card>
        </div>

        <div>
        <Card className={classes.cards}>
          <CardContent>
            <Typography>
              Panel Promo
            </Typography>
            <hr/>
          </CardContent>
        </Card>
        </div> */}

      </div>
    );
  }
}

export default withStyles(superAdmin)(bodyAdmin);