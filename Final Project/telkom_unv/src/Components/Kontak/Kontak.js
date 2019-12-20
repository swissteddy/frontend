import React, { Component } from 'react';
import { Box, Button, Typography, withStyles, Container, Grid } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Style } from './Style';
import { connect } from 'react-redux';
import { changeHandler, simpanKontak, fetchKontak } from '../../store/actions/action';

class Kontak extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount (){
    const {fetchKontak} = this.props
    fetchKontak()
  }

  render() {
    const { classes, namaPengirim, emailPengirim, pesanPengirim, changeHandler, simpanKontak } = this.props;
    return (
      <div className={classes.wraperkontak}>
        <Container>
          <Grid container direction="row" justify="center" alignItems="center"className={classes.grid1}>
            {/* Grid one */}
            <Grid item className={classes.gridkontak} xs={12} md={6}>
                  <img className={classes.cardM} alt="contact center" src={require('../image/cs.jpg')} />
                  <Typography variant="" className={classes.textkontak}> Alamat : Jl. Jakarta raya, jakarta pusat</Typography>
                  <Typography variant="" className={classes.textkontak}> No telp : 021-86899xxx</Typography>
            </Grid>
            {/* end Grid one */}
           

            {/* Grid two */}
            <Grid item className={classes.gridkontak} xs={12} md={6}>
            <br /> <br />
            <Typography component="h1" variant="h4" align="center">Hubungi Kami</Typography>
            <br /><br />
              <Box>
                <TextField
                  id="kontak_nama"
                  label="Nama Lengkap"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="namaPengirim"
                  value={namaPengirim}
                  onChange={event => { changeHandler(event.target.name, event.target.value); }}
                />
              </Box>
              <Box>
                <TextField
                  id="kontak_email"
                  label="Email"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="emailPengirim"
                  value={emailPengirim}
                  onChange={event => { changeHandler(event.target.name, event.target.value); }}
                />
              </Box>
              <Box>
                <TextField
                  id="kontak_pesan"
                  label="Isi Pesan Anda"
                  multiline rows="5"
                  className={classes.textField}
                  type="text"
                  margin="normal"
                  variant="outlined"
                  name="pesanPengirim"
                  value={pesanPengirim}
                  onChange={event => { changeHandler(event.target.name, event.target.value); }}
                />
              </Box>
              <Box>
                <Button variant="contained" color="secondary" onClick={simpanKontak}> kirim </Button>
              </Box>
            </Grid>
            {/* End Grid two */}

          </Grid>
        </Container>
      </div>

    );
  }
}


const mapStateToProps = state => ({
  namaPengirim: state.namaPengirim,
  emailPengirim: state.emailPengirm,
  pesanPengirim: state.pesanPengirim,
});

const mapDispatchToProps = dispatch => ({
  changeHandler: (name, value) => dispatch(changeHandler(name, value)),
  simpanKontak: () => dispatch(simpanKontak()),

  //tambahan code untuk redux thunk /middleware
  fetchKontak: () => dispatch(fetchKontak())
});
export default withStyles(Style)(connect(mapStateToProps, mapDispatchToProps)(Kontak));