import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleMateri } from './Style';
import { Paper } from 'material-ui';
import { Link } from 'react-router-dom';


class materi extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;
    const MyLink = props => <Link to="/detilberita" {...props} />;
    return (
      <div className={classes.wraper}>

        <Container >
          <Grid container alignItems="center" className={classes.containerslide}>
            <Grid item xs={6} md={8} style={{ right: '50%', top: '50%', background: "transparent", alignItems: "flex-end" }} >
            </Grid>
          </Grid>
        </Container>

        {/* card container content materi*/}
        <Container>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            <Grid item xs={12} md={6}>
              {/* content1 */}
              <Card>
                {/*  */}
                <Card className={classes.cardMborder}>
                  <Grid container>
                    <Grid item md={9}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          <b>Pilih Fakultas</b>
                        </Typography>
                        <Typography component="p" variant="h6">
                          Teknik Elektro
                        </Typography>
                        <Typography component="p" variant="h6">
                          Komunikasi & Bisnis
                        </Typography>
                        <Typography component="p" variant="h6">
                          Ilmu Terapan
                        </Typography>
                        <Typography component="p" variant="h6">
                          Ekonomi & Bisnis
                        </Typography>
                        <Typography component="p" variant="h6">
                          Informatika
                        </Typography>
                        <Typography component="p" variant="h6">
                          Industri Kreatif
                        </Typography>
                        <Typography component="p" variant="h6">
                          Teknik Industri
                        </Typography>
                      </CardContent>
                    </Grid>
                  </Grid>
                </Card>
              </Card>
              {/* end content1 */}
            </Grid>

            {/* card content 2 */}
            <Grid item xs={12} md={6}>
              <Grid container>
                <Card className={classes.cardMborder}>
                  <CardActionArea>
                    <CardContent>
                      <Typography component="h2" variant="p">
                        <b>Teknik Elektro</b>
                      </Typography>
                      <CardMedia>
                        <img className={classes.cardM} alt="telkom university logo" src={require('../image/card-1.jpeg')} />
                      </CardMedia>
                      <Typography component="h2" variant="h5">
                        <b>Materi</b>
                      </Typography>
                      <Typography component="p" variant="p">
                        1. Komunikasi Data Boardband
                      </Typography>
                      <Typography component="p" variant="p">
                        2. Sistem Komunikasi
                      </Typography>
                      <Typography component="p" variant="p">
                        3. Teknik Transmisi Radio
                      </Typography>
                      <Typography component="p" variant="p">
                        4. Sistem Komunikasi Optik
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>

                <Card className={classes.cardMborder}>
                  <CardActionArea>
                    <CardContent>
                      <Typography component="h2" variant="p">
                        <b>Teknik Elektro</b>
                      </Typography>
                      <CardMedia>
                        <img className={classes.cardM} alt="telkom university logo" src={require('../image/card-1.jpeg')} />
                      </CardMedia>
                      <Typography component="h2" variant="h5">
                        <b>Materi</b>
                      </Typography>
                      <Typography component="p" variant="p">
                        1. Komunikasi Data Boardband
                      </Typography>
                      <Typography component="p" variant="p">
                        2. Sistem Komunikasi
                      </Typography>
                      <Typography component="p" variant="p">
                        3. Teknik Transmisi Radio
                      </Typography>
                      <Typography component="p" variant="p">
                        4. Sistem Komunikasi Optik
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styleMateri)(materi);