import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles } from '@material-ui/core';
import { Switch, Route } from 'react-router-dom';
import { Tagihan } from './Style';
import StickyHeadTable from './tabelTagihan';
import EditTagihan from './Edit';


class KelolaTagihan extends Component {
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
            Daftar Biaya Perkuliahan
        </Typography>
          <hr /><br />
          <Grid container justify="center">
            <Grid item>
              <StickyHeadTable />
              <Switch>
                <Route path="/admin/tagihan/ubah" component={EditTagihan} />
              </Switch>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(Tagihan)(KelolaTagihan);