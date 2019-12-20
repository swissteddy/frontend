import React, { Component } from 'react';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  paper: {
    marginRight: theme.spacing(2),
  },
  link :{
    textDecoration:"none",
  },
  linkdrop :{
    textDecoration:"none",
    color:"white",
  },
}));

export default function MenuListComposition() {
// function MenuListComposition extends Component {
  // render() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className={classes.root}>
      
      <div>
        <Link
          ref={anchorRef}
          aria-controls={open ? 'menu-list-grow' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
          className={classes.linkdrop}
        >
          Akademik
        </Link>
        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                    <MenuItem><Link className={classes.link} to="/akademik">Teknik Elektro</Link></MenuItem>
                    <MenuItem><Link className={classes.link} to="/akademik">Komunikasi & Bisnis</Link></MenuItem>
                    <MenuItem><Link className={classes.link} to="/akademik">Ilmu Terapan</Link></MenuItem>
                    <MenuItem><Link className={classes.link} to="/akademik">Ekonomi & Bisnis</Link></MenuItem>
                    <MenuItem><Link className={classes.link} to="/akademik">Informatika</Link></MenuItem>
                    <MenuItem><Link className={classes.link} to="/akademik">Industri Kreatif</Link></MenuItem>
                    <MenuItem><Link className={classes.link} to="/akademik">Teknik Industri</Link></MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}


// }

// export default MenuListComposition;