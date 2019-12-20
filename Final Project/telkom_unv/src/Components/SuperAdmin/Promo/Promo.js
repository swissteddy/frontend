import React, { Component } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  withStyles, 
  Card, 
  CardActions, 
  CardContent, 
  CardMedia, 
  Button } from '@material-ui/core';
import { Promo } from './Style';

import {Link} from 'react-router-dom';

import moment from 'moment';

import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import ModalAdd from './ModalAdd';

import AdminUtama from './UploadImg';

class KelolaPromo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      promos: [],
      open:false,
      edit:false,
    }
  }

  componentDidMount() {
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
  }

  //Delete Function API
  deletePost = (id) => {
    console.log(id)
    fetch(`http://kampustelkom.herokuapp.com/api/promo/${id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then(json => console.log(json))

    .then(fetch("http://kampustelkom.herokuapp.com/api/promo"))
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
    const {promos} = this.state;
   
    return (
      <div className={classes.wraper}>
        <Typography>
          <Link to="/admin">Utama</Link> >  <Link to="/admin/promo"> Promo</Link>
        </Typography>
        <hr /><br />

        <Container>
          <Typography component="h1" variant="h4" align="center">Daftar Promo</Typography>
          <br />
          <hr />
          <Grid container justify="center">

          {promos.map((promo, i) => (
           
            <Grid key={promo._id} item md={4}>
              <Container >
                              
                <Card  className={(promo.statusPromo) ? 'classes.contNews' : 'classes.uncontNews'}>
                  <CardContent>
                    <Grid container justify="space-around" alignItems="center">
                      <Grid item md={2}>
                      <Typography component="h6" variant="h6">{(promo.statusPromo) ? 'Aktif' : 'Tidak aktif'}</Typography>
                      </Grid>
                      <Grid item md={1}>
                      <Button onClick={()=>this.deletePost(promo._id)} ><HighlightOffRoundedIcon/></Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                  <CardMedia align="center">
                    <img src={promo.gambarPromo} />
                  </CardMedia>
                  <CardContent>
                    <Typography component="h2" variant="h6">
                      {promo.namaPromo}
                    </Typography>
                    <Typography component="p" variant="p">
                       {moment(promo.updatedAt).format("D MMM YYYY")}
                </Typography>
                    <Typography className={classes.cardTxt}>
                     {(promo.deskripsiPromo).toString().substring(0,50)}...
                </Typography>
                  </CardContent>
                  <CardActions>
                  <Button variant="contained" color="secondary\" onClick={()=>this.editModal(promo._id)}>
                     Edit
                  </Button>
                    <Button>hapus</Button>

                  </CardActions>
                </Card>
              </Container>
            </Grid>
            
          ))}

            {/* grid item content */}
            <Grid item md={4}>
              <Container >
                <Card className={classes.uncontNews}>
                  <CardContent>
                    <Typography align="right" color="green">Tidak Aktif</Typography>
                  </CardContent>
                  <CardMedia align="center">
                    <img src={require('../../image/card-1.jpeg')} />
                  </CardMedia>
                  <CardContent>
                    <Typography component="h2" variant="h6">
                      penggunaan <b>Judul judulan</b>
                    </Typography>
                    <Typography component="p" variant="p">
                      tanggal aja
                </Typography>
                    <Typography>
                      ini adalhah content berisi 100 karakter
                </Typography>
                  </CardContent>
                  <CardActions>
                  <Link to="/admin/promo/ubah"><Button color="inherit">Ubah</Button></Link>
                    <Button color="inherit" >hapus</Button>

                  </CardActions>
                </Card>
              </Container>
            </Grid>
            {/* end of grid item content */}
          </Grid>
        </Container>

        <AdminUtama/>

        {this.state.open &&
          <ModalAdd open={this.state.open} close={this.handleModal} edit={this.state.edit} id={this.state.id}/>
        }
      </div>
    );
  }
}

export default withStyles(Promo)(KelolaPromo);