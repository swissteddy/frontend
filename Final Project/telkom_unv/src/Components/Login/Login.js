import React, { Component } from 'react';
import { Box, Card, Fade, Modal, Button, Typography, withStyles, Container, Grid, CssBaseline, Avatar, FormControlLabel, Checkbox, Link, } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useStyles } from './Style';
import { connect } from 'react-redux';
import { changeHandler, simpanPost, fetchUsers, fetchJurusan } from '../../store/actions/action';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleOpen = () => {
    this.setState({
      open: true
    })
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  componentDidMount (){
    const {fetchUsers} = this.props
    fetchUsers()
  }
  componentDidMount (){
    const {fetchJurusan} = this.props
    fetchJurusan()
  }


  render() {
    const { classes, namaMahasiwa, emailMahasiswa, passwordMahasiswa, alamatMahasiswa, genderMahasiswa, userjurusan, changeHandler, simpanPost } = this.props;
    const { open } = this.state;
    return (
      <div className={classes.wraper}>
        <Modal
          open={open}
          onClose={this.handleClose}
          className={classes.modalRegister}
        >
          <Fade in={open}>
            <Card className={classes.cardRegister}>
              <Container>
                <Typography component="h1" variant="h5">
                  Pendaftaran Mahasiswa Baru
                </Typography>
                <Grid container justify="center" alignItems="center">
                  <Grid item xs={12} md={6}>
                    {/* <Box>
                        <select name="idJurusan" onChange={(event) =>{
                            changeHandler(event.target.name, event.target.value);
                          }}>
                            {userjurusan.maps((jurusan, i)=> (
                              <option key = {jurusan._id} name="_id" value={jurusan._id}>{jurusan.namaJurusan}</option>
                            ))}
                          </select>
                    </Box> */}
                    <Box>
                      <TextField
                        id="reg_nama"
                        label="Nama Lengkap"
                        className={classes.textField}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        name="namaMahasiswa"
                        value={namaMahasiwa}
                        onChange={event => { changeHandler(event.target.name, event.target.value); }}
                      />
                    </Box>
                    <Box>
                      <TextField
                        id="reg_email"
                        label="Email"
                        className={classes.textField}
                        type="email"
                        margin="normal"
                        variant="outlined"
                        name="emailMahasiswa"
                        value={emailMahasiswa}
                        onChange={event => { changeHandler(event.target.name, event.target.value); }}
                      />
                    </Box>
                    <Box>
                      <TextField
                        id="reg_sandi"
                        label="sandi"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        variant="outlined"
                        name="passwordMahasiswa"
                        value={passwordMahasiswa}
                        onChange={event => { changeHandler(event.target.name, event.target.value); }}
                      />
                    </Box>
                    <Box>
                      <TextField
                        id="reg_sandiulang"
                        label="Ulangi kata sandi"
                        className={classes.textField}
                        type="password"
                        margin="normal"
                        variant="outlined"
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box>
                      <TextField
                        id="reg_alamat"
                        label="Alamat"
                        multiline rows="5"
                        className={classes.textField}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        name="alamatMahasiswa"
                        value={alamatMahasiswa}
                        onChange={event => { changeHandler(event.target.name, event.target.value); }}
                      />
                    </Box>
                    <Box>
                      {/* <TextField
                        id="reg_Jk"
                        label="Jenis Kelamin"
                        className={classes.textField}
                        type="text"
                        margin="normal"
                        variant="outlined"
                        name="genderMahasiswa"
                        value={genderMahasiswa}
                        onChange={event => { changeHandler(event.target.name, event.target.value); }}
                      /> */}
                        <select name="genderMahasiswa" onChange={(event) =>{
                            changeHandler(event.target.name, event.target.value);
                          }}>
                            <option value="">=Pilih Jenis Kelamin=</option>
                            <option name="genderMahasiswa" value="Laki-laki">Laki-laki</option>
                            <option name="genderMahasiswa" value="Perempuan">Perempuan</option>
                          </select>
                    </Box>
                    <Box>
                      <Button variant="contained" color="secondary" onClick={simpanPost}> kirim </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Container>
            </Card>
          </Fade>
        </Modal>
        <Container>
          <Grid container className={classes.grid1}>
            {/* Grid one */}
            <Grid item className={classes.gridlogin} xs={12} md={6}>
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Sign in
                  </Typography>
                  <form className={classes.form} noValidate>
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      autoFocus
                    />
                    <TextField
                      variant="outlined"
                      margin="normal"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                    />
                    <FormControlLabel
                      control={<Checkbox value="remember" color="primary" />}
                      label="Remember me"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      color="secondary"
                      className={classes.submit}
                    >
                      Sign In
                  </Button>
                    <Grid container>
                      <Grid item xs>
                        <Link href="#" variant="body2">
                          Lupa Password?
                      </Link>
                      </Grid>
                      <Grid item>
                        <Link className={classes.linkPointer} onClick={this.handleOpen} variant="body2">
                          {"Belum punya Akun? Buat Akun"}
                        </Link>
                      </Grid>
                    </Grid>
                  </form>
                </div>
              </Container>
            </Grid>

            <Grid item className={classes.gridlogin} xs={12} md={6}>
              <Typography>
                <img className={classes.cardM} alt="contact center" src={require('../image/TU.png')} />
              </Typography>
            </Grid>

          </Grid>
        </Container>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  namaMahasiswa: state.namaMahasiwa,
  emailMahasiswa: state.emailMahasiswa,
  passwordMahasiswa: state.passwordMahasiswa,
  alamatMahasiswa: state.alamatMahasiswa,
  genderMahasiswa: state.genderMahasiswa,
  userjurusan: state.userjurusan,
});

const mapDispatchToProps = dispatch => ({
  changeHandler: (name, value) => dispatch(changeHandler(name, value)),
  simpanPost: () => dispatch(simpanPost()),

  //tambahan code untuk redux thunk /middleware
  fetchUsers: () => dispatch(fetchUsers()),
  fetchJurusan: () => dispatch(fetchJurusan())
});
export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(Login));
