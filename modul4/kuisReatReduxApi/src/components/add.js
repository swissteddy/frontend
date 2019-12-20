import React, { Component } from 'react';
import { TextField, withStyles, makeStyles, Grid, Container, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
// , FormControl, InputLabel, Select, MenuItem
import { connect } from 'react-redux';
// import { changeHandler, simpanPost } from "../store/actions/action"

//tambahan code untuk redux thunk /middleware
import { changeHandler, simpanPost, fetchUsers } from '../store/actions/action'

const styles = makeStyles(theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    TextField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 250,
    },
    select: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        minWidth: 250,
    }
}));

class AddPost extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         items: [],
    //         title: '',
    //         body: '',
    //         userid: 0,
    //         users: []
    //     };
    // }

    // changeHandler = (event) => {
    //     this.setState({ [event.target.name]: event.target.value })
    // }

    // simpanPost = () => {
    //     fetch(`https://jsonplaceholder.typicode.com/posts`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //             title: this.state.title,
    //             body: this.state.body,
    //             userId: this.state.userid
    //         }),
    //         headers: {
    //             "Content-type": "application/json; charset=UTF-8"
    //         }
    //     })
    //         .then(response => response.json())
    //         .then(json => console.log(json))
    // }

    componentDidMount() {
        // fetch("https://jsonplaceholder.typicode.com/users")
        //     .then(res => res.json())
        //     .then(
        //         (result) => {
        //             this.setState({
        //                 users: result
        //             });
        //         },
        //         (error) => {
        //             console.log(error)
        //         }
        //     )

        //tambahan code untuk redux thunk /middleware
        const { fetchUsers } = this.props
        fetchUsers()
    }


    render() {
        const {
            // items,
            title,
            body,
            userid,
            users,
            changeHandler,
            simpanPost
        } = this.props;
        const { classes } = this.props;
        return (
            <Container fixed>
                <Grid container spacing={3}>
                    <form className={classes.container} noValidate autoComplete="off">
                        <div>
                            <TextField
                                required
                                id="title"
                                label="Masukan Gaji"
                                name="title"
                                className={classes.TextField}
                                margin="normal"
                                value={title}
                                // onChange={this.changeHandler}
                                onChange={event => { changeHandler(event.target.name, event.target.value); }}
                            />
                        </div>

                        <div>
                            <TextField
                                required
                                id="body"
                                label="Masukan Umur"
                                name="body"
                                className={classes.TextField}
                                margin="normal"
                                // onChange={this.changeHandler}
                                value={body}
                                onChange={event => {
                                    changeHandler(event.target.name, event.target.value);
                                }}
                            />
                        </div>

                        <div>
                            <FormControl className={classes.select} style={{ minWidth: 120, marginBottom: 10 }}>
                                <InputLabel id="label">Pilih User</InputLabel>
                                <Select
                                    labelId="label"
                                    id="select"
                                    name="userid"
                                    value={userid}

                                    // onChange={this.changeHandler}
                                    onChange={event => {
                                        changeHandler(event.target.name, event.target.value);
                                    }}
                                >
                                    {/* {this.state.users.map((item, i) => ( */}
                                    {users.map((item, i) => (
                                        <MenuItem key={i} value={item.id}>{item.employee_name}</MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </div>
                        <Button variant="contained" color="primary" onClick={simpanPost}>
                            Submit
                        </Button>

                        {/* <Button variant="contained" color="primary" onClick={this.simpanPost}> */}

                    </form>
                </Grid>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    title: state.title,
    body: state.body,

    //tambahan code untuk redux thunk /middleware
    users: state.users,
    userid: state.userid,
});

const mapDispatchToProps = dispatch => ({
    changeHandler: (name, value) => dispatch(changeHandler(name, value)),
    simpanPost: () => dispatch(simpanPost()),

    //tambahan code untuk redux thunk /middleware
    fetchUsers: () => dispatch(fetchUsers())
});

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
//   )(withStyles(styles)(AddPost));
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(AddPost));