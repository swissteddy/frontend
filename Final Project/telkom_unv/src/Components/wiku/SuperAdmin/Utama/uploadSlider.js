import React, { Component } from 'react';
import {Card, CardContent} from '@material-ui/core';
import {Tagihan} from './Style';

import UploadImg from '../uploadImage/UploadImg';

class AdminUtama extends Component {
  constructor(props) {
    super(props);
    this.state = { 
    
      
     }
  }


  render() {
    const {classes} = this.props; 
    return ( 
      <div className={classes.wraper}>
        <Card>
            <CardContent>

            </CardContent>
        </Card>
      </div>
     );
  }
}
 
export default withStyles(Tagihan)(AdminUtama);