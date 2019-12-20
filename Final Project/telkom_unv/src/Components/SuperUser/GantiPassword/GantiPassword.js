import React, { Component } from 'react';
import {
  Container,
  Grid,
  Typography,
  withStyles,
  TextField,
  Button,
} from '@material-ui/core';

import { passStyle } from './Style';


class Password extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // upload image
      file: '',
      imagePreviewUrl: '',
    };
  }



  render() {
    const { classes } = this.props;


    return (
      <div className={classes.wraper}>
        <Container>
          <Grid container>
            <Grid item>
              <br />
              <Typography>
                Ganti Kata sandi
            </Typography>
              <hr /><br /><br />
              <Container>
                <form className={classes.root} noValidate autoComplete="off">
                  <div>
                    <TextField id="standard-basic" label="Masukkan Sandi Baru" />
                  </div>
                  <div>
                    <TextField id="standard-basic" label="Konfirmasi Sandi Baru" />
                  </div>
                  <Button type="submit">Simpan</Button>
                </form>
              </Container>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(passStyle)(Password);