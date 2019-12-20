import React, { Component } from 'react';
import { Container, TextField, Grid, Typography, withStyles,  Button } from '@material-ui/core';
import { Jurusan } from './Style';

import { Link } from 'react-router-dom';

class EditJurusan extends Component {
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
                        <Link to="/admin">Utama</Link> >  <Link to="/admin/jurusan"> Jurusan</Link>  > <Link to="/admin/jurusan/ubah"> Ubah </Link>
                    </Typography>
                    <hr /><br />
                    <Grid container>
                        <Grid item md={6}>
                            <Container>
                                <Typography component="p" variant="p">
                                    Data Jurusan
                                </Typography>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                    <TextField id="standard-basic" label="Jurusan" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Program Studi" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Materi" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Bobot SKS" />
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

export default withStyles(Jurusan)(EditJurusan);