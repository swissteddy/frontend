import React, { Component } from 'react';
import '../App.css';
import { Route, Switch } from "react-router-dom";
import { Link, Typography} from "@material-ui/core";
import Navbar from './Appbar/Appbar';
import utama from './Utama/Utama';
import Akademik from './Akademik/Akademik';
import DetilAkademik from './Akademik/DetilAkademik';
import Materi from './Materi/Materi';
import Berita from './Berita/Berita';
import DetilBerita from './Berita/DetilBerita';
import Kontak from './Kontak/Kontak';
import Login from './Login/Login';
import Chatbot from './chatbot/chatbot';


function Socialmedias() {

  return (
    <div className="footer-box">
      <Typography variant="body2" align="center">
        <img className="footer-icon" alt="telkom social medias" src={require('./image/logo-fb-min.png')} />
        <img className="footer-icon" alt="telkom social medias" src={require('./image/logo-instagram-min.png')} />
        <img className="footer-icon" alt="telkom social medias" src={require('./image/logo-twitter-min.png')} />
        <img className="footer-icon" alt="telkom social medias" src={require('./image/logo-youtube-min.png')} />
      </Typography>
      <Typography variant="body2" style ={{color:"white"}} align="center">
      &copy; Copyright
        <Link style ={{color:"white"}} href="https://localhost:3000/">React Materials</Link>
      {new Date().getFullYear()}
    </Typography>
    </div>
  );
}

class index extends Component {

  render() {
    const { classes } = this.props;

    return (
    
        <React.Fragment>

          <Navbar />

          {/* router link */}
          <main style={{minHeight:"84vh"}}>
          
          <Route exact path="/" component={utama} />
          <Route path="/akademik" component={Akademik} />
          <Route path="/detilakademik" component={DetilAkademik} />
          <Route path="/Materi" component={Materi} />
          <Route path="/Berita" component={Berita} />
          <Route path="/Detilberita/:id" component={DetilBerita} />
          <Route path="/Kontak" component={Kontak} />
          <Route path="/Login" component={Login} />
          
          {/* end of router link */}
          </main>

          <Chatbot/>
          <Socialmedias/>
        </React.Fragment>
    
    );
  }
}

export default index;

