import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import SnackbarContent from '@material-ui/core/SnackbarContent';

const action = (
  <Button color="secondary" size="small">
    Cek Status
  </Button>
);

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 600,
  },
  snackbar: {
    margin: theme.spacing(1),
  },
}));

export default function LongTextSnackbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
      <SnackbarContent
        className={classes.snackbar}
        message="Anda telah terdaftar sebagai mahasiswa aktif di telkom university."
        action={action}
      />
     
    </div>
  );
}
