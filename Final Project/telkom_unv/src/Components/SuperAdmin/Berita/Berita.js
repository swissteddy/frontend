import React, { Component } from 'react';
import { Container, Grid, Typography, withStyles, Card, CardActions, CardContent, CardMedia, Button } from '@material-ui/core';
import { Berita } from './Style';
import { Link } from 'react-router-dom';
import moment from 'moment';

import ModalAdd from './ModalAdd';

class KelolaBerita extends Component {
  constructor(props) {
    super(props);
    this.state = {
      beritas: [],
      open: false,
      edit: false,
    }
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
  }

  //Delete Function API
  deletePost = (id) => {
    console.log(id)
    fetch(`http://kampustelkom.herokuapp.com/api/news/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))

    .then(fetch("http://kampustelkom.herokuapp.com/api/news"))
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
    
  }

  preventDefault = (event) => {
    event.preventDefault();
  }

  handleModal = () => {
      this.setState({open:!this.state.open})
  }

  //edit for modal
  editModal = (id) => {
        
    this.setState({
        open:!this.state.open,
        edit:!this.state.edit,
        id
    })
    this.props.history.push(`?id=${id}`)
}


  render() {
    const { classes } = this.props;
    const { beritas } = this.state;
    return (
      <div className={classes.wraper}>
        <Typography>
          <Link to="/admin">Utama</Link> >  <Link to="/admin/berita"> Berita</Link>
        </Typography>
        <hr /><br />
        <Container>

          <Typography component="h1" variant="h4" align="center">Daftar Berita</Typography>
          <br />
          <hr />
          <Grid container justify="center">
            {/* grid item content */}

            {beritas.map((news, i) => (
            <Grid key={news._id} item md={4}>
              <Container >
                <Card className={classes.contNews}>
                  <CardContent>
                    <Typography align="right" color="green">Aktif</Typography>
                  </CardContent>
                  <CardMedia align="center">
                    <img src={news.gambarNews} />
                  </CardMedia>
                  <CardContent>
                    <Typography component="h2" variant="h6">
                      {news.judulNews}
                    </Typography>
                    <Typography component="p" variant="p">
                    {moment(news.updatedAt).format("D MMM YYYY")}
                </Typography>
                    <Typography>
                    {(news.isiNews).toString().substring(1,50)}...
                </Typography>
                  </CardContent>
                  <CardActions>
                    <Button variant="contained" color="secondary" onClick={() => this.editModal(news._id)}>
                      Edit
                  </Button>
                    <Button>hapus</Button>
                  </CardActions>
                </Card>
              </Container>
            </Grid>
            ))}

            {/* end of grid item content */}


          </Grid>
        </Container>

        {this.state.open &&
          <ModalAdd open={this.state.open} close={this.handleModal} edit={this.state.edit} id={this.state.id} />
        }

      </div>
    );
  }
}

export default withStyles(Berita)(KelolaBerita);