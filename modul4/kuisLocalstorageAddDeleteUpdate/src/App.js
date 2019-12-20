import React, { Component } from 'react';
import {withStyles, Table, TableBody, TableCell, TableHead, TableRow, Paper, Container, Fab, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import MinIcon from '@material-ui/icons/Minimize';
import PageBase from './PageBase';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
  button: {
    margin: theme.spacing.unit,
  }
});

const listMurid = [
  { id: 1, nama: 'Yeni', email: 'yeni@email.com', notelp: '08120123123' },
  { id: 2, nama: 'Evan', email: 'evan@email.com', notelp: '08562342342' },
  { id: 3, nama: 'Jojo', email: 'jojo@email.com', notelp: '08183242424' },
  { id: 4, nama: 'Dhani', email: 'da@email.com', notelp: '08151231213' },

]

if (localStorage.getItem("murid") === null) {
  localStorage.setItem('murid', JSON.stringify(listMurid));
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listMurid: [],
      add: false,
      nama: '',
      email: '',
      notelp: ''
    }
  }

  componentWillMount() {
    let listMurid = JSON.parse(localStorage.getItem("murid"));
    this.setState((prevState, props) => ({
      listMurid
    }))
  }

  addForm = () => {
    this.setState({ add: true })
  }

  minForm = () => {
    this.setState({ add: false })
  }

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  inserStorage = () => {
    localStorage.setItem('murid', JSON.stringify(this.state.listMurid));
  }

  tambahMurid = () => {
    let totalRow = this.state.listMurid.length
    this.setState((prevState) => ({
      listMurid: [...prevState.listMurid, {
        id: totalRow + 1,
        nama: this.state.nama,
        email: this.state.email,
        notelp: this.state.notelp
      }]
    }),
      () => { localStorage.setItem('murid', JSON.stringify(this.state.listMurid)) }
    )
  }

  hapusMurid = (id) => {
    let r = window.confirm("Do you want to delete id = " + id);
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
    const { classes } = this.props
    const { listMurid } = this.state
    console.log(listMurid)
    return (
      <PageBase title="Daftar Siswa">
        {this.state.add &&
          <Fab mini color="secondary" onClick={this.minForm} aria-label="add">
            <MinIcon />
          </Fab>
        }

        {!this.state.add &&
          <Fab mini color="primary" onClick={this.addForm} aria-label="add">
            <AddIcon />
          </Fab>
        }
              <Table>

                <TableHead>
                  <TableRow>
                    <CustomTableCell align="center" className={classes.textTable}>Nomor</CustomTableCell>
                    <CustomTableCell align="center" className={classes.textTable}>Nama</CustomTableCell>
                    <CustomTableCell align="center" className={classes.textTable}>Email</CustomTableCell>
                    <CustomTableCell align="center" className={classes.textTable}>No.Telp</CustomTableCell>
                    <CustomTableCell align="center" className={classes.textTable}>Aksi</CustomTableCell>
                  </TableRow>

                </TableHead>
                <TableBody>
                  {listMurid.map((item, i) => (
                    <TableRow>
                      <CustomTableCell align="center" className={classes.textTable}>{item.id}</CustomTableCell>
                      <CustomTableCell align="center" className={classes.textTable}>{item.nama}</CustomTableCell>
                      <CustomTableCell align="center" className={classes.textTable}>{item.email}</CustomTableCell>
                      <CustomTableCell align="center" className={classes.textTable}>{item.notelp}</CustomTableCell>
                      <TableCell align="center">
                        <Fab color = "secondary"  onClick={() => { this.hapusMurid(item.id) }}>
                          <DeleteIcon />
                        </Fab>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
          
          {this.state.add &&
            <Container style={{ marginTop: 20 }}>
              <input type="text" name="nama" value={this.state.nama} onChange={this.changeHandler} />
              <input type="text" name="email" value={this.state.email} onChange={this.changeHandler} />
              <input type="text" name="notelp" value={this.state.notelp} onChange={this.changeHandler} />
              <button onClick={this.tambahMurid}>Tambah Data</button>
            </Container>
          }
      </PageBase>
    );
  }
}

export default withStyles(styles)(App);

