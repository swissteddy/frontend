import React, { Component } from 'react';
import {
  Paper,
  Container,
  Grid,
  Typography,
  withStyles,
  Card,
  CardHeader,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from '@material-ui/core';
import { editStyle } from './Style';

// import UploadImg from '../uploadImage/UploadImg';

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // upload image
      file: '',
      imagePreviewUrl: '',
    };
  }



  render() {
    const {classes} = this.props

    return (
      <div className={classes.wraper}>
        ini adalah laman edit user        
      </div>
    );
  }
}

export default withStyles(editStyle)(EditUser);