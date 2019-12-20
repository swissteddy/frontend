
import React, {Component} from 'react';
import '../App.css';
import { Route, NavLink, BrowserRouter as Router } from "react-router-dom";
import { Link, AppBar, Toolbar, Typography, Grid, withStyles } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Grid } from '@material-ui/core';


// import { withStyles } from "@material-ui/core";
// import useStyles from './Appbar/Style';
// import withStyles from '@material-ui/core';


import utama from './Utama/Utama';
import Akademik from './Akademik/Akademik';
import Materi from './Materi/Materi';
import Berita from './Berita/Berita';
import Tentang from './Tentang/Tentang';

const styles = theme => ({
  tittle: {
    background: 'black',
    color: 'white',
  },
  menu:{
    marginRight: 20,
    color: 'white',
  },

});


function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        &copy; Copyright
        <Link color="inherit" href="https://localhost:3000/">React Materials</Link>
        {new Date().getFullYear()}
      </Typography>
    );
  }

  class App extends Component {

    render() {
      const {classes} = this.props;
      
      return ( 
        <Router>
          <React.Fragment>
  
            {/* app bar */}
            <AppBar position="static">
              <Toolbar>
                
                  
                    <Typography variant="h6">
                    <NavLink to="/" exact>
                      <img className={classes.logo} alt="telkom university logo" src={require('./image/logo.png')} />
                    </NavLink> 
                  </Typography>

                  <Grid container justify="center">
                    <Grid item xs={6} md={6}>
                    <Typography variant="h6" className={classes.link} >
                      <NavLink to="/akademik" >Akademik</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.link}>
                      <NavLink className="" to="/materi">Materi</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.link}>
                      <NavLink to="/berita" >Kabar Terkini</NavLink>
                    </Typography>
                    <Typography variant="h6" className={classes.link}>
                      <NavLink to="/tentang" >Tentang</NavLink>
                    </Typography>
                    </Grid>
                  </Grid>

                  <IconButton
                      aria-label="account of current user"
                      aria-controls="menu-appbar"
                      aria-haspopup="true"
                      color="inherit"
                    >
                      <AccountCircle />
                  </IconButton>
                  
                  
              </Toolbar>
            </AppBar>
            {/* end of app bar */}
  
              
            {/* router link */}
            <Route path="/" exact component={utama}/>
            <Route path="/Akademik" component={Akademik}/>
            <Route path="/materi" component={Materi}/>
            <Route path="/berita" component={Berita}/>
            <Route path="/tentang" component={Tentang}/> 
            {/* end of router link */}
  
          <Copyright/>
          </React.Fragment>
        </Router>
       );
    }
  }

  export default withStyles(styles)(App);

//   class App extends Component {

//     render() {
//       const {classes} = this.props; 
//       return ( 
//         <Router>
//           <React.Fragment>
  
//             {/* app bar */}
//             <AppBar>
//               <Toolbar>
//                 {/* <Typography variant="h6" color="inherit" nowWrap>
                  // <NavLink to="/" exact>
                  //   <img alt="telkom university logo" src={require('./image/logo.png')} />
                  // </NavLink>
//                 </Typography> */}
                // <Typography>
                // <NavLink to="/akademik" >Akademik</NavLink>
                // </Typography>
//                 <Typography>
//                 <NavLink to="/materi" >Materi</NavLink>
//                 </Typography>
//                 <Typography>
//                 <NavLink to="/berita" >Kabar Terkini</NavLink>
//                 </Typography>
//                 <Typography>
//                 <NavLink to="/tentang" >Tentang</NavLink>
//                 </Typography> 

//                 <IconButton
//                     aria-label="account of current user"
//                     aria-controls="menu-appbar"
//                     aria-haspopup="true"
//                     color="inherit"
//                   >
//                     <AccountCircle />
//                 </IconButton>

//               </Toolbar>
//             </AppBar>
//             {/* end of app bar */}
  
            
//           <div>
//             {/* router link */}
//             <Route path="/" exact component={utama}/>
//             <Route path="/Akademik" component={Akademik}/>
//             <Route path="/materi" component={Materi}/> 
//             <Route path="/berita" component={Berita}/> 
            // <Route path="/tentang" component={Tentang}/> 
//             </div>

//           </React.Fragment>
//         </Router>
//        );
//     }
//   }

// export default (App);


  // export default function App() {
    // const classes = useStyles();
  // // const {classes} = this.props
  //     return (
  //     <Router>
  //       <React.Fragment>
  //         <CssBaseline/>
            // {/* navbar/appbar */}
            //   <AppBar position="fixed" color="white" elevation={0} className={classes.appBar}>
            //     <Toolbar className={classes.toolbar}>
            //       <Typography variant="h6" color="inherit" nowWrap className={classes.toolbarTittle}>
            //       <NavLink to="/" exact>
            //         <img className={classes.logo} alt="telkom university logo" src={require('./image/logo.png')} />
            //         </NavLink>
            //       </Typography>

            //         <Grid container justify="center">
            //           <Grid item xs={12} md={6}>
            //             <nav className={classes.nav}>
                          // <NavLink to="/akademik" className={classes.link}>Akademik</NavLink>
                          // <NavLink to="/materi" className={classes.link}>Materi</NavLink>
                          // <NavLink to="/berita" className={classes.link}>Kabar Terkini</NavLink>
                          // <NavLink to="/tentang" className={classes.link}>Tentang</NavLink>
            //             </nav>
            //           </Grid>
            //         </Grid>
                  // <IconButton
                  //   aria-label="account of current user"
                  //   aria-controls="menu-appbar"
                  //   aria-haspopup="true"
                  //   color="inherit"
                  // >
                  //   <AccountCircle />
                  // </IconButton>               
            //     </Toolbar>
      
            //   </AppBar>
            //   {/* end of navbar/ appbar */}
            
  //         <main>
  //           {/* hero unit */}
  //           <Route exact path="/" component={utama}/>
  //           <Route path="/akademik" component={Akademik}/>
              //  <Route path="/materi" component={Materi}/> 
              //  <Route path="/berita" component={Berita}/> 
              //  <Route path="/tentang" component={Tentang}/>  
  //         </main>
  
          
  //         <Container>
  //           {/* <Contact/> */}
  //           <hr/>
  //         </Container>
         
  //         <Container>
  //           {/* <Footer/> */}
  //           <Copyright/>
  //         </Container>
          
  //       </React.Fragment>
  //     </Router>
        
  
  //   );
  
  // }
  
