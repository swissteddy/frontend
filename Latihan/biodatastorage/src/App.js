import React, { Component } from 'react';
import {Typography, withStyles, Box, Table, TableBody, TableCell, TableHead, TableRow, Paper, Container, Fab, Button} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import MinIcon from '@material-ui/icons/Minimize';

const styles = theme => ({
  title:{
    background: 'black',
    color:'white',
  },
  textTable:{
    color:'black'
  }
});

const listMurid = [
  {id:1,nama:'Reza',email:'reza@email.com',notelp:'081208120812'},
  {id:2,nama:'Tri',email:'tri@email.com',notelp:'081208120812'},
  {id:3,nama:'Mahar',email:'mahar@email.com',notelp:'081208120812'},
  {id:4,nama:'Dhika',email:'dhika@email.com',notelp:'081208120812'},
  
]

if (localStorage.getItem("murid") === null) {
  localStorage.setItem('murid', JSON.stringify(listMurid));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMurid: [],
      add:false,
      nama:'',
      notelp:''
    }   
  }
  
  componentWillMount() {
    let listMurid = JSON.parse(localStorage.getItem("murid"));
    this.setState((prevState, props) => ({
      listMurid
    }))
  }

  addForm = () => {
    this.setState({add:true})
  }

  minForm = () => {
    this.setState({add:false})
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]:event.target.value
    })
  }

  inserStorage = () => {
    localStorage.setItem('murid',JSON.stringify(this.state.listMurid));
  }
  
  tambahMurid = () => {
    let totalRow = this.state.listMurid.length
    this.setState( (prevState) => ({
      listMurid: [...prevState.listMurid, {
        id: totalRow+1,
        name: this.state.nama, 
        email: this.state.email, 
        notelp: this.state.nama 
      }]
    }),
    () => {localStorage.setItem('murid',JSON.stringify(this.state.listMurid))}
    ) 
  }
  
  hapusMurid = (id) => {
    let r = window.confirm("Do you want to delete id = "+id);
    if (r === true) {
      let filteredStudentList = this.state.listMurid.filter(
        x => x.id !== id
      );       
      
      this.setState((prevState, props) => ({
          listMurid: listMurid
       }));       
       
       localStorage.setItem(
         'murid',
         JSON.stringify(filteredStudentList)
       );
    }
  } 
  
  render() {
    const {classes} = this.props
    const {listMurid} = this.state
    console.log(listMurid)
    return (
      <React.Fragment>

        <Box component="div" className={classes.title}>
          <Typography variant="h4" component="h3" align="center">
            Daftar Murid
          </Typography>
          <hr/>
        </Box>

        <Container>
          <Paper>
            <Table>

              <TableHead>

                <TableRow style={{backgroundColor:'lightGreen'}}>
                  <TableCell align="center" className={classes.textTable}>Nomor</TableCell>
                  <TableCell align="center" className={classes.textTable}>Nama</TableCell>
                  <TableCell align="center" className={classes.textTable}>Email</TableCell>
                  <TableCell align="center" className={classes.textTable}>No.Telp</TableCell>
                  <TableCell align="center" className={classes.textTable}>Aksi</TableCell>
                </TableRow>

              </TableHead>
              <TableBody style={{backgroundColor:'lightBlue'}}>
                {listMurid.map((item,i) => (
                  <TableRow>
                    <TableCell  align="center" className={classes.textTable}>{item.id}</TableCell>
                    <TableCell align="center" className={classes.textTable}>
                      {item.nama}
                    </TableCell>
                    <TableCell  align="center" className={classes.textTable}>{item.email}</TableCell>
                    <TableCell align="center" className={classes.textTable}>{item.notelp}</TableCell>
                    <TableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<DeleteIcon />}
                        onClick={()=>{this.hapusMurid(item.id)}}
                      >Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Paper>
        </Container>
        {this.state.add &&
          <Container style={{marginTop:20}}>
              <input type="text" name="nama" value={this.state.nama} onChange={this.changeHandler}/>
              <input type="text" name="email" value={this.state.email} onChange={this.changeHandler}/>
              <input type="text" name="notelp" value={this.state.notelp} onChange={this.changeHandler}/>
              <button onClick={this.tambahMurid}>Tambah Data</button>
          </Container>
        }

        {this.state.add &&
          <Fab color="primary" onClick={this.minForm} aria-label="add" style={{position:'fixed', right:10, bottom:20}}>
            <MinIcon />
          </Fab>
        }

        {!this.state.add &&
          <Fab color="primary" onClick={this.addForm} aria-label="add" style={{position:'fixed', right:10, bottom:20}}>
            <AddIcon />
          </Fab>
        }

      </React.Fragment>
    );
  }
}

export default withStyles(styles)(App);

// import React from 'react';

//  class App extends React.Component {
//     userData;

//     constructor(props) {
//         super(props);

//         this.onChangeName = this.onChangeName.bind(this);
//         this.onChangeEmail = this.onChangeEmail.bind(this);
//         this.onChangePhone = this.onChangePhone.bind(this);
//         this.onSubmit = this.onSubmit.bind(this);

//         this.state = {
//             name: '',
//             email: '',
//             phone: ''
//         }
//     }

//     // Form Events
//     onChangeName(e) {
//         this.setState({ name: e.target.value })
//     }

//     onChangeEmail(e) {
//         this.setState({ email: e.target.value })
//     }

//     onChangePhone(e) {
//         this.setState({ phone: e.target.value })
//     }

//     onSubmit(e) {
//         e.preventDefault()

//         this.setState({
//             name: this.userData.name,
//             email: this.userData.email,
//             phone: this.userData.phone,
//         })
//     }

//     // React Life Cycle
//     componentDidMount() {
//         this.userData = JSON.parse(localStorage.getItem('user'));

//         if (localStorage.getItem('user')) {
//             this.setState({
//                 name: this.userData.name,
//                 email: this.userData.email,
//                 phone: this.userData.phone
//             })
//         } else {
//             this.setState({
//                 name: '',
//                 email: '',
//                 phone: ''
//             })
//         }
//     }

//     componentWillUpdate(nextProps, nextState) {
//         localStorage.setItem('user', JSON.stringify(nextState));
//     }


//     render() {
//         return (
//             <div className="container">
//                     <div className="form-group">
//                         <label>Name</label>
//                         <input type="text" className="form-control" value={this.state.name} onChange={this.onChangeName} />
//                     </div>
//                     <div className="form-group">
//                         <label>Email</label>
//                         <input type="email" className="form-control" value={this.state.email} onChange={this.onChangeEmail} />
//                     </div>
//                     <div className="form-group">
//                         <label>Phone</label>
//                         <input type="tel" className="form-control" value={this.state.phone} onChange={this.onChangePhone} />
//                     </div>
//                     <button onClick = {this.onSubmit} type="submit" >Submit</button>
//             </div>
//       )
//   }
// }


// export default App;
