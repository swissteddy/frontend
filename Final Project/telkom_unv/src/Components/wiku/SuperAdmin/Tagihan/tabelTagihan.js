import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import {Button} from '@material-ui/core';
import {Link} from 'react-router-dom';
// material icon
import EditRoundedIcon from '@material-ui/icons/EditRounded';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';

const columns = [
  { id: 'namaJurusan', label: 'Nama Jurusan', minWidth: 170 },
  { id: 'listProdi', label: 'Program Studi', minWidth: 100 },
  {
    id: 'biaya',
    label: 'Biaya Perkuliahan',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'sks',
    label: 'Bobot SKS',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'opsi',
    label: 'Opsi',
    minWidth: 170,
    align: 'center',
    format: value => value.toFixed(2),
  },
];

function createData(namaJurusan, listProdi, biaya, sks, opsi) {
  return {namaJurusan, listProdi, biaya, sks, opsi};
}

const rows = [
  createData('Jurusan Ilmu Terapan', 'S1 Sistem Informasi', 5200000, 244,<div><Link to="/admin/tagihan/ubah"><Button><EditRoundedIcon/></Button></Link> <Button><HighlightOffRoundedIcon/></Button> </div>),
  createData('China', 'CN', 1403500365, 9596961),
  
];

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  tableWrapper: {
    maxHeight: 440,
    overflow: 'auto',
  },
});

export default function StickyHeadTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <div className={classes.tableWrapper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map(column => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(row => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map(column => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}