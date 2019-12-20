import React, { Component, Fragment } from 'react';
import '../styles/styles.css';
import Home from './Home/Home';
import Contacts from './Contacts/Contacts';
import Registers from './Registers/Registers';
import Artikel from './Artikels/Artikel';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


class App extends Component {
  render() {
    return (

      <Router>
        <div className="wrapper">
          <div className="header">
            <div className="navbar">
              <div className="logo">
                <img className="logogambar" src={require('../logo/logo.png')} />
              </div>
              <div className="menu">
                <ul>
                  <Link to="/" className="li">Home</Link>
                  <Link to="/artikel" className="li">Artikel</Link>
                  <Link to="/contact" className="li">Kontak</Link>
                  <Link to="/registers" className="li">Register</Link>
                </ul>
              </div>
            </div>
          </div>
          <Fragment>

            <Route path="/" exact component={Home} />
            <Route path="/contact" component={Contacts} />
            <Route path="/registers" component={Registers} />
            <Route path="/artikel" component={Artikel} />
          </Fragment>

          <div className="footer">
            <div className="footer-wrapper">
              <div className="footer-row">
                <div className="socmed-wrapper">
                  <ul>
                    <li>
                      <img src={require("../images/group-11.png")} /><Link to="/"></Link>
                      <p>facebook</p>
                    </li>
                    <li>
                      <img src={require("../images/group-23.png")} /><Link to="/"></Link>
                      <p>twitter</p>
                    </li>
                    <li>
                      <img src={require("../images/icon-instagram.png")} /><Link to="/"></Link>
                      <p>instagram</p>
                    </li>
                    <li>
                      <img src={require("../images/group-22.png")} /><Link to="/"></Link>
                      <p>call center 147</p>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="footer-link">
                <div className="link-item 1">
                  <img src={require("../images/indihome.jpg")} />
                </div>
                <div className="link-item 2">
                  <ul>
                    <li>Kenali IndiHome</li>
                    <li><Link to="/">Apa itu IndiHome?</Link></li>
                    <li><Link to="/">Aplikasi myIndiHome</Link></li>
                    <li><Link to="/">Triple Play</Link></li>
                    <li><Link to="/">Dual Play</Link></li>
                    <li><Link to="/">Single Play</Link></li>
                    <li><Link to="/">Add-on</Link></li>
                  </ul>
                </div>
                <div className="link-item 3">
                  <ul>
                    <li>IndiHome</li>
                    <li><Link to="/">Syarat & Ketentuan</Link></li>
                    <li><Link to="/">Announcements</Link></li>
                    <li><Link to="/">Tutorials</Link></li>
                  </ul>
                </div>
                <div className="link-item 4">
                  <ul>
                    <li>
                      <img src={require("../images/bitmap.png")} alt="" />
                    </li>
                    <li>Copyright 2019 PT Telekomunikasi Indonesia (Persero) Tbk All Right Reserved.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Router>
    )
  }
}


export default App;
