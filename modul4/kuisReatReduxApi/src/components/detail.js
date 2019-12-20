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
      id:this.props.location.id,
    };
  }

  componentDidMount() {
    fetch(`http://dummy.restapiexample.com/api/v1/employee/${this.state.id}`, {
      mode: 'cors',
      method: 'GET',
      dataType: 'json',
      headers: {
        'Access-Control-Allow-Origin':'*',
        'Content-Type': 'multipart/form-data'
      }
    })
      .then(res => 
        res.json()
        )
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
                id:{contact.id}
              </Typography>
              <Typography variant="h5" component="h3">
                name : {contact.employee_name}
              </Typography>
              <Typography component="p">
                Salary : {contact.employee_salary}
              </Typography>
             
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Typography component="p">
                    Age : {contact.employee_age}
                  </Typography>
                </Grid>
                <Grid item xs={6} className={classes.linkMore}>
                  <Button variant="contained" className={classes.button}>
                    <Link to={{
                      pathname: '/',
                      // id: `${contact.id}`,
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
