import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardMedia, CardContent } from '@material-ui/core';
import { user } from './Style';


class UserProfiles extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        const { classes } = this.props;
        return (
            <div className={classes.wraper}>

                <Container>
                    <Typography component="p" variant="p">
                        Profil Mahasiswa
                    </Typography><br /><br />

                    {/* item */}
                    <Grid container justify="center" spacing={3}>
                        <Grid item md={12}>
                            <center>
                                <Container>
                                    <Card>
                                        <CardMedia className={classes.userImgBox}>
                                            <img className={classes.userImg} alt="admin" src={require('../../image/user.svg')} />
                                        </CardMedia>
                                        <CardContent>
                                            <Typography>
                                                Agung subandya
                                            </Typography>
                                            <Typography>
                                                23.234.234.333
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Container>
                            </center>
                        </Grid>

                        {/* item2 */}
                        <Grid item md={12}>
                            <Container>
                                <Typography component="p" variant="p">
                                    Data akademik
                                </Typography>
                                <hr /><br />
                                <Typography>
                                    Jurusan : Ilmu Terapan
                                </Typography>
                                <Typography>
                                    Program Studi : Sistem Informasi
                                            </Typography>
                                <Typography>
                                    Tahun Masuk : 2013
                                </Typography>
                                <Typography>
                                    Total SKS : 231
                                </Typography>
                            </Container>
                        </Grid>
                        {/* item2 */}

                        <Grid item md={12}>
                            <Container>
                                <Typography component="p" variant="p">
                                    Data Diri Mahasiswa
                                </Typography>
                                <hr /><br />
                                <Typography>
                                    Nama Ayah : Sujana
                                </Typography>
                                <Typography>
                                    Nama Ibu : Sri Hana
                                </Typography>
                                <Typography>
                                    Alamat: Jl. Mangkuyudan 2 No.3 Blok Antasari, Maluku
                                </Typography>
                                <Typography>
                                    Gender : Laki-Laki
                                </Typography>
                                <Typography>
                                    Tempat Lahir : Boyolali
                                </Typography>
                                <Typography>
                                    Tanggal Lahir: 12 Januari 1994
                                </Typography>
                            </Container>
                        </Grid>
                    </Grid>
                    {/* end of item */}
                </Container>
            </div>
        );
    }
}

export default withStyles(user)(UserProfiles);