import React, { Component } from 'react';
import { Typography, Container, Card, CardContent, CardMedia, Grid, withStyles } from '@material-ui/core';
import { styleAkademik } from './Style';
import FullWidthTabs from './tab';
import { Link } from 'react-router-dom';


class DetilAkademik extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }


  render() {
    const { classes } = this.props;
    const MyLink = props => <Link to="/akademik" {...props} />;
    return (
      <div className={classes.wraper}>

        <Container >
          <Grid container alignItems="center" className={classes.containerslide}>
            <Grid item xs={6} md={8} style={{ right: '50%', top: '50%', background: "transparent", alignItems: "flex-end" }} >
              <Typography className={classes.teksKampus} style={{ fontSize: 30, }}>INI AKADEMIK NYA</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>
                <img className={classes.imgkampus} alt="auah" src={require('../image/card-1.jpeg')} />
              </Typography>
            </Grid>
          </Grid>
        </Container>

        {/* card container content detail akademik */}
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
                      <Typography variant="h6">
                        <FullWidthTabs />
                      </Typography>
                    </CardContent>
                  </Grid>
                </Grid>

              </Card>
              {/* end of card content1 */}
            </Grid>
          </Grid>
        </Container>
        {/* end of card container content promo */}
      </div>
    );
  }
}

export default withStyles(styleAkademik)(DetilAkademik);