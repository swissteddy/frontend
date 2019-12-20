import React,{Component} from 'react';
import {TextField, withStyles, makeStyles, Grid, Container, Button, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core/';

const styles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 500,
  },
}));

class edit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: '',
      body: '',
      userid: 0,
      users: [],
      id:this.props.location.id,
    };
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]:event.target.value})
  }

  editPost = () => {

    fetch(`http://dummy.restapiexample.com/api/v1/update/21/${this.state.id}`, {
      method: 'PUT',
      body: JSON.stringify({ //convert string body ke json
        title: this.state.employee_salary,
        body: this.state.employee_age,
        id: this.state.employee_name
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
    .then(response => response.json())
    .then(json => console.log(json))

  }

  componentDidMount() {
    fetch("http://dummy.restapiexample.com/api/v1/employees")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            users: result,
            title:result.employee_salary,
            body:result.employee_age,
            userid:result.id,
          });
        },
        (error) => {
          console.log(error)
        }
      )

    fetch(`http://dummy.restapiexample.com/api/v1/employee/${this.state.id}`)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            items: result,
            title:result.employee_salary,
            body:result.employee_age,
            userid:result.id,
          });
        },                
        (error) => {
          console.log(error)   
        }
      )
  }

    render() {
      const {classes} = this.props;
        return (
            <Container fixed>
              <Grid container spacing={3}>
                <form className={classes.container} noValidate autoComplete="off">
                  <div>
                    <TextField
                      required
                      id="title"
                      name="title"
                      className={classes.textField}
                      style={{width:500}}
                      margin="normal"
                      onChange={this.changeHandler}
                      value={this.state.title}
                    />
                  </div>
                  <div>
                    <TextField
                      required
                      id="body"
                      name="body"
                      className={classes.textField}
                      style={{width:500}}
                      margin="normal"
                      onChange={this.changeHandler}
                      value={this.state.body}
                    />
                  </div>
                  <div>
                    <FormControl style={{marginBottom:10}}>
                      <InputLabel shrink id="label-demi">
                        
                      </InputLabel>
                      <Select
                        labelId="label-demi"
                        id="label-demi-id"
                        onChange={this.changeHandler}
                        displayEmpty
                        name="userid"
                        style={{width:500, marginBottom:10}}
                        value=""
                      >
                        
                        {this.state.users.map((item,i) => (
                          (item.id===this.state.id)
                          ?
                            <MenuItem key={i} value="" selected>{item.employee_name}
                            </MenuItem>
                          :
                            <MenuItem key={i} value={item.id}>{item.employee_name}</MenuItem>
                        ))}
                      </Select>

                      
                    </FormControl>
                  </div>
                  <Button variant="contained" color="primary" onClick={this.editPost}>
                    Submit
                  </Button>
                </form>
              </Grid>

            </Container>
        );
    }
}

export default withStyles(styles)(edit)