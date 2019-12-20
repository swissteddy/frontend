import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleBerita } from './Style';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';


class berita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beritas: [],
    }
  }

  componentDidMount() {
    fetch("http://kampustelkom.herokuapp.com/api/news")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            beritas: result.content,
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    const { classes } = this.props;
    const { beritas } = this.state;
    // const date = Date(berita.createdAt);
    return (
      <div className={classes.wraper}>

        <Container >
          <Grid container alignItems="center" className={classes.containerslide}>
            <Grid item xs={6} md={8} style={{ right: '50%', top: '50%', background: "transparent", alignItems: "flex-end" }} >
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            {beritas.map((berita, i) => (
              <Grid key={berita._id} item xs={12} md={6}>
                <Card>
                  <CardActionArea>
                    <CardMedia className={classes.cardMedia}>
                      <img className={classes.cardMediaImage} alt="telkom university logo" src={berita.gambarNews} />
                    </CardMedia>
                    <CardContent>
                      <Typography component="h2" variant="p">
                        <Moment format="DD/MM/YYYY">
                         {berita.createdAt}
                      </Moment>
                      </Typography>
                      <Typography component="h2" variant="h5">
                        <b>{berita.judulNews}</b>
                      </Typography>
                      <Typography component="p" variant="p" align="justify">
                        {(berita.isiNews).toString().substring(0, 250)}..
                    </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>

                    <Link to={"/Detilberita/" + berita._id}>
                      <Button variant="outlined" color="primary">
                        Selengkapnya...
                    </Button>
                    </Link>

                  </CardActions>
                </Card>
              </Grid>
            ))}

          </Grid>
        </Container>

        <Container>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            <Grid item xs={12} md={6}>
              <Card className={classes.cardMborder1}>
                {beritas.map((berita, i) => (
                  <Card key={berita._id} className={classes.cardMborder2}>
                    <Grid container>
                      <Grid item md={3}>
                        <CardMedia>
                          <img className={classes.cardMtgl} alt="telkom university logo" src={berita.gambarNews} />
                        </CardMedia>
                      </Grid>
                      <Grid item md={9}>
                        <CardContent>
                          <Typography component="h2" variant="h5">
                            <b>{berita.judulNews}</b>
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={"/Detilberita/" + berita._id}>
                            <Button variant="outlined" color="primary">
                              Selengkapnya...
                            </Button>
                          </Link>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Card>
                ))}
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              {beritas.map((berita, i) => (
                <Card key={berita._id}>
                  <CardMedia >
                    <img className={classes.cardMtgl} alt="telkom university logo" src={berita.gambarNews} />
                  </CardMedia>
                  <CardContent>
                    <Typography component="h2" variant="p">
                    <Moment format="YYYY/MM/DD">
                         {berita.createdAt}
                      </Moment>
                    </Typography>
                    <Typography component="h2" variant="h5">
                      <b>{berita.judulNews}</b>
                    </Typography>
                    <Typography component="p" variant="p" align="justify">
                      {(berita.isiNews).toString().substring(0, 300)}..
                  </Typography>
                  </CardContent>
                  <CardActions>
                    <Link to={"/Detilberita/" + berita._id}>
                      <Button variant="outlined" color="primary">
                        Selengkapnya...
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styleBerita)(berita);