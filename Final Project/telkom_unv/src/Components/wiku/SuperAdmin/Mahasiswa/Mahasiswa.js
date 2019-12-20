import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { Mahasiswa } from './Style';
import StickyHeadTable from './tabelMahasiswa';
import {Link, Switch, Route} from 'react-router-dom';

import EditMahasiswa from './Edit';
import CekMahasiswa from './View';

class KelolaMahasiswa extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wraper}>
        <Container>
          <Typography>
            <Link to="/admin">Utama</Link> >  <Link to="/admin/mahasiswa"> Mahasiswa</Link>
          </Typography>
          <hr /><br />
          <Grid container justify="center">
            <Grid item>
              <StickyHeadTable />
              <Switch>
              <Route path="/admin/mahasiswa/ubah" component={EditMahasiswa}/>
              <Route path="/admin/mahasiswa/cek" component={CekMahasiswa}/>
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(Mahasiswa)(KelolaMahasiswa);