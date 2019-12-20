import React, { Component } from 'react';
import { Container, TextField, Grid, Typography, withStyles,  Button } from '@material-ui/core';
import { Mahasiswa } from './Style';
import StickyHeadTable from './tabelMahasiswa';
import { Link } from 'react-router-dom';

class EditMahasiswa extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wraper}>
                <br/><br/>
                <Container>
                    <Typography>
                        <Link to="/admin">Utama</Link> >  <Link to="/admin/mahasiswa"> Mahasiswa</Link>  > <Link to="/admin/mahasiswa/edit"> Ubah </Link>
                    </Typography>
                    <hr /><br />
                    <Grid container>
                        <Grid item md={6}>
                            <Container>
                                <Typography component="p" variant="p">
                                    Data Akademik
                                </Typography>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                    <TextField id="standard-basic" label="Jurusan" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Program Studi" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Tahun Masuk" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Jumlah SKS" />
                                    </div>
                                </form>
                                <Button type="submit">Simpan</Button>
                            </Container>
                        </Grid>
                        <Grid item md={6}>
                            <Container>
                            <Typography component="p" variant="p">
                                    Data Diri
                                </Typography>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                    <TextField id="standard-basic" label="Nama Ayah" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Nama Ibu" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Alamat" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Gender" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Tempat Lahir" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Tanggal Lahir" />
                                    </div>
                                </form>
                                <Button type="submit">Simpan</Button>
                            </Container>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(Mahasiswa)(EditMahasiswa);