import React, { Component } from 'react';
import { Switch, Route } from "react-router-dom";
// import Navbar from '../Appbar/Appbar';
import {
  Grid,
  Paper,
  withStyles,
} from '@material-ui/core';
// navbar
import Navbar from './Appbar/Appbar';
import TopBar from './Appbar/Topbar';
import { styleUser } from './Style';


import UserUtama from './Utama/Utama';
import Password from './GantiPassword/GantiPassword';
import EditUser from './EditUser/EditUser';
import UserProfiles from './User/User';


class user extends Component {

  render() {
    const { classes } = this.props
    return (

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
                      <div>
                        <Switch>                         
                          <Route path="/users" exact component={UserUtama} />
                          <Route path="/users/profiles" component={UserProfiles} />
                          <Route path="/users/edit" component={EditUser} />
                          <Route path="/users/password" component={Password} />
                        </Switch>
                      </div>
                      {/* <Switch> */}
                      {/* router link */}
                      {/* <Route path="/login" component={Login} /> */}

                      {/* <Route path="/users" exact component={UserUtama} />
                          <Route path="/users/gantipass" component={GantiPass} />
                          <Route path="/users/edit" component={EditUser} /> */}
                      {/* end of router link */}
                      {/* </Switch> */}
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

    );
  }
}

export default withStyles(styleUser)(user);