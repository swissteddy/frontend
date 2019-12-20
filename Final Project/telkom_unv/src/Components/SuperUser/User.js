import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import {styleUser} from './Style';


class BodyUser extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }


  render() {
    const {classes} = this.props; 
    return ( 
      <div className={classes.wraper}>
        ini adalah halaman user dashboard
      </div>
     );
  }
}
 
export default withStyles(styleUser)(BodyUser);