import React, { Component } from 'react';
import { Paper, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { Akun } from './Style';


class KelolaAkun extends Component {
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
          <Grid container justify="center" spacing={3}>
            <Grid item md={12}>
              <center>
                <Container>
                  <Card>
                    <CardMedia className={classes.userImgBox}>
                      <img className={classes.userImg} alt="admin" src={require('../../image/user.svg')}/>
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

           

            <Grid item md={12}>
              <Container>
                <Typography component="p" variant="p">
                  Data Diri 
                </Typography>
                <hr /><br />
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

export default withStyles(Akun)(KelolaAkun);