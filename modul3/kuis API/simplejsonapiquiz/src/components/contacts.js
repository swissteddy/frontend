import React, { Component } from 'react';
import { Typography, Container, Paper, withStyles, Grid, Button } from '@material-ui/core/';
import { Link } from 'react-router-dom';


const styles = theme => ({
  boxitem: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    padding: 10,
    color: 'white'
  },
  linkMore: {
    textAlign: 'right'
  }
});

class contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
            address: result.address,
            street:result.street,
            city:result.city
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

  render() {
    const { classes } = this.props;
    return (
      <Container fixed>
        <Grid container spacing={3}>
          {this.state.items.map(contact => (
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
                        pathname: '/detil',
                        id: `${contact.id}`,
                      }}>
                        Read more
                          </Link >     
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
}

export default withStyles(styles)(contacts)
