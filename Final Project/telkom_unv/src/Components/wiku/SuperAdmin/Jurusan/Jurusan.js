import React, { Component } from 'react';
import {Container, Typography, withStyles} from '@material-ui/core';
import {Jurusan} from './Style';
// import StickyHeadTable from './tabelJurusan';

import Tabel from './HtmlTabel';
import EditJurusan from './Edit';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';


import {Switch, Link, Route} from 'react-router-dom';

class KelolaJurusan extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      
     }
  }


  render() {
    const {classes} = this.props; 
    return ( 
      <div className={classes.wraper}>
        <Container>
          <Typography>
            Daftar jurusan
          </Typography>
          <hr/>
          <br/>
          {/* <StickyHeadTable/> */}
          <Tabel/>
          <Switch>
          <Route path="/admin/jurusan/ubah" component={EditJurusan}/>
          </Switch>
        </Container>
      </div>
     );
  }
}
 
export default withStyles(Jurusan)(KelolaJurusan);