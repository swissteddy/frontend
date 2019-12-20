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
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import HighlightOffRoundedIcon from '@material-ui/icons/HighlightOffRounded';


const columns = [
  { id: 'nama', label: 'Nama', minWidth: 170 },
  { id: 'NIM', label: 'NIM', minWidth: 100 },
  {
    id: 'status',
    label: 'Status Kemahasiswaan',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'tahun',
    label: 'Tahun Masuk',
    minWidth: 170,
    align: 'right',
    format: value => value.toLocaleString(),
  },
  {
    id: 'Opsi',
    label: 'Action',
    minWidth: 170,
    align: 'center',
    format: value => value.toFixed(2),
  },
];

function createData(nama, NIM, status, tahun, Opsi) {
  return {nama, NIM, status, tahun, Opsi};
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, <div><Link to="/admin/mahasiswa/ubah"><Button><EditRoundedIcon/></Button></Link>  <Link to="/admin/mahasiswa/cek"><Button><OpenInNewIcon/></Button></Link> <Button>< HighlightOffRoundedIcon/></Button> </div>),
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