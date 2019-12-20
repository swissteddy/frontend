import React, { Component } from 'react';
import { Typography, Container, Paper, withStyles, Grid, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';

const styles = theme => ({
  boxitem: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    color: 'white',
    padding: 10
  },
  linkMore: {
    textAlign: 'right'
  }
});

class homes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: this.props.location.id,
    };
  }

  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {

          this.setState({
            items: result,
          
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    const { classes } = this.props;
    const contact = this.state.items
    return (
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Paper key={contact.id} className={classes.boxitem}>
              <Typography variant="h5" component="h3">
                {contact.name}
              </Typography>
              <Typography component="p">
                Email Address : {contact.email}
              </Typography>
             
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography component="p">
                    No.telp : {contact.phone}
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.linkMore}>
                  <Button variant="contained" className={classes.button}>
                    <Link to={{
                      pathname: '/',
                      id: `${contact.id}`,
                    }}>
                      Back
              </Link >
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(homes)
