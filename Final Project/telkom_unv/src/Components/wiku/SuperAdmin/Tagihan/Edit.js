import React, { Component } from 'react';
import { Container, TextField, Grid, Typography, withStyles,  Button } from '@material-ui/core';
import { Tagihan } from './Style';

import { Link } from 'react-router-dom';

class EditTagihan extends Component {
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
                        <Link to="/admin">Utama</Link> >  <Link to="/admin/tagihan"> Tagihan</Link>  > <Link to="/admin/tagihan/ubah"> Ubah </Link>
                    </Typography>
                    <hr /><br />
                    <Grid container>
                        <Grid item md={6}>
                            <Container>
                                <Typography component="p" variant="p">
                                    Data Tagihan
                                </Typography>
                                <form className={classes.root} noValidate autoComplete="off">
                                    <div>
                                    <TextField id="standard-basic" label="Jurusan" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="Program Studi" />
                                    </div>
                                    <div>
                                    <TextField id="standard-basic" label="biaya Perkuliahan" />
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

export default withStyles(Tagihan)(EditTagihan);