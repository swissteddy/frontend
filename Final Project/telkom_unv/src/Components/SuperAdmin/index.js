import React, { Component } from 'react';

import { Switch, Link, Route, BrowserRouter as Router } from "react-router-dom";
import { withStyles, Typography, Grid, Paper, Button } from '@material-ui/core';
import { superAdmin } from './Style';

//import login dan navbar
import Login from './Login/Login';
import Navbar from './Appbar/Appbar';
import TopBar from './Appbar/Topbar';
// import Dashboard from './Dashboard/Dashboard'

//import route list halaman yang akan ditampilkan
import AdminUtama from './Utama/Utama';
import KelolaMahasiswa from './Mahasiswa/Mahasiswa';
import EditMahasiswa from './Mahasiswa/Edit';
import KelolaBerita from './Berita/Berita';
import KelolaChat from './Chat/Chat';
import KelolaJurusan from './Jurusan/Jurusan';
import KelolaPromo from './Promo/Promo';
import KelolaTagihan from './Tagihan/Tagihan';
import KelolaAkun from './Akun/Akun';

class admin extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };

  }


  render() {
    const classes = this.props
    return (
      <Router>
        <React.Fragment>
          <div className={classes.wraper}>


            <Grid container>
              {/* items */}
              <Grid item md={2} className={classes.side}>
                <Paper className={classes.side}>
                  <Navbar />
                </Paper>
              </Grid>
              {/* items */}
              {/* items */}
              <Grid item md={10}>
                {/* item topbar and content */}
                <Grid container>
                  <Grid item md={12}>
                    <TopBar />
                  </Grid>
                  <Grid item md={12}>
                    <div className={classes.bodyDash}>
                      <Paper>
                        <Switch>
                          {/* router link */}
                          <Route path="/login" component={Login} />

                          <Route path="/admin" exact component={AdminUtama} />
                          <Route path="/admin/mahasiswa" component={KelolaMahasiswa} />
                          <Route path="/admin/mahasiswa/ubah" component={EditMahasiswa}/>
                          <Route path="/admin/berita" component={KelolaBerita} />
                          <Route path="/admin/chat" component={KelolaChat} />
                          <Route path="/admin/jurusan" component={KelolaJurusan} />
                          <Route path="/admin/promo" component={KelolaPromo} />
                          <Route path="/admin/tagihan" component={KelolaTagihan} />
                          <Route path="/admin/akun" component={KelolaAkun} />
                          {/* end of router link */}
                        </Switch>
                      </Paper>
                    </div>
                  </Grid>
                </Grid>
                {/* end of item topbar and item */}
              </Grid>
              {/* items */}
            </Grid>


            {/* <div>
              <Dashboard/>
            </div> */}
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default withStyles(superAdmin)(admin);

