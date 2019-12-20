import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleAppbar } from './Style';

import { Link } from 'react-router-dom';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.wraper}>
        <Paper className={classes.Paper}>
          <div>
            <center>
              <Link to="/admin">
                <Typography>
                  <img className={classes.logo} alt="telkom university logo" src={require('../../image/logo-white.png')} />
                </Typography>
              </Link>
            </center>
          </div>
          <div className={classes.sideLinkBox}>
            <Link to="/admin/mahasiswa" className={classes.sideLink} ><Button className={classes.sideLinkText}>Mahasiswa</Button></Link>
          </div>
          <div className={classes.sideLinkBox}>
            <Link to="/admin/berita" className={classes.sideLink} ><Button className={classes.sideLinkText}>kelola Berita</Button></Link>
          </div>
          <div className={classes.sideLinkBox}>
            <Link to="/admin/chat"  className={classes.sideLink} ><Button className={classes.sideLinkText}>kelola Chat</Button></Link>
          </div>
          <div className={classes.sideLinkBox}>
            <Link  to="/admin/jurusan" className={classes.sideLink} ><Button className={classes.sideLinkText}>kelola Jurusan</Button></Link>
          </div>
          <div className={classes.sideLinkBox}>
            <Link to="/admin/promo" className={classes.sideLink} ><Button className={classes.sideLinkText}>kelola Promo</Button></Link>
          </div>
          <div className={classes.sideLinkBox}>
            <Link to="/admin/tagihan" className={classes.sideLink}><Button className={classes.sideLinkText}>kelola Tagihan</Button></Link>
          </div>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styleAppbar)(Navbar);