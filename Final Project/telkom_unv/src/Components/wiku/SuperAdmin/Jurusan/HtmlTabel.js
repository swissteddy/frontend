import React, { Component } from 'react';
import { Container, Typography, withStyles, Button } from '@material-ui/core';
import { Jurusan } from './Style';
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

import { Link } from 'react-router-dom';

class Tabel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grubJurusan:[],
        }
    }

    //featching API
  componentDidMount() {
    fetch("http://kampustelkom.herokuapp.com/api/kelas")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            grubJurusan: result.content
          });
        },
        (error) => {
          console.log(error)
        }
      )
  }

    render() {
        const { classes } = this.props;
        const{grubJurusan} = this.state;
        return (
            <div className={classes.wraper}>
                <Container>
                    <Typography>
                        Daftar jurusan
                    </Typography>
                    <hr />
                    <br />

                    <table className={classes.tabelBody} >
                        {/* <caption>Data Pelanggan</caption> */}

                        <thead className={classes.thead}>

                            <tr className={classes.tr}>

                                <th className={classes.th} scope="col">Jurusan</th>


                                <th className={classes.th} scope="col">Program Studi</th>


                                <th className={classes.th} scope="col">Bobot SKS</th>


                                <th className={classes.th} scope="col">Action</th>

                            </tr>

                        </thead>


                        <tbody className={classes.tbody}>
                        {grubJurusan.map((jurus, i) => (
                            <tr key={jurus._id} className={classes.tr}>

                                 {/* <td className={classes.td} scope="row" data-label="Nama">{jurus.idJurusan.namaJurusan}</td> */}


                                <td className={classes.td} data-label="Alamat">{jurus.namaKelas}</td>


                                <td className={classes.td} data-label="Email">224</td>


                                <td className={classes.td} data-label="Nomor Telepon"><div><Link  to="/admin/jurusan/ubah"><Button className={classes.td}><EditRoundedIcon/></Button></Link> <Button className={classes.td}><HighlightOffRoundedIcon/></Button> </div></td>

                            </tr>
                        ))}
                        </tbody>

                    </table>

                </Container>
            </div>
        );
    }
}

export default withStyles(Jurusan)(Tabel);