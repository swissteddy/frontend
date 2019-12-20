import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, TextField, Button } from '@material-ui/core';
import { Berita } from './Style';

import { Link } from 'react-router-dom';

class EditBerita extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wraper}>
                <Typography>
                    <Link to="/admin">Utama</Link> >  <Link to="/admin/berita"> Berita</Link>  > <Link to="/admin/berita/edit"> Ubah </Link>
                </Typography>
                <br /><hr />

                <Container>
                    <Typography>
                        Ubah Berita
                </Typography>
                    <br /><br />
                    <Grid container justify="center">
                        {/* grid item content */}
                        <Grid item md={10}>
                            <Container >
                                <Grid container>
                                    <Grid item md={12}>
                                        <form>
                                            <div>
                                                <TextField id="standard-basic" label="Masukkan Judul Berita" />
                                            </div>
                                            <div>
                                                <TextField id="standard-basic" label="Deskripsi" />
                                            </div>
                                            <Button>Simpan</Button>
                                        </form>
                                    </Grid>
                                </Grid>
                            </Container>
                        </Grid>
                        {/* end of grid item content */}
                    </Grid>
                </Container>
            </div>
        );
    }
}

export default withStyles(Berita)(EditBerita);