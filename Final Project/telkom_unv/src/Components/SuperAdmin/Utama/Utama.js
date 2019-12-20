import React, { Component } from 'react';
import {
  Container,
  Grid,
  Typography,
  withStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
} from '@material-ui/core';

import { Tagihan } from './Style';
import { Link } from 'react-router-dom';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';



class AdminUtama extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // upload image
      file: '',
      imagePreviewUrl: '',

      //api slider
      sliders: [],
    };
  }


  // upload Image
  changeImage = (event) => {
    event.preventDefault()
    console.log(this.uploadInput)

    let reader = new FileReader();
    let file = event.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)
  }

  handleUploadImage = (event) => {
    event.preventDefault();

    const data = new FormData();
    data.append('file', this.uploadInput.files[0]);
    data.append('filename', this.fileName.value);
    console.log(this.fileName.value)
    console.log(this.state.imagePreviewUrl)
    fetch('http://kampustelkom.herokuapp.com/api/slider', {
      method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/x-www-form-urlencoded'
    //  },
      // body: JSON.stringify({
      //   statusSlider: true,
      //   namaSlider: this.fileName.value,
      //   gambarSlider: this.state.imagePreviewUrl,
      // })
      body: {
        statusSlider: true,
        namaSlider: this.fileName.value,
        gambarSlider: this.state.imagePreviewUrl,
      }
    }).then((response) => {
      console.log(response.json)
    });
  }


//featching API
  componentDidMount() {
    fetch("http://kampustelkom.herokuapp.com/api/slider")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            sliders: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

//Delete Function API
  deletePost = (id) => {
    console.log(id)
    fetch(`http://kampustelkom.herokuapp.com/api/slider/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))
    .then = () => {
      fetch("http://kampustelkom.herokuapp.com/api/slider")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            sliders: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )
    }
  }

  render() {
    const { classes } = this.props;
    const { sliders } = this.state

    // upload image
    // let {imagePreviewUrl} = this.state;
    return (
      <div className={classes.wraper}>

        <CardContent>
          <Container>
            <Typography>
              <Link to="/admin">Utama</Link> >
            </Typography>
            <hr /><br />
            <Grid container>
              {/* grid item */}
              <Grid item md={3}>
                <Card>
                  <CardActionArea>
                    <Typography align="center"> Jumlah Mahasiswa </Typography>
                  </CardActionArea>
                  <CardContent>
                    <Typography component="h1" variant="h2" align="center">1421</Typography>
                  </CardContent>
                  <CardActions className={classes.cek}>
                    <center>
                      <Button> <Link to="/admin/mahasiswa">Cek</Link></Button>
                    </center>
                  </CardActions>
                </Card>
              </Grid>
              {/* end of grid item */}
            </Grid>
          </Container>
        </CardContent>

        {/* upload image */}
        <CardContent style={{ marginTop: 20 }}>
          <Container>
            <Typography component="p" variant="p">
              Upload Slider Image &nbsp;
            </Typography><hr /><br />

            {/* gamber slider preview */}
            <Grid container spacing={3}>
              {sliders.map((img, i) => (
                <Grid key={img._id} item xs={12} md={4}>
                  <Grid container align="center" spacing={3}>
                    <Grid item md={12}>
                      <Card>
                        <CardContent>
                          <Grid container justify="flex-end" spacing={2}>
                            <Grid item md={2}>
                              <Button onClick={()=>this.deletePost(img._id)} ><HighlightOffRoundedIcon/></Button>
                          </Grid>
                        </Grid>
                      </CardContent>
                          <CardMedia>
                            <div className={classes.sliderBox}>
                              <img className={classes.sliderImg} src={img.gambarSlider} />
                            </div>
                          </CardMedia>
                    </Card>
                  </Grid>


                    </Grid>
                  </Grid>
                  ))}
            </Grid> 
            <br/>
            {/* end gamber slider preview */ }
                < Grid container justify = "left" spacing = { 4} >
                <Grid item md={4}>
                  <Card>
                    <CardContent>
                      <form onSubmit={this.handleUploadImage}>
                        <div>
                          <input ref={(ref) => { this.uploadInput = ref; }} onChange={this.changeImage}
                            type='file' />
                        </div>
                        <div>
                          <input ref={(ref) => { this.fileName = ref; }} type="text" placeholder="masukan nama file" />
                        </div>
                        <br />
                        <div>
                          <button type="button" onClick={this.handleUploadImage}>upload</button>
                        </div>
                        {/* <img src={imagePreviewUrl} alt="img" /> */}
                      </form>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item md={4}>
                  <Card>
                    <CardContent>
                      <img alt="image previwe" src={this.state.imagePreviewUrl} />
                    </CardContent>
                  </Card>
                </Grid>
            </Grid>
          </Container>
        </CardContent>
        {/* end of upload image */}
      </div>
    );
  }
}

export default withStyles(Tagihan)(AdminUtama);