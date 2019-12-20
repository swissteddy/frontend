import React, { Component } from 'react';
import {
  Container,
  Typography,
  withStyles,
} from '@material-ui/core';

// longtex scack bar
import LongTextSnackbar from './snackBar';
import StickyHeadTable from './tabelTagihan';

import { userStyle } from './Style';


class UserUtama extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    const { classes } = this.props;

    // upload image
    // let {imagePreviewUrl} = this.state;
    return (
      <div className={classes.wraper}>
        <div>
          <LongTextSnackbar />
        </div>
        <div>
          <Container>
            <br />
            <Typography>
              Riwayat Pembayaran
          </Typography>
            <hr /><br />
            <StickyHeadTable />
          </Container>
        </div>
      </div>
    );
  }
}

export default withStyles(userStyle)(UserUtama);