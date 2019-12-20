import React, { Component } from 'react';
import {Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button} from '@material-ui/core';
import {Upload} from './Style';


class UploadImg extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }


  render() {
    const {classes} = this.props; 
    return ( 
      <div className={classes.wraper}>
        ini dalah halama upload

        <form>
          <imput type="file" name="uploadImg"/>
          <button type="submit">kirim</button>
        </form>
      </div>
     );
  }
}
 
export default withStyles(Upload)(UploadImg);