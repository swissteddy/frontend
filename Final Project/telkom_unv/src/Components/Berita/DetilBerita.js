import React, { Component } from 'react';
import { Typography, Container, Card, CardContent, CardMedia, CardActions, Button, Grid, withStyles } from '@material-ui/core';
import { styleBerita } from './Style';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import 'moment-timezone';

class DetilBerita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detilberitas: [],
      id: this.props.match.params.id,
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


  componentWillMount() {
    fetch(`http://kampustelkom.herokuapp.com/api/news/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            detilberitas: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  

  render() {
    const { classes } = this.props;
    // const MyLink = props => <Link to="/detilberita" {...props} />;
    const { detilberitas, beritas } = this.state;
    console.log('tes')
    return (
      <div className={classes.wraper}>

        <Container >
          <Grid container alignItems="center" className={classes.containerslide}>
            <Grid item xs={6} md={8} style={{ right: '50%', top: '50%', background: "transparent", alignItems: "flex-end" }} >
              <Typography className={classes.teksKampus} style={{ fontSize: 45, }}>Detail News</Typography>
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography>
                <img className={classes.imgkampus} alt="auah" src={detilberitas.gambarNews} />
              </Typography>
            </Grid>
          </Grid>
        </Container>

        <Container>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography component="h2" variant="p">
                    <Moment format="DD/MM/YYYY">
                      {detilberitas.createdAt}
                    </Moment>
                  </Typography>
                  <Typography component="h2" variant="h5">
                    <b>{detilberitas.judulNews}</b>
                  </Typography>
                  <Typography component="p" variant="h5" align="justify">
                    {detilberitas.isiNews}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>


            <Grid item xs={12} md={6}>
              {beritas.map((berita, i) => (
                <Card key={berita._id}>
                  <Card className={classes.cardMborder}>
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
                          <Typography component="p" variant="h6">
                            <Moment format="DD/MM/YYYY">
                              {berita.createdAt}
                            </Moment>
                          </Typography>
                          <Typography component="p" variant="p" align="justify">
                            {(berita.isiNews).toString().substring(0, 300)}..
                        </Typography>
                        </CardContent>
                        <CardActions>
                          <Link to={"/Detilberita/" + berita._id}>
                            <Button variant="outlined" color="primary" alignItem="right">
                              Selengkapnya...
                            </Button>
                          </Link>
                        </CardActions>
                      </Grid>
                    </Grid>
                  </Card>
                </Card>
              ))}
            </Grid>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styleBerita)(DetilBerita);