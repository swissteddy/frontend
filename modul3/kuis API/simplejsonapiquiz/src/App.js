import React, { Component } from 'react';
import {Typography, withStyles, Box} from '@material-ui/core/';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import contacts from './components/contacts'
import detil from './components/detil'

const styles = theme => ({
  title:{
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color:'white',
  },
});

class App extends Component {
  render() {
    const {classes} = this.props;
      return (
        <Router>
          <React.Fragment>
            <Box component="div" className={classes.title}>
              <Typography variant="h4" component="h3" align="center">
                Kontak
              </Typography>
              <hr/>
            </Box>
            <Route path="/" exact component={contacts}/>
            <Route path="/detil" component={detil}/>
          </React.Fragment>
        </Router>
      )
  }
}

export default withStyles(styles)(App)