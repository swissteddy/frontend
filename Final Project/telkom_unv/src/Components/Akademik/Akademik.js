import React, { Component } from 'react';
import { Typography, Container, Card, CardContent, CardMedia, CardActions, Button, Grid, withStyles } from '@material-ui/core';
import { styleAkademik } from './Style';
import { Link } from 'react-router-dom';

class Akademik extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { classes } = this.props;
    const MyLink = props => <Link to="/detilakademik" {...props} />;
    return (
      <div className={classes.wraper}>

        <Container >
          <Grid container alignItems="center" className={classes.containerslide}>
            <Grid item xs={6} md={8} style={{  right: '50%', top: '50%',background:"transparent", alignItems:"flex-end"}} >              
                <Typography className={classes.teksKampus} style={{ fontSize: 30, }}>INI AKADEMIK NYA</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>
                <img className={classes.imgkampus} alt="auah" src={require('../image/card-1.jpeg')} />
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* card container content Promo */}
        <Container>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            <Grid item xs={12} md={12}>
              {/* card content 1 */}
              <Card>
           
                  <Grid container>
                    <Grid item md={3}>
                      <CardMedia>
                        <img className={classes.cardMLeft} alt="telkom university logo" src={require('../image/card-1.jpeg')} />
                      </CardMedia>
                    </Grid>

                    <Grid item md={9}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          <b>Teknik Elektro</b>
                        </Typography>
                        <Typography component="p" variant="h6">
                          Tanggal <b> card content </b>
                        </Typography>
                        <Typography component="p" variant="p">
                        Quisque in commodo est, nec porttitor libero. Donec sit amet mattis felis, vitae consequat diam. Vivamus lorem tortor, venenatis ut cursus eget, molestie id ligula. Maecenas condimentum nisl faucibus porttitor venenatis. Vivamus eu velit purus. Duis tempor nisi rhoncus lectus viverra, vel dictum ligula placerat. Nunc pulvinar tempus metus sed eleifend. Etiam mollis risus ut lacus sagittis, eget placerat ipsum semper. Donec eu nisi viverra, pharetra elit vitae, dignissim tellus. Nam pretium vehicula lorem ut rutrum. Morbi gravida suscipit mi ut vestibulum. Cras euismod, augue a iaculis rhoncus, lacus neque placerat nulla, a ultrices diam magna vel magna. Cras ex felis, porta condimentum pellentesque non, rutrum ac augue.  <b> card content </b>
                        </Typography>
                      </CardContent>
                      <Grid container justify="flex-end">
                        <Grid item md={3}>
                          <CardActions>
                          <Button variant="contained" color="primary" component={MyLink} alignItem="right">
                              Cek Program studi
                            </Button>
                          </CardActions>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
           
              </Card>
              {/* end of card content1 */}
            </Grid>

            <Grid item xs={12} md={12}>
              {/* card content 2 */}
              <Card>
             
                  <Grid container>
                    
                    <Grid item md={9}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                          <b>Komunikasi & Bisnis</b>
                        </Typography>
                        <Typography component="p" variant="h6">
                          Tanggal <b> card content </b>
                        </Typography>
                        <Typography component="p" variant="p">
                        Quisque in commodo est, nec porttitor libero. Donec sit amet mattis felis, vitae consequat diam. Vivamus lorem tortor, venenatis ut cursus eget, molestie id ligula. Maecenas condimentum nisl faucibus porttitor venenatis. Vivamus eu velit purus. Duis tempor nisi rhoncus lectus viverra, vel dictum ligula placerat. Nunc pulvinar tempus metus sed eleifend. Etiam mollis risus ut lacus sagittis, eget placerat ipsum semper. Donec eu nisi viverra, pharetra elit vitae, dignissim tellus. Nam pretium vehicula lorem ut rutrum. Morbi gravida suscipit mi ut vestibulum. Cras euismod, augue a iaculis rhoncus, lacus neque placerat nulla, a ultrices diam magna vel magna. Cras ex felis, porta condimentum pellentesque non, rutrum ac augue.  <b> card content </b>
                        </Typography>
                      </CardContent>
                      <Grid container justify="flex-start">
                        <Grid item md={3}>
                          <CardActions>
                            <Button variant="contained" color="primary" alignItem="left" component={MyLink}>
                            Cek Program studi
                            </Button>
                          </CardActions>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid item md={3}>
                      <CardMedia>
                        <img className={classes.cardMRight} alt="telkom university logo" src={require('../image/card-1.jpeg')} />
                      </CardMedia>
                    </Grid>

                  </Grid>
              
              </Card>
              {/* end of card content2 */}
            </Grid>
          </Grid>
        </Container>
        {/* end of card container content promo */}
      </div>
    );
  }
}

export default withStyles(styleAkademik)(Akademik);