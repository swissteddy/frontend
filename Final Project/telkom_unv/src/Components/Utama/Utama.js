import React, { Component } from 'react';
import { Fade, Modal, Container, Grid, Typography, withStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { styleHome } from './Style';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Img from 'react-image';
import { Link } from 'react-router-dom';

class utama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slides: [],
      beritas: [],
      promos: [],
      open: false
    };
  }


  componentDidMount() {
    fetch("http://kampustelkom.herokuapp.com/api/news")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            beritas: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )

    fetch("http://kampustelkom.herokuapp.com/api/promo")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            promos: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )

    fetch("http://kampustelkom.herokuapp.com/api/slider")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            slides: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )

    setTimeout(() => {
      this.setState({
        open: true
      })
    },
      6000
    )
  }

  handleClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    const settings = {
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    const { classes } = this.props;
    const { slides, beritas, promos, open } = this.state;
    const { } = this.state;
    // const MyLink = props => <Link to="/detilberita" {...props} />;

    return (

      <div className={classes.wraper}>
        <Modal
          open={open}
          onClose={this.handleClose}
          className={classes.modalPromo}
        >
          <Fade in={open}>
            <container>
              {promos.map((promo, i) => (
                <Card key={promo._id}>
                  <CardContent className={classes.cardMediaPromo}>
                    <Img className={classes.imagePromo} src={promo.gambarPromo} />
                    <Typography>
                      {promo.deskripsiPromo}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
            </container>
          </Fade>
        </Modal>
        <Container>
          <div className={classes.containerslide}>
            <Slider {...settings}>
              {slides.map((slide, a) => (
                <div key={slide._id} className={classes.slickSlideImg}>
                  <Img className={classes.banner} src={slide.gambarSlider} />
                </div>
              ))}
            </Slider>
          </div>
        </Container>
        <Container>
          <div>
            <br /> <hr /> <br />
            <Typography component="h1" variant="h4" align="center">Daftar Berita</Typography>
            <br /><hr />
          </div>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            {beritas.map((berita, i) => (
              <Grid key={berita._id} item xs={12} md={6}>
                <Card>
                  <CardActionArea>
                    <CardMedia className={classes.cardMedia}>
                      <Img className={classes.cardMediaImage} src={berita.gambarNews} />
                    </CardMedia>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        <b>{berita.judulNews}</b>
                      </Typography>
                      <Typography component="p" variant="p" align="justify">
                        {(berita.isiNews).toString().substring(0, 300)}..
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
          <div>
            <br /> <hr /> <br />
            <Typography component="h1" variant="h4" align="center">Promo</Typography>
            <br /><hr />
          </div>
          <Grid container spacing={5} justify="" alignItem="center" style={{ marginTop: 10 }}>
            {promos.map((promo, i) => (
              <Grid key={promo._id} item xs={12} md={6}>
                <Card>
                  <CardActionArea>
                    <CardMedia className={classes.cardMedia}>
                      <Img className={classes.cardMediaImage} src={promo.gambarPromo} />
                    </CardMedia>
                    <CardContent>
                      <Typography component="h2" variant="h5">
                        <b>{promo.namaPromo}</b>
                      </Typography>
                      <Typography component="p" variant="p" align="justify">
                        {(promo.deskripsiPromo).toString().substring(0, 300)}..
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Link to={"/Kontak"}>
                      <Button variant="outlined" color="primary">
                        Hubungi Kami
                    </Button>
                    </Link>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styleHome)(utama);