import React, { Component } from 'react';
import '../App.css';
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Akademik from './Akademik/Akademik';
import DetilAkademik from './Akademik/DetilAkademik';
import Materi from './Materi/Materi';
import Berita from './Berita/Berita';
import DetilBerita from './Berita/DetilBerita';
import Kontak from './Kontak/Kontak';
import Login from './Login/Login';

import index from './index';
import admin from './SuperAdmin/index';
import user from './SuperUser/index';

class App extends Component {

  render() {

    return (

      <React.Fragment>

        <Switch>
          {/* router link */}
          
          <Route exact path="/admin" component={admin} />
          <Route exact path="/users" component={user} />

          {/* end of router link */}
          {/* <Route path="/akademik" component={Akademik} />
           <Route path="/detilakademik" component={DetilAkademik} />
           <Route path="/Materi" component={Materi} />
           <Route path="/Berita" component={Berita} />
           <Route path="/Detilberita/:id" component={DetilBerita} />
           <Route path="/Kontak" component={Kontak} />
           <Route path="/Login" component={Login} /> */}
           <Route path="/" component={index} />
        </Switch>

      </React.Fragment>

    );
  }
}

export default App;
